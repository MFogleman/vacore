#! /usr/bin/python

print "Content-type: text/html"
print ""

import cgi
import cgitb
import urllib2
import re
import string

data = cgi.FieldStorage()
url = data["targetUrl"].value

req = urllib2.Request(url)

response = urllib2.urlopen(req)

page = response.read()

text = page[page.find('<span id="va_code">'):page.find("</section><input")] 

finaltext = re.sub(r'<(?!\/?p(?=>|\s.*>))\/?.*?>','', text)

print finaltext

