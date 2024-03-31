---
title: My Dashboard
description: A React based dashboard to show my local forecast (and maybe other things eventually) 
links:
    - name: Repository
      link: https://github.com/reardonj/dashboard
---

This project provides a simple local weather forecast display for my personal use. It is written in Typescript with a React & Redux front-end that loads forecast data from [Environment Canada](https://eccc-msc.github.io/open-data/) via a proxy (as the data source does not support CORS). I wrote this project partly to play around with Redux, and partly because I don't like any of the weather apps I've tried for my phone. It is set up to work as a <abbr title="Progressive Web Application">PWA</abbr> for my phone. 

## Tech Stack

- Typescript
- React
- Redux
- Node.js