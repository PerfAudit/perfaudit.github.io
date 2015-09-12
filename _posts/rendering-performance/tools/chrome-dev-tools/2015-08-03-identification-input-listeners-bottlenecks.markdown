---
layout: resource
title:  "Identify bottlenecks input listeners | Chrome Dev Tools | Rendering Performance"
date:   2015-03-04
categories: Rendering-Performance Tools Chrome-Dev-Tools
body-class: no-sidebar
---

Show potential scroll bottlenecks is an option provided in the chrome developer tools, that allows you to identify the listeners associated with certain elements that trigger everytime a scroll event is triggered on a webpage.

<div class="center">
  <img src="/images/networking-performance/show-potential-scroll-bottleneck-devtool.jpg" alt="Show potential scroll bottlenecks chrome dev tools">
</div>

The following screenshot displays the option in Chrome dev tools that identifies the events and associated elements that can cause an issue in the rendering performance of a webpage as such events trigger frequently and if the processing takes more than 16ms inside these binded events, then it leads to jank.

An instance of an identification of such an issue is displayed in the below screenshot:

<div class="center">
  <img src="/images/networking-performance/mousewheel-event-listener.png" alt="Mouse wheel event listener potential scroll bottleneck">
</div>