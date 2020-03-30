---
layout: page
pageWidgets: []
title: Exam webpgm2
customTitle: Examen Programming 2
subTitle: Leerstof overzicht
permalink: webpgm2
short-desc: ''
titlebar: false
ft-image: ''
add-to-menu: false
fullWidth: false

---
### GitHub

##### Instellen repo (VS Code)

* Ga naar je repo op GitHub
* Klik op de **groene knop**, 'Clone or download'
* **Kopieer de url** die je ziet verschijnen
* Open VS Code
* Gebruik de snelkoppeling  
  **CRTL + SHIFT + P** op Windows  
  **CMD + SHIFT + P** op mac
* Typ **Git: clone** en klik deze optie aan (of druk op Enter)
* **Plak de url** die je daarnet gekopieerd hebt en **druk Enter**
* Kies waar de repo op je computer moet staan
* Het kan zijn dat er achter een gebruikersnaam en daarna een wachtwoord gevraagd wordt, dit kan ook later gebeuren
* Er zal vanonder een melding getoond worden om je repo te openen in VS Code

##### Commit & push

* Klik op het Git-icoon in de linker zijbalk  
  ![](/v1585577228/Schermafbeelding_2020-03-30_om_15.58.11_bkm0sl.png)
* Je zal al je wijzigingen zien
* Geef in de balk bovenaan je commit message in en druk op het vinkje daarboven op te committen
* Om al je commits te pushen druk je vanonder op het push icoon  
  ![](/v1585577398/Schermafbeelding_2020-03-30_om_16.09.32_tvzv8k.png)

  ### Geïndexeerde & gesleutelde collecties

  ##### Array's – aanmaken

  [Cursus](https://www.pgm.gent/webpgm-2/js_intermediate/collections_indexed.html#aanmaak-van-een-array) | [Mozilla](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array)

  3 manieren

      const arr1 = new Array(element0, element1 ..., elementN);
      const arr2 = Array(element0, element1 ..., elementN);
      const arr3 = [element0, element1 ..., elementN];

  ##### Array – methodes

  **Push**

  Voegt nieuw value(s) toe aan einde van array

      let fruit = ['Apple', 'Banana', 'Grape'];
      fruit.push('Pear'); // Array fruit is now ['Apple', 'Banana', 'Grape', 'Pear']

  **Unshift**

  Voegt nieuw value(s) toe aan begin van array

      let weather = ['Wind', 'Rain', 'Fire'];
      weather.unshift('Snow', 'Hail'); // Array fruit is now ['Snow', 'Hail', 'Wind', 'Rain', 'Fire']