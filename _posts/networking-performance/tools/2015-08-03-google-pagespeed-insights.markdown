---
layout: resource
title:  "Google PageSpeed Insights | Tools | Networking Peformance"
date:   2015-03-04
categories: Networking-Performance Tools
body-class: no-sidebar
---

[Page Speed Insights](https://developers.google.com/speed/pagespeed/insights/?url=perfaudit.com){:rel="nofollow"}{:target="_blank"} measures the performance of a page for mobile devices and desktop devices. It fetches the url twice, once with a mobile user-agent, and once with a desktop-user agent.

The PageSpeed Score ranges from 0 to 100 points. A higher score is better and a score of 85 or above indicates that the page is performing well. Please note that PageSpeed Insights is being continually improved and so the score will change as we add new rules or improve our analysis.

![100/100 PageSpeed score PerfAudit Mobile](/images/networking-performance/100-mobile-pagespeed-score-perfaudit.jpg)

PageSpeed Insights measures how the page can improve its performance on:

**Time to above-the-fold load**: Elapsed time from the moment a user requests a new page and to the moment the above-the-fold content is rendered by the browser.

**Time to full page load:** Elapsed time from the moment a user requests a new page to the moment the page is fully rendered by the browser.

However, since the performance of a network connection varies considerably, PageSpeed Insights only considers the network-independent aspects of page performance: the server configuration, the HTML structure of a page, and its use of external resources such as images, JavaScript, and CSS. Implementing the suggestions should improve the relative performance of the page. However, the absolute performance of the page will still be dependent upon a user’s network connection.