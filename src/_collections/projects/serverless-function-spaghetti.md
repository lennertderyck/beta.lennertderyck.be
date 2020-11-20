---
tags: Print
title: Spaghetti night API
client: Scouts Haegepoorters Destelbergen
year: 2018
project-url: 'https://spaghetti.haegepoorters.be/?email=webmaster@haegepoorters.be'
ft-img: https://res.cloudinary.com/lennertderyck/image/upload/v1605888292/Schermafbeelding_2020-11-20_om_17.04.35_bi1aod.png
galery:
- https://res.cloudinary.com/lennertderyck/image/upload/v1605887885/Schermafbeelding_2020-11-20_om_16.46.28_ay4jqp.png
- https://res.cloudinary.com/lennertderyck/image/upload/v1605887893/Schermafbeelding_2020-11-20_om_16.49.35_uznotc.png
- https://res.cloudinary.com/lennertderyck/image/upload/v1605887899/Schermafbeelding_2020-11-20_om_16.52.11_bgtzx5.png
- https://res.cloudinary.com/lennertderyck/image/upload/v1605887899/Schermafbeelding_2020-11-20_om_16.51.55_xlfdyu.png
- https://res.cloudinary.com/lennertderyck/image/upload/v1605887905/Schermafbeelding_2020-11-20_om_16.53.58_xdyuwc.png
- https://res.cloudinary.com/lennertderyck/image/upload/v1605887893/Schermafbeelding_2020-11-20_om_16.50.09_adfasl.png
- https://res.cloudinary.com/lennertderyck/image/upload/v1605887893/Schermafbeelding_2020-11-20_om_16.46.34_ujbkts.png

---
An API that returns the details of a reservation via Google Forms.

<---->

With little time to create a whole front- and back-end, we needed a fast solution so people could register for our annual spaghetti night. So we used Google Forms so people could register.

The only problem was that we had to calculate howmuch people have to pay, and that isn't easy using Google Forms. So we came up with an good solution.

We enabled the option in Google Forms to push the results to an Excel sheet, then we enabled the option for that sheet to be published on the internet in CSV format.

The advantage of this system is that we can edit these records, so we can change the payment-status after we recieved the users payment.

After this was published we could fetch the CSV, convert it to JSON data and process it. We wrote a serverless function that does all the processing and we added the possibility to filter the data by adding url-parameters. After the API was done we made an interface where all the data is processed and shown to the user.

You can visit the API [here](https://spaghetti.haegepoorters.be/api?email=webmaster@haegepoorters.be).

We installed a plugin for Google Forms that can send a personal confirmation-mail after registering, so now when someone registers we send them an email with a personalized url.

One extra feature we've added to the UI is the CMD/CRTL+F shortcut sou could easily search for another emailadres.