import sys
from os import getcwd
from browser import *

def lex(content):
    """Renderer for HTML.

    Args:
        content (file): HTML file of the website.
    """
    
    if (content == None): return
    
    text = ""
    in_tag = False
    current = 3

    for line in content.splitlines():
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
                    text += "<"
                    current = 0
                elif (count == index_greater):
                    text += ">"
                    current = 0
                else:
                    text += c
                
        text += "\n"

    return text

def source(content):
    """Renderer for HTML source

    Args:
        content (file): HTML file of the website.
    """
    
    if (content == None): return
    
    text = ""

    for line in content.splitlines():
        for c in line:
            text += c
        text += "\n"

    return text
            
def load(url):
    """Calls URL.request to start processing.

    Args:
        url (URL): URL object to load a specific url.
    """
    
    url.request()
    
if __name__ == "__main__":
    if (len(sys.argv) > 1):
        Browser(sys.argv[1]).load()
    else:
        #f"view-source:file://{getcwd()}/index.html"
        Browser(f"file://{getcwd()}/index.html").load()

    tkinter.mainloop()