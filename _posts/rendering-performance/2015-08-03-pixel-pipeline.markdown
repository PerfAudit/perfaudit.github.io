---
layout: resource
title:  "Pixel pipeline | Rendering Performance"
date:   2015-03-04
categories: Rendering-Performance
body-class: no-sidebar
---

The following are the components of Pixel pipeline:

* JavaScript operations
* Style changes
* Layout (operations that trigger layout changes / positioning / size change of elements on a webpage)
* Paint (operations that trigger a repaint of element, also when a layout operation is triggered)
* Composite (operations in which the individual layers are composited on top of each other)

<div class="center">
  <img src="/images/networking-performance/pixel-pipeline.jpg" alt="Pixel pipeline Chrome" width="400" />
</div>

Related Links:

- [Pixels are expensive](https://aerotwist.com/blog/pixels-are-expensive/){:rel="nofollow"}{:target="_blank"}

- [Simplify paint complexity and reduce paint areas](https://developers.google.com/web/fundamentals/performance/rendering/simplify-paint-complexity-and-reduce-paint-areas){:rel="nofollow"}{:target="_blank"}

- [CSS Triggers](http://csstriggers.com/){:rel="nofollow"}{:target="_blank"}

- [How CSS Triggers came into being](https://aerotwist.com/blog/css-triggers/){:rel="nofollow"}{:target="_blank"}