---
layout: resource
title:  "Rendering blocking resources | Issues | Networking Performance"
date:   2015-03-04
categories: Networking-Performance Issues
body-class: no-sidebar
---

As the name suggests, render blocking resource is any resource(JS / CSS / Fonts) that blocks the webpage rendering. A render blocking resource is termed as SPOF(Single Point of Failure) if it is not able to load before the timeout set by the browser for a resource fetch.

Solution:

* Load all resources asynchronously.
* Inline critical CSS and asynchronously load rest of the CSS.

Related links:

* Blocking JS: [https://developers.google.com/speed/docs/insights/BlockingJS](https://developers.google.com/speed/docs/insights/BlockingJS){:rel="nofollow"}{:target="_blank"}
* Render blocking CSS [https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css){:rel="nofollow"}{:target="_blank"}