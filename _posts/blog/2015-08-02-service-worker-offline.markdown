---
layout: post
title:  "Performance Audits now available Offline"
date:   2015-08-02
categories: Blog
body-class: no-sidebar
---

![Performance Audits now available offline](/images/blog/performance-audits-offline.jpg)

Building offline experiences has always been on our radar since AppCache rolled out a few years ago, though working with AppCache was a huge pain because of its sheer complexity. Service workers have greatly reduced/simplified the complexity involved to deliver offline experience to your web application users.

[Browser support for Service Workers](http://caniuse.com/#search=service%20workers){:rel="nofollow"}{:target="_blank"} is currently limited to just Chrome and Opera, though it has evolved beyond the stages of experimentation.

[Offline first](https://github.com/pazguille/offline-first){:rel="nofollow"}{:target="_blank"} github repository consists of every article that highlights the approaches / best practices to implement the offline experience, we found it incredibly useful while implementing the offline experience for PerfAudit and thus recommend it.

 **Note**: Service workers run only on pages served via HTTPS, thus HTTPS is a requirement for implementing an offline experience via Service Workers.