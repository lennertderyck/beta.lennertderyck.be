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
  ![](https://res.cloudinary.com/lennertderyck/image/upload/v1585578714/Schermafbeelding_2020-03-30_om_15.58.11_nv6wpv.png)
* Je zal al je wijzigingen zien
* Geef in de balk bovenaan je commit message in en druk op het vinkje daarboven op te committen
* Om al je commits te pushen druk je vanonder op het push icoon  
  ![](https://res.cloudinary.com/lennertderyck/image/upload/v1585577398/Schermafbeelding_2020-03-30_om_16.09.32_tvzv8k.png)

### Geïndexeerde & gesleutelde collecties

##### Array's – aanmaken

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

**Splice**

Voeg items toe aan array, of verwijder items

    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 1, "Lemon", "Kiwi"); // Vanaf positie 2, verwijder eerst 1 item, voeg daarna nieuwe value's toe

**Concat**

Combineer verschillende arrays

    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    let arrayResult = array1.concat(array2); // Array arrayResult contains ['a', 'b', 'c', 'd', 'e', 'f']

**Pop**

Verwijder laatste element van array

    const fruit = ['Apple', 'Banana', 'Grape'];
    const removedElement = fruit.pop(); // Contains "Grape"
    console.log(fruit); // Output: ['Apple', 'Banana']

**Shift**

Verwijder eerste element van array

    const fruit = ['Apple', 'Banana', 'Grape'];
    const removedElement = fruit.shift(); // Contains "Apple"
    console.log(fruit); // Output: ['Banana', 'Grape']

**Slice**

Maak een nieuwe array vanuit een bestaande array

    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    const selectedAnimals = animals.slice(2, 4); // Alle dieren vanaf positie 2 tot en met positie 4 worden geselecteerd 
    console.log(animals.length); // Output: 5
    console.log(selectedAnimals); // Output: ['camel', 'duck']

**Join**

Items in array verbinden met elkaar en omzetten naar een string

    const arr = ['macOs', 'Windows', 'Linux'];
    const arrAsStr = arr.join();
    console.log(arrAsStr); // Output "macOs,Windows,Linux"

Het verbindingsteken kan aangepast worden

    const arr = ['macOs', 'Windows', 'Linux'];
    const arrAsStr = arr.join(' | ');
    console.log(arrAsStr); // Output "macOs | Windows | Linux"

**Reverse**

Draait de volgorde van een array om

    const arr = ['one', 'two', 'three'];
    console.log(arr.reverse()); // Output: ['three', 'two', 'one']

**Sort**

Sorteert waarden in bepaalde volgorde, standaard alfabetisch

    const months = ['March', 'Jan', 'Feb', 'Dec'];
    months.sort();
    console.log(months); // Output: ["Dec", "Feb", "Jan", "March"]

of bij getallen volgens hun eerste cijfer ...

    const numbers = [1, 30, 4, 21, 100000];
    numbers.sort();
    console.log(numbers); // Output: [1, 100000, 21, 30, 4]

deze volgorde kan ook aangepast worden ...

    console.log(numbers.sort((a, b) => a - b)) // Output: [1, 4, 21, 30, 100000]
    console.log(numbers.sort((a, b) => b - a)) // Output: [100000, 30, 21, 4, 1]

'a' in de sort functie stelt de eerste waarde voor waarmee de 'b' waarde mee vergeleken wordt.

_Bij getallen zal dan niet naar het eerste cijfer gekeken worden, maar naar de effectieve waarde van het getal._

**Map**

Vergelijkbaar met de 'forEach' functie, maar werkt enkel bij array's

    const numbers = [1, 4, 9];
    const roots = numbers.map((num) => {
      return num*2;
    });
    console.log(roots); // Output: [2, 8, 18]

kan ook op andere manieren gebruikt worden

    const newArray = []
    numbers.map((num) => {
      newArray.push(num*2);
    });
    console.log(newArray); // Output: [2, 8, 18]

**Filter**

De filter methode creeert een nieuwe array van elementen die een test doorstaan via de callback function.

    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const filteredWords = words.filter(word => word.length > 6);
    console.log(result); //Output: ["exuberant", "destruction", "present"]

##### Array – multidimensionaal

Een array kan meerdere arrays bevatten

    const cars = [
      ['Volvo', 22, 18],
      ['BMW', 15, 13]
      ['Saab', 5, 2]
      ['Land Rover', 17, 15]
    ];

##### Array – itereren

**For loop**

    const colors = ['red', 'green', 'blue'];
    for (let i = 0; i < colors.length; i++) {
      const currentColor = colors[i];
      console.log(currentColor);
    }

**For each**

    const colors = ['red', 'green', 'blue'];
    color.forEach((currentColor) => {
      console.log(currentColor);
    });