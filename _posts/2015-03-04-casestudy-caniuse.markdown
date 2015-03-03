---
layout: post
title:  "Case-study - caniuse.com"
date:   2015-03-04
categories: casestudy
---

Hello folks! This is Perfaudit's first case study for which we chose [caniuse.com](http://caniuse.com/). Lets dive in.

## Network profiling
![Google pagespeed issues](/images/2015/03/caniuse-pagespeed.png)

As we see, caniuse.com has a google pagespeed score of 84 which is pretty descent. There are few issues pointed out by pagespeed which are mainly due to 3rd party files not leveraging browser caching or coming unminified and uncompressed. These are mostly harmless but still can be fixed by caching these external files on the website itself so as to get full control over them.

## After load profiling

### Issue: Janky scrolling

On caniuse.com homepage, if you scroll down the page hovering over the list of links, you will experience occasional jerks. That is what we call a "Jank". Lets try debugging the issue using Google Chrome's devtool timeline. Running a quick timeline recording, we get the
following graph:

![Paint janks](/images/2015/03/caniuse-paint-janks.png)

This shows that we are shooting our limit due to some paint events. Paint events happen when something needs to be drawn on the page. This means when we are scrolling while hovering over the list, something is being drawn. Yes, its those links changing their color when hovered on. If you were to inspect one of those links and enable the `:hover` pseudo class on them, you'll see the culprit style:

![Jank causing CSS](/images/2015/03/caniuse-jank-causing-css.png)

If you disable the `color` property on `:hover` and rerun a timeline recording, you'll notice that there are no more paint events crossing the 60fps bar. Better performance.

To solve this, there is a [neat trick](http://www.thecssninja.com/css/pointer-events-60fps) by Ryan Seddon to listen for scroll event and disable pointer events on an element, say `<body>`, so that mouse dependent paints do not happen:

{% highlight javascript %}
// JS
var timeout, pointerEventsDisabled;
window.addEventListener('scroll', function () {
	clearTimeout(timeout);
	if (!pointerEventsDisabled) {
		document.body.classList.add('no-pointer');
		pointerEventsDisabled = true;
	}
	timeout = setTimeout(function () {
		document.body.classList.remove('no-pointer-events');
		pointerEventsDisabled = false;
	}, 500);
})
{% endhighlight %}

{% highlight css %}

// CSS
.no-pointer-events {
.no-pointer-events * {
	pointer-events: none !important;
}
{% endhighlight %}

This will essentially disable the pointer events as soon as the scroll starts and enable them half a second after the last scroll event fires.