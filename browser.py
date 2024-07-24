"""
TODO:
1-3
FIX 1-6
1-8 CACHE TIMER
1-9
"""

import socket, ssl, tkinter, main
from io import StringIO 

WIDTH, HEIGHT = 800, 600
HSTEP, VSTEP = 13, 18
SCROLL_STEP = 100

class Browser:
    """A browser.
    
    Attributes:
        connection: Connection dictionary to store different sockets so they created won't be created again.
        scheme: URL scheme (text before ://).
        host: Website host name.
        port: Port 443 and 80 for https and http requests (no ports for others).
    """

    cache = {}
    prev = None
    
    def __init__(self, url):
        """Stores the URL given into different pieces.

        Args:
            url (string): URL given
        """

        self.scroll = 0
        self.window = tkinter.Tk()
        self.canvas = tkinter.Canvas(
            self.window, 
            width = WIDTH, 
            height = HEIGHT
        )
        
        self.window.bind("<Down>", self.scrolldown)
        self.window.bind("<Up>", self.scrollup)
        self.canvas.pack()
        
        self.connection = {}
        self.scheme, url = url.split("://", 1)
        if (self.scheme.find("view-source") == -1): 
            assert self.scheme in [
            "http", "https", "file"], "Scheme not supported or non existent."
        if (self.scheme.find("https") > -1):
            self.port = 443
        elif (self.scheme.find("http") > -1):
            self.port = 80
        
        if "/" not in url:
            url += "/"
        
        # Files have many slashes.
        if (self.scheme.find("file") == -1):
            self.host, url = url.split("/", 1)
        else:
            #If it is a file scheme, just put the entire path as the host.
            self.host = url
            
        self.path = "/" + url
        
        # Change ports if necessary.
        # Ex. localhost:8000
        if ":" in self.host and self.scheme != "file":
            self.host, port = self.host.split(":", 1)
            self.port = int(port)
            
    def load(self):
        response = self.request()
         
        if (response != None and self.scheme.find("view-source") == 0):
            self.layout(main.source(response))
            self.draw()
        elif (response != None):
            self.layout(main.lex(response))
            self.draw()
        else:
            Browser.prev = self.window
            self.window.withdraw()
            
    def layout(self, text):
        self.display_list = []
        cursor_x, cursor_y = HSTEP, VSTEP
        
        for c in text:
            if (cursor_x >= WIDTH - HSTEP):
                cursor_y += VSTEP
                cursor_x = HSTEP
            self.display_list.append((cursor_x, cursor_y, c))
            cursor_x += HSTEP
            
    def draw(self):
        self.canvas.delete("all")
        for x, y, c in self.display_list:
            # If y position is outside of the screen
            if (y > self.scroll + HEIGHT): continue
            if (y + VSTEP < self.scroll): continue
            
            self.canvas.create_text(x, y - self.scroll, text=c)  
        
    def scrolldown(self, e):
        self.scroll += SCROLL_STEP
        self.draw()      
        
    def scrollup(self, e):
        self.scroll -= SCROLL_STEP
        self.draw()         
            
    def request(self):
        """Given the scheme, this function calls 
        another function respective to the scheme.
        """
        
        # We don't need to request information online about 
        # the file stored in our computer.
        if (self.scheme == "file"):
            return open(self.host).read()
        elif (self.scheme.find("view-source") == 0):
            return self.view_source()
        else:
            if (self.host + str(self.port) not in self.connection.keys()):
                return self.request_new_website()
            else:
                return self.get_website()
    
    def request_new_website(self):
        """If the socket for this specific website
        hasn't be established, create one.
        Needs fixing for keep-alive connection header.
        """
        
        # Used to send info back and forth.
        s = socket.socket( 
            family = socket.AF_INET,
            type = socket.SOCK_STREAM,
            proto = socket.IPPROTO_TCP
        )
        if (self.scheme.find("https") != -1):
            ctx = ssl.create_default_context()
            s = ctx.wrap_socket(s, server_hostname = self.host)
        
        s.connect((self.host, self.port))
        
        headers = {
            "Host": f"{self.host}",
            "Connection": "close",
            "Cache-Control": "max-age=9001",
            "User-Agent": "pie"
        }
        
        get_request = StringIO()
        get_request.write(f"GET {self.path} HTTP/1.1\r\n")
        
        for key, value in headers.items():
            get_request.write(f"{key}: {value}\r\n")
        get_request.write("\r\n")
        
        s.send(get_request.getvalue().encode("utf8"))
        self.connection[self.host + str(self.port)] = s
        
        return self.get_website()
        
    def get_website(self):
        """For schemes build on gathering a website 
        from the web, this function handles that.
        """
        
        control_cache = False
        s = self.connection[self.host + str(self.port)]
        
        if (self.host + str(self.port) in self.cache.keys()):
            response = self.cache[self.host + str(self.port)]
        else:
            response = s.makefile("r", encoding = "utf-8", newline = "\r\n")

            statusline = response.readline()
            
            version, status, explanation = statusline.split(" ", 2)
            status = int(status) // 100
            
            headers_result = {}
            
            while (line := response.readline()) != "\r\n": #after is HTML
                header, value = line.split(":", 1)
                headers_result[header.casefold()] = value.strip()
                
                #if (status == 2 and header == "Content-Length"):
                #   content_length = int(value)
                
                if (status == 2 and header == "Cache-Control" and value.strip() != "no-store"):
                    control_cache = True
                if (status == 3 and header == "Location"):
                    # Sometimes redirects may not have the scheme just yet.
                    if (headers_result[header.casefold()].find("http") == -1):
                        headers_result[header.casefold()] = self.scheme + "://" + self.host + headers_result[header.casefold()]
                    Browser(headers_result[header.casefold()]).load()
                    
                    if (Browser.prev != None):
                        Browser.prev.destroy()
 
                    return
        
        if (control_cache):
            self.cache[self.host + str(self.port)] = response
        return response.read()
    
    def view_source(self):
        """For schemes that want to see the source HTML.
        """
        if (self.scheme.find("file") > -1):
            return open(self.host).read()
        else:
            return self.request_new_website()