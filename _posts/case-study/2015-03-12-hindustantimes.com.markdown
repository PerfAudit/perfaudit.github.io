---
layout: case-study
title:  "Case Study | HindustanTimes.com | PerfAudit"
date:   2015-03-12 01:55:40
categories: case-study
---

Hey folks! Today we have come up with the case study for [HindustanTimes.com](http://www.hindustantimes.com/). HindustanTimes.com represents the web version of HT Media, which is one of India's largest media companies across states and media platforms.

![Hindustan Times Alexa Rank](/images/case-study/hindustantimes.com/alexa-ranking.png)

## Live auditing

<iframe width="560" height="315" src="https://www.youtube.com/watch?v=eyg5ePH8opM" frameborder="0" allowfullscreen=""></iframe>


##How fast does hindustantimes.com load on average?

#### Very Slow (4.578 Seconds), 95% of sites are faster (as per data from Alexa).

## Network profiling

![HindustanTimes.com desktop issues](/images/case-study/hindustantimes.com/pagespeed-score-desktop.png)

Desktop pagespeed score for HindustanTimes is just 59, which specifies a lot of scope for improvement. As Hindustan Times is a media organization, I expect a lot of images to be a part of their content, thus maximum compression and caching of image resources should be their primary concern. Also, they are not using Webp image format, which can effectively perform in reducing their images' size.

Minification and Compression are the redundant tasks that one must integrate in their deployment process, as they significantly contribute in increasing the page performance while decreasing the asset size and page load time of a webpage.

![HindustanTimes.com mobile issues](/images/case-study/hindustantimes.com/pagespeed-score-mobile.png)

The first critical issue describes the reason for the increased first pixel render time, rendering is quite slow and it takes about 5.5 second to get the first glimpse of readable content, though the first pixel render time is about 3 seconds. Here's the filmstrip view for HindustanTimes.com's pageload:

![Filmstrip view Hindustan Times page performance](/images/case-study/hindustantimes.com/filmstrip-view.png)

To resolve the above mentioned issue, as described in the pagespeed insights, one must avoid to have render blocking JS and CSS inside <head> tag. As mentioned above in desktop optimizations, caching, compression and minification must be handled at all times, and must be made a part of the deployment process.

Other necessary optimizations possible for HindustanTimes.com:

* Make fewer HTTP requests, use concatentation of static resources
* Use mulitple domain names for parallel resource fetching
* Compress components with gzip

## Profiling Rendering Performance

When scrolling down the page down over sections that we have not viewed before, we experienced frequent jerks.

A quick profiling in the Chrome devtool timeline showed us this:

![timeline graph](/images/case-study/hindustantimes.com/timeline-graph.png)

From the above graph we get to know that 2 things are responsible for the visible jank: script and paint, the latter having more effect. Let us tackle paint first.

Looking at the paint events in the timeline it is evident that the complete page is getting painted for some reason.

![complete page paint](/images/case-study/hindustantimes.com/fixed-position-repaints.png)

Notice the sections highlighted in the above image. Those are the elements which are fixed positioned in the website. So we get our paint issue:
1. Fixed positioned elements are repainted continously as they are constantly visible.
2. Moreover, as all fixed elements are on same layer, the paint rectangle would be union of those individual element rectangles. And that becomes almost the complete page in our case, [causing a full page repaint](http://benfrain.com/improving-css-performance-fixed-position-elements/).

Solution (hack) here is to just give those fixed positioned elements their own composite layer which actually prevents fixed positioned elements from repainting. One way to do that is by following CSS:

<pre class="prettyprint">
.some-fixed-element {
	position: fixed;
	transform: translateZ(0);
}
</pre>

Rerun the timeline recording:

![repaints-removed](/images/case-study/hindustantimes.com/repaints-removed.png)
And voila! No more repaint spikes in the timeline.

Now over to the second reason of overshooting our frame limit: scripts. Inspecting of an seemingly heavy script execution event shows that it is happening on `scroll` event - as expected. Digging deep, we find that its actually jQuery that is causing the issue.

![long-script](/images/case-study/hindustantimes.com/script-inspection.png)

Devtools timeline tells us the exact line in the script which caused the execution time. Putting a breakpoint on that line reveals that their is actually a jQuery plugin being used to pin elements on the website and it performs some checks during the `scroll` event to do so.

![long-script](/images/case-study/hindustantimes.com/script-issue-plugin.png)

In this case, their isn't a straightforward solution. The plugin's implementation will have to be tweaked to make it more performant.

That is it for this audit. If you want us to audit any specific website, do let us know in the comments or on [twitter](https://twitter.com/perfaudit). We'll definitely try to take it up as our next case study.

Do not forget to follow us for more such perfy performace audits.