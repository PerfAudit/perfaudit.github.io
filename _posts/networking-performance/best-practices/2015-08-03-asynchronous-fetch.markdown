---
layout: resource
title:  "Asynchronous resource loading | Best Practices | Networking Performance"
date:   2015-03-04
categories: Networking-Performance Best-Practices
body-class: no-sidebar
---

Fetching of resources in a fashion which is non-render blocking is termed as asynchronous resource fetching.

There are several ways to load resources asynchronously:

<pre>
function stylesheet(url) {
    var s = document.createElement('link');
    s.type = 'text/css';
    s.src = url;
    var x = document.getElementsByTagName('head')[0];
    x.appendChild(s);
}
</pre>

<pre>
function script(url) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var x = document.getElementsByTagName('head')[0];
    x.appendChild(s);
}
</pre>

Using [async](http://www.w3.org/TR/html5/scripting-1.html#attr-script-async){:rel="nofollow"}{:target="_blank"} attribute

`<script async src="script.js"></script>`

or by using [defer](http://www.w3.org/TR/html5/scripting-1.html#attr-script-async){:rel="nofollow"}{:target="_blank"} attribute  against script tags

`<script defer src="script.js"></script>`