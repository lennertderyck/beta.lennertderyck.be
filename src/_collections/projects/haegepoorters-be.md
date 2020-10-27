---
tags: Web
title: Haegepoorters.be
client: Haegepoorters Destelbergen
project-url: https://haegepoorters.be
ft-img: https://res.cloudinary.com/lennertderyck/image/upload/v1581282814/pnu7n9jraiym6inadwwm_hdehlu.jpg
galery:
- https://res.cloudinary.com/lennertderyck/image/upload/v1581282819/download_1_-1_c0qnrb.png
- https://res.cloudinary.com/lennertderyck/image/upload/v1581282824/Schermafbeelding_2019-10-13_om_21.35.12_zwnoh3.png
- https://res.cloudinary.com/lennertderyck/image/upload/v1581282847/1570995361954_erddbf.png
- https://res.cloudinary.com/lennertderyck/image/upload/v1581282852/1570995233733_mo0b7j.png

---
The scoutsgroup where I'm a leader myself needed a new website. The old one dated from ten years ago. The site was outdated in terms of both design and speed.

The old site used WordPress and was hosted on servers from Scoutnet, an organisations that scout groups to create an easy to maintain website.

The new version of the site uses a static site generator, Jekyll (Ruby based), but we're working on a new version in Eleventy. A newer type of static site generator, written in JavaScript. By using a JavaScript based generator we reduced the buildtime with at least 50 percent. Thereby making it (almost?) full-stack JavaScript.

To make shure that everyone can edit content we used Forestry.io as CMS. This gives us an user-friendly interface to edit all the content and it gave us the possibility to use an external host for all the media since Forestry can be coupled with Cloudinary.

The entire project is maintained on GitHub so when something is pushed, Netlify can automatically start a build.

We used Bootstrap as a base for the layout of the new site.