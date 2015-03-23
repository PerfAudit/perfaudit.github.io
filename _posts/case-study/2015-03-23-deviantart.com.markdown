---
layout: case-study
title:  "Case Study | DeviantArt.com | PerfAudit"
organization: "DeviantArt.com"
date:   2015-03-23 01:55:40
categories: case-study
---

Hey folks! Today we have come up with the case study for <a href="http://www.deviantart.com/" target="_blank">DeviantArt.com</a>, the largest online social network for artists and art enthusiasts, and a platform for emerging and established artists to exhibit, promote, and share their works with an enthusiastic, art-centric community.

<img src="/images/case-study/deviantart.com/homepage.jpg">

It is among the top 100 of all trafficked websites on the Internet. They have over 32 million registered members and attract over 65 million unique visitors per month. Their members upload over 160,000 original art works every day, everything from painting and sculpture to digital art, pixel art, films, and anime.

<a href="http://www.alexa.com/siteinfo/deviantart.com" target="_blank" title="DeviantArt Alexa Rank"><img src="/images/case-study/deviantart.com/alexa-ranking.png"></a>

## Live auditing

<iframe width="560" height="315" src="http://www.youtube.com/embed/ukNmA2LhIi4" frameborder="0" allowfullscreen=""></iframe>


##How fast does deviantart.com load on average?

#### Very Very Slow around 46.382 seconds when we loaded(1.8 seconds on average), 66% of sites are faster (as per data from Alexa).

## Network profiling

<a href="https://developers.google.com/speed/pagespeed/insights/?url=www.deviantart.com&tab=mobile" target="_blank" title="DeviantArt desktop improvements"><img src="/images/case-study/deviantart.com/pagespeed-score-desktop.png"></a>

Desktop pagespeed score for DeviantArt is just 24, which specifies a tremendous scope for improvement. DeviantArt displays paintings, sculpture to digital art, pixel art, films, and anime i.e. it is a image heavy website.

<img src="/images/case-study/deviantart.com/content-breakdown.png">

Thus maximum compression, suitable resizing and caching of image resources should be their primary action, which is verified by PageSpeed's recommendation which says:

### Optimize the following images to reduce their size by 2.7MiB (48% reduction).

2.7MB of size reduction just through compression and resizing of static images must be tackled on priority.

Resizing and Compression of images are among the redundant tasks that must be performed either in batch, or as soon as an image is uploaded by the user on DeviantArt.

Follow this <a href="http://addyosmani.com/blog/image-optimization-tools/" target="_blank">blog post</a> by Addy Osmani, describing the available Image Optimization Tools.

### Reduce server response time

PageSpeed insights also suggests to reduce the server response time, which is currently more than 1.5 seconds.

<img src="/images/case-study/deviantart.com/deviantart-server-response-time.png">

Understanding the processing time of 1.5+ seconds taken by the server can be attributed to a heavy processing getting triggered on every request to Homepage. It can also be scaling issue, amounted by the traffic at dispense, thus a solution for reducing the server side response time can only be suggested appropriately after understanding the architecture of DeviantArt. Though the generic solutions used by businesses to resolve this issue are:

* Caching the entire HTML generated for specific requests(especially for homepages) for X minutes, so as to completely eliminate any server side processing in that duration of time.
* Adding Cache layers at multiple points where processing / retreival of data is involved via external services / dependencies.

### Reduce First Pixel Render Time

First pixel render time as recorded by us is around 6.29 seconds, which is huge. Eliminating render-blocking JavaScript and CSS in the above fold content which currently includes 9 CSS files, will surely help to reduce the first pixel render time drastically. Furthermore, the critical CSS can then be calculated and added in the HEAD section, which is not present currently.

<a href="http://www.webpagetest.org/video/compare.php?tests=150315_36_FKK-r:1-c:0" target="_blank" title="Filmstrip view DeviantArt page performance"><img src="/images/case-study/deviantart.com/filmstrip-view.png"></a>

The first critical issue describes the reason for the increased first pixel render time, rendering is quite slow and it takes about 5.5 second to get the first glimpse of readable content, though the first pixel render time is about 3 seconds.

### Mobile Specific Issues

<a href="https://developers.google.com/speed/pagespeed/insights/?url=www.deviantart.com&tab=mobile" target="_blank" title="DeviantArt mobile improvements"><img src="/images/case-study/deviantart.com/pagespeed-score-mobile.png"></a>

Compression and Resizing of images is again highlighted in the page speed issues, which has already been discussed in the issues listed above.

Other necessary optimizations possible for DeviantArt.com:

* Make fewer HTTP requests, use concatentation of static resources
* Leverage browser caching of static resources with appropriate response headers.

## Profiling Rendering Performance

### Sticky header

The first thing we saw while browsing this website was huge jank while scrolling - much more than we have seen in our [previous](http://perfaudit.com/case-study/caniuse.com/) [case studies](http://perfaudit.com/case-study/hindustantimes.com/). Profiling the page scroll in Chrome devtool timeline, we noticed the sticky header on the website. Come on...this got to be the most popular rendering issue on the web!

![Bad paints](/images/case-study/deviantart.com/bad-paints.png)

As in previous case studies, this can be simply fixed using the `transform: translateZ(0)` hack.

### Animated GIFs

To verify that no more unnecessary paints were happening, we switched on the **Show paint rectangles** option in the **Rendering** tab. Here is something strange on their page:

![Animated gifs](/images/case-study/deviantart.com/animated-gifs.png)

The green paint rectangle seen above basically shows up every second! Yes, even when you are not interacting with the page. But why? Looking closely revealed small animated GIFs in that green area. GIFs are animated, they need to be repainted for every frame, sure. But why such a big paint rectangle? This is again a result of [*union of damaged regions*](http://benfrain.com/improving-css-performance-fixed-position-elements/). If you notice, they are 4 GIFs in the 4 corners of the green rectangle. Yes, the paint rectangles of the four images got unioned and hence, a big paint rectangle.

Now we could promote every GIF to its own layer to avoid union of paint rectangles and that actually helps in lowering down the paint area as seen below:

![Better paints](/images/case-study/deviantart.com/better-paints.png)

But we still saw few paint spikes here and there which were mainly due to **Composite Layers** event. There are around 20 such GIFs on this page and taking every GIF to its own layer is probably causing too much texture transfer from CPU to GPU as GIF need to painted with different texture every frame. We are not very clear on how this can be resolved further. But we guess its a tradeoff one needs to consider according to the scenario at hand. We would like to hear suggestions on what can be done to improve this further.

That is it for deviant.com from our side. Till next perf study!