---
layout: resource
title:  "Landing page redirects | Issues | Networking Performance"
date:   2015-03-04
categories: Networking-Performance Issues
body-class: no-sidebar
---

A landing page redirect adds unnecessary resolution time in the response time, as redirects can be avoided and must be avoided by all means, if possible.

For e.g.: many websites redirect the mobile users from their desktop website like perfaudit.com to m.perfaudit.com. In such case, a redirect can be avoided in the following cases:

- If a server responds with the mobile specific content for the same request, without redirecting the user to the mobile version of their website, which is available on either a subdomain or a different url on the same domain. A redirect to the sub domain even triggers another DNS resolution for the website, which adds up to the response time.

- If possible, websites can use responsive design for their mobile version, instead of initiating another request to redirect the user to the mobile version of the website.

Performance Tricks regarding redirects:

- 301 response status refers to the permanent redirect whereas 302 refers to a temporary redirect. A 301 redirect gets cached by the browser(unless expire time has been specified in the network request), after the first request and for the subsequent requests for the same url, browser directly pings the redirected url, and not the original url, whereas in a 302 or temporary redirect, browser pings the server for the status of the original url and does not get cached at all.

- A 302 redirect must be avoided at all times, as it never gets cached and unnecessarily adds to the response time of a request. Instead, a 301 redirect can be used with an expire time if possible.