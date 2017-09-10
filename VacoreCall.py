#! /home/yedrpjgy/virtualenv/public__html_vacore/2.7/bin/python2.7 


print "Content-type: text/html"
print ""

import cgi
import cgitb
import urllib2
import re
import string
import json
import sys
try:
        data = cgi.FieldStorage()
        url = data["targetUrl"].value
	req = urllib2.Request(url)
        response = urllib2.urlopen(req)
	page = response.read()
	print page
except:
	print 'error'
	raise
