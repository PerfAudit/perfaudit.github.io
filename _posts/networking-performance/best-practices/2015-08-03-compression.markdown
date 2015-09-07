---
layout: resource
title:  "Compression | Best Practices | Networking Performance"
date:   2015-03-04
categories: Networking-Performance Best-Practices
body-class: no-sidebar
---

Compression is the task to minimize the content of the response body using best available support for possible encodings.

There are several types of compressions that can be applied on to the response:

- Image compression (includes compression to the minimum lossless size in the most apt format)
- Fonts, HTML, CSS and JS compression (includes minification/uglification using Closeure compiler scripts for better performance)
- Gzipping of all resources sent to the browser