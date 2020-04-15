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
date: 2019-10-06 00:00:00 +0000

---
De scouts waar ik zelf ook leiding geef, was dringend toe aan een nieuwe site. De oude dateerde nog van rond 2011 en dat merkte je. Zowel op vlak van design als snelheid was de site verouderd.

Voor de oude site werd wordpress gebruikt en deze draaide op de servers van Scoutnet, een vzw die jeugdverenigingen tegen een lage kost online helpt. Online communicatie met de ouders en leden is belangrijker dan ooit.

Voor de nieuwe versie hebben we gebruik gemaakt van een static site generator, Jekyll. Om er voor te zorgen dat iedereen die hier toegang tot heeft de site kan bewerken, hebben we ook gezorgd voor een gebruiksvriendelijke CMS: Forestry.io. Forestry is gekoppeld met GitHub, waar alle wijzigingen naar gepusht en bijgehouden worden. GitHub is dan verder gekoppeld met Netlify die bij elke wijziging op GitHub een build start.

Voor alle media is er een koppeling met Cloudinary, waar alles wordt gehost. Ook Cloudinary is gekoppeld aan Forestry zodat we rechtstreeks vanuit Forestry media op onze site kunnen plaatsen.

Als basis voor de layout hebben we Bootstrap gebruikt en dan verder de layout aangepast zodat het past binnen het thema.