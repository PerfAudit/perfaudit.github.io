---
layout: case-study
title:  "Case Study | MaterialUp.com | PerfAudit"
organization: "MaterialUp.com"
date:   2015-02-26 01:55:40
categories: case-study
---

Hey folks! Today we have come up with the case study for <a href="http://www.materialup.com/" target="_blank">materialup.com</a>, a website that daily showcases the very best Material designs apps, websites and concepts.

<br><img class="center" src="/images/case-study/materialup.com/homepage.jpg"><br>

MaterialUp was originally just a listing page with only 1 showcase a day. No votes, no comments, not even a way to login. Fast forward 6 months later, they new have over 1 million visitors, 10,000+ users, 20,000+ newsletter subscribers, over 35,000 upvotes and 2,000+ showcased Material Design examples and tools. The MaterialUp community is from all over the world and from any size of companies: Adobe, Google, Facebook, Trello but also small agencies and much talented freelancers.

<br><a href="http://www.alexa.com/siteinfo/materialup.com" target="_blank" title="MaterialUp Alexa Rank"><img src="/images/case-study/materialup.com/alexa-ranking.png"></a>

##How fast does materialup.com load on average?

#### Very Very Slow around 38.729 seconds when we loaded(3.27 seconds on average), 83% of sites are faster (as per data from Alexa).

## Network profiling

<a href="http://www.webpagetest.org/result/150729_3F_110E/">WebPageTest for MaterialUp</a>

<a href="https://developers.google.com/speed/pagespeed/insights/?url=www.materialup.com&tab=mobile" target="_blank" title="MaterialUp desktop improvements"><img src="/images/case-study/materialup.com/pagespeed-score-desktop.png"></a>

Desktop pagespeed score for MaterialUp is just 27, which specifies a tremendous scope for improvement. MaterialUp is an image heavy website, and displays loads of animated gifs and pngs for the most popular material design submissions.

Maximum compression, suitable resizing and caching of image resources should be their primary action, which is verified by PageSpeed's recommendation which says:

### Optimize the following images to reduce their size by 2.4MB (73% reduction).

2.4MB of size reduction just through compression and resizing of static images must be tackled on priority.

Resizing and Compression of images are among the redundant tasks that must be performed either in batch, or as soon as an image is uploaded by the user on MaterialUp.

### Reduce First Pixel Render Time

First pixel render time as recorded by us is around 1.3 seconds, which has the scope for improvement. Eliminating render-blocking JavaScript and CSS from the above fold content, will surely help to reduce the first pixel render time drastically. Furthermore, the critical CSS can then be calculated and added in the HEAD section, which is not present currently.

### Mobile Specific Issues

<a href="https://developers.google.com/speed/pagespeed/insights/?url=www.materialup.com&tab=mobile" target="_blank" title="MaterialUp mobile improvements"><img src="/images/case-study/materialup.com/pagespeed-score-mobile.png"></a>

Compression and Resizing of images is again highlighted in the page speed issues, which has already been discussed in the issues listed above.

Other necessary optimizations possible for materialup.com:

* Eliminate render-blocking JavaScript and CSS in above-the-fold content
* Leverage browser caching of static resources with appropriate response headers.

## Profiling Rendering Performance

Let's start with the profiling and understand if there's any issue with the rendering performance at all or is it just our perception to think that MaterialUp is being janky.

![Timeline browser dev tools exceed 60fps](/images/case-study/materialup.com/devtools-timeline-paint-operations.jpg)

In the timeline above, several frames are visible exceeding the 16ms frame window thereby reducing the frame rate to around 12-40fps(while scrolling).

### Sticky header

The first thing we saw while browsing this website was huge jank while scrolling - much more than we have seen in our previous [case studies](http://perfaudit.com/case-study/hindustantimes.com/). Profiling the page scroll in Chrome devtool timeline, we noticed the sticky header on the website. It surely is the most popular rendering issue on the web!

<br>
![Bad paints](/images/case-study/materialup.com/bad-paints.jpg)

As in previous case studies, this can be simply fixed using the `transform: translateZ(0)` or `will-change: transform` hack.

### Hover Interactions

Mouse hover upon the posts triggers animations on the elements inside the post. These gestures give a great feedback to the user as per material design guidelines, though they are paint intensive operations and must be disabled when scrolling, as they have the ability to make us exceed the small 16ms frame window.

<br>
![Hover interactions](/images/case-study/materialup.com/hover-interaction.jpg)

### Animated GIFs

To verify that no more unnecessary paints were happening, we switched on the **Show paint rectangles** option in the **Rendering** tab. Here is something strange on their page:

<br>
![Animated gifs](/images/case-study/materialup.com/animated-gifs.jpg)

The three green paint rectangle seen above basically shows up every second! Yes, even when you are not interacting with the page. But why? These are animated GIFs in that green area. GIFs are animated, they need to be repainted for every frame.

A solution to this issue, is already in use by many other popular websites which render GIFs such as 9gag.com, where animated gifs are disabled by replacing their source with another non-animating image when they are not visible i.e. not present in the view port of the screen.

<br>
![Paused gifs](/images/case-study/materialup.com/paused-gifs.jpg)

That is it for MaterialUp.com from our side. Till next perf study!