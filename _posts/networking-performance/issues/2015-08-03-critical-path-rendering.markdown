---
layout: resource
title:  "Critical path rendering | Issues | Networking Performance"
date:   2015-03-04
categories: Networking-Performance Issues
body-class: no-sidebar
---

Critical rendering path refers to the process where HTML, CSS and JS renders into pixels onto the screen. The process is essential to understand and has huge significance as the first pixel render time is impacted by the size, order and execution of HTML, CSS and JS.

The faster the start render time, the better is the feedback given to the user about the response of a web application, thereby affecting the user's overall experience.

![Critical rendering path](/images/networking-performance/critical-rendering-path.png)

The above screenshot describes the difference between the start render time of two variations of a webpage, applied before and after the performance customizations. As you may see, after applying the performance optimizations upon the website evaluated, the start render time descreases to 0.2s, while earlier, before applying the optimizations, the same web application doesn't load at even 0.5s.