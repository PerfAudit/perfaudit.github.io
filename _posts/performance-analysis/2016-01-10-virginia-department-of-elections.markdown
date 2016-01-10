---
layout: post
title:  "Virginia Board of Elections' website"
date:   2016-01-10
categories: performance-analysis
body-class: no-sidebar
---


This performance analysis is a cross post of the [conversation](http://statescoop.com/virginia-overhauls-election-results-website-combat-crashes/){:rel="nofollow"}{:target="_blank"} between a media group and Matthew Davis, the Virginia’s IT department’s chief information officer.


### Cause:

Earlier in 2014, Virginia Board of Elections' website crashed when the server became overloaded due to huge traffic, as mentioned in this news [article](http://www.dailypress.com/news/politics/dp-elections-database-crash-worries-registrars-20141108-story.html){:rel="nofollow"}{:target="_blank"}.


### Issue faced:

“We’ve had firewall crashes, concurrent connection issues in cloud-hosting environments,” Davis said. “We’ve had databases just give up because of the load, and we’ve had servers fail.”


### Initial thought:

Initially, Davis said his team considered a move to a “third-party-hosted environment with standard-test servers that would scale up and scale down in the month before an election and the month after an election.” But the more they looked at that option, the more they found it was expensive and labor intensive.


### Our thoughts:

Dynamic server provisioning is a great way to tackle load to handle traffic spikes, though to build the technology for provisioning the servers dynamically and automatically will surely incur significant engineering efforts, especially when done for the first time. Thus, estimation of initial thought is wise.


### How to resolve?

“We learned in our failure in November 2014 that we needed to eliminate database connectivity on our election night reporting site,” Davis said. “We needed to get the static content, because the amount of traffic and spike in traffic is wildly unpredictable.”


### Our thoughts:

Database caching must be present even if all tables of database are indexed, as it reduces the algorithmic operation to O(1) complexity. The next resolution discussed is to get the static content, with no server side processing involved for every request. Usage of key/value data store such as Redis/Memcache can be very appropriate in such scenarios to avoid any server side language processing, as the response i.e. HTML is cached for a specific duration of time.


### Solution:

Instead, they settled on working with cloud provider Akamai to build a platform that can respond to those unpredictable spikes in traffic more seamlessly.

“We decided to go with a static website that we build on the back end, we have an automated process that builds the static views of every page every 10 minutes, and we simply upload that to the Akamai cloud,” Davis said.

One of the election result [page](http://results.elections.virginia.gov/vaelections/2015%20November%20General/Site/GeneralAssembly.html){:rel="nofollow"}{:target="_blank"}.When we pinged this webpage, the IP address resolved to HongKong servers of Akamai Technologies Inc.


### Our thoughts:

Using CDN services to deliver static content is the best way possible to avoid facing situations where the infra fails to serve even the static content to unprecedented amount of traffic. Also, CDN services are already handling such traffic loads on a daily basis especially the big players like Akamai.


### Cost:

The department paid the company $49,000 (with the help of some federal funds) to stand up the new system, with “no technical lift by my team to make this happen,” according to Davis.

“Our statewide reporting site handled over 25 million hits in a four-hour window, and nothing broke,” Davis said.


### Final thoughts:

If you take a sneak peek under the hood, you'll still be able to find loads of performance improvements missing, as reflected in the network waterfall chart below.

![Google pagespeed issues](/images/performance-analysis/virginia-election-website-network-waterfall-performance.png)

### Must have networking performance improvement:

* Use HTTP/2
* Remove all render blocking resource, instead add crticial CSS, thus reducing start render time
* Load all static resources asynchronously
* Compress/Minify all resources