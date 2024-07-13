import socket, ssl, sys
from os import getcwd
from io import StringIO  

class URL:
    """A browser.
    
    Attributes:
        connection: Connection dictionary to store different sockets so they created won't be created again.
        scheme: URL scheme (text before ://).
        host: Website host name.
        port: Port 443 and 80 for https and http requests (no ports for others).
    """
    
    def __init__(self, url):
        """Stores the URL given into different pieces.

        Args:
            url (string): URL given
        """
        
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
            
        if (self.scheme != "file" and self.scheme != "view-source:file"):
            self.host, url = url.split("/", 1) #grabs only the first slash
        else:
            self.host = url
            
        self.path = "/" + url
        
        # Change ports if necessary.
        # Ex. localhost:8000
        if ":" in self.host and self.scheme != "file":
            self.host, port = self.host.split(":", 1)
            self.port = int(port)
                    
    def request(self):
        """Given the scheme, this function calls 
        the another function respective to the scheme.
        """
        
        if (self.scheme == "file"):
            show(open(self.host))
        elif (self.scheme.find("view-source") == 0):
            self.view_source()
        else:
            if (self.host + str(self.port) not in self.connection):
                self.request_new_website()
            else:
                self.get_website()
    
    def request_new_website(self):
        """If the socket for this specific website
        hasn't be established, create one.
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
            "User-Agent": "pie"
        }
        
        # Process of writing Telenet-like commands.
        get_request = StringIO()
        get_request.write(f"GET {self.path} HTTP/1.1\r\n")
        
        for key, value in headers.items():
            get_request.write(f"{key}: {value}\r\n")
        get_request.write("\r\n")
        
        s.send(get_request.getvalue().encode("utf8"))
        self.connection[self.host + str(self.port)] = s
        self.get_website()
        
    def get_website(self):
        """For schemes build on gathering a website 
        from the web, this function handles that.
        """
        
        s = self.connection[self.host + str(self.port)]
        response = s.makefile("r", encoding = "utf-8", newline = "\r\n")
        statusline = response.readline()
        version, status, explanation = statusline.split(" ", 2)
        status = int(status) // 100
        
        headers_result = {}
        
        while (line := response.readline()) != "\r\n": #after is HTML
            header, value = line.split(":", 1)
            headers_result[header.casefold()] = value.strip()
            
            if (status == 3 and header == "Location"):
                # Sometimes redirects may not have the scheme just yet.
                if (headers_result[header.casefold()].find("http") == -1):
                    headers_result[header.casefold()] = self.scheme + "://" + self.host + headers_result[header.casefold()]
                load(URL(headers_result[header.casefold()]))
                return 
            
        assert "transfer-encoding" not in headers_result
        assert "content-encoding" not in headers_result
        
        if (self.scheme.find("view-source") == 0):
            self.response = response
        else:
            show(response)
    
    def view_source(self):
        """For schemes that want to see the source HTML.
        """
        
        if (self.scheme.find("file") > -1):
            self.response = open(self.host)
        else:
            self.request_new_website()
            
        for line in self.response:
            for c in line:
                print(c, end = "")
    
def show(content):
    """Renderer for HTML.

    Args:
        content (file): HTML file of the website.
    """
    
    in_tag = False
    current = 3
    
    for line in content.read().splitlines():
        index_less = line.find("&lt;")  
        index_greater = line.find("&gt;")
        count = -1;
        
        for c in line:
            count += 1
            if (current < 3):
                current += 1
                continue
            if c == "<" and index_less != count:
                in_tag = True
            elif c == ">" and index_greater != count:
                in_tag = False
            elif not in_tag:
                if (count == index_less):
                    print("<", end = "")
                    current = 0
                elif (count == index_greater):
                    print(">", end = "")
                    current = 0
                else:
                    print(c, end = "") # no new line
                
        print()
            
def load(url):
    """Calls URL.request to start processing.

    Args:
        url (URL): URL object to load a specific url.
    """
    
    url.request()
    
if __name__ == "__main__":
    if (len(sys.argv) > 1):
        load(URL(sys.argv[1]))
    else:
        load(URL(f"file://{getcwd()}/index.html"))