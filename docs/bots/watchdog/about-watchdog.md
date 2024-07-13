---
title: About Watchdog
permalink: /bots/watchdog/about-watchdog
description: This page talks all about watchdog!
head:
  - [meta, { name: keywords , content: Watchdog, Hyacinth Watchdog}]
---
# Watchdog

::: danger Watchdog is not in a usable state currently
Watchdog has not seen proper development in a long time due to our hosting system becoming a lot more reliable as of late.
Watchdog may see further development in the future, it may not, that remains to be seen. If you wish to work on watchdog,
please contact us or make some Pull Requests, they will still be reviewed in a reasonable time.
:::

Watchdog is our monitoring bot that initially was designed to monitor the status of LilyBot, but will become more general
purpose and watch over any and all bots we produce.

#### The function of watchdog is simple:
 - When a bot is offline for more than 2 consecutive minutes, watchdog will send a message containing a mention to the
    leave developers and mention the downtime role. Its messages will be posted into a News/Announcement channel and
    published automatically for users who follow the channel to see.
 - When a bot comes back online again, another message will be posted into the News/Announcement channel informing users
    that the bot is back online and will send a summary embed of the downtime period. This summary includes the time the
    downtime period began, the time the downtime period ended, and the total downtime duration. The start and end period
    times are given in relative timestamps, so it's easier for users across the world to read.
---
-  License: MPL-2.0

