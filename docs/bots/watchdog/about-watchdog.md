---
permalink: /bots/watchdog/about-watchdog
---

# Watchdog

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

