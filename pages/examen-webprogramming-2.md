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

### Array

##### Aanmaken

3 manieren

    const arr1 = new Array(element0, element1 ..., elementN);
    const arr2 = Array(element0, element1 ..., elementN);
    const arr3 = [element0, element1 ..., elementN];

##### Methodes

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

##### Multidimensionale array's

Een array kan meerdere array's bevatten

    const cars = [
      ['Volvo', 22, 18],
      ['BMW', 15, 13]
      ['Saab', 5, 2]
      ['Land Rover', 17, 15]
    ];

##### Itereren

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

### Map object

Array on steroids

##### Nieuwe map & elementen toevoegen

Bij '.set()', is de eerste value (key) waarmee je een Map-item mee aanroept, het tweede is de effectieve content (value);

    let myMap = new Map()
    
    myMap.set('key1', 'value1');
    myMap.set('key2', 'value2');
    myMap.set('key3', 'value3');

##### Eigenschappen & methodes

**Size**

Krijg aantal items terug in map

    console.log(myMap.size);     // 3

**Get**

Krijg value uit item terug

    console.log(myMap.get('key1'))   // value1
    console.log(myMap.get('key7'))   // undefined

**Has**

Bestaat opgegeven item met key ... ?

    console.log(myMap.has('key1'))  // true
    console.log(myMap.has('key10')) // false

**Delete**

Verwijder een item aan de hand van de key

    myMap.delete('key1')

**Clear**

Wis alle items uit map

    myMap.clear()

##### Itereren van een map

**For each**

    myMap.forEach((value, key) => {
      console.log(key + ' -> ' + value);
    });

**For**

    for (var [key, value] of myMap) {
           console.log(key + ' -> ' + value);
    }

##### Wanneer map gebruiken?

[Zie syllabus]()

### Set object

Nieuwe set en elementen toevoegen

    let mySet = new Set();
    
    mySet.add(1);
    mySet.add(5);
    mySet.add(10);
    mySet.add(10);          // will be deleted because its aleardy exist
    mySet.add(undefined);   
    mySet.add(NaN);
    mySet.add('some text');
    mySet.add({a: 1, b: 2});
    mySet.add([1, 2, 3]);

##### Eigenschappen & methodes

**Size**

Krijg aantal items terug in set

    console.log(mySet.size);     // 8

**Has**

Checkt of item met value bestaande is

    console.log(mySet.has(10))     // true
    console.log(mySet.has(1000))   // false

**Delete**

Verwijderd item aan de hand van opgegeven value, dus niet de positie van het item

    mySet.delete(5);

**Clear**

Wis alle items in set

    mySet.clear();

##### Itereren

**For each**

    mySet.forEach((value) => {
      console.log(value);
    });

**For**

    for (let item of mySet) { 
        console.log(item);
    }

##### Verschil array en set

[Zie syllabus](https://www.pgm.gent/webpgm-2/js_intermediate/collections_keyed.html#verschil-tussen-arrays-en-sets)

### Consuming data

##### XMLHttp Request

Een oudere methode, je gebruikt indien mogelijk beter fetch of async/await

    function fetchJSON(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json'; // afhankelijk van datatype
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status < 400) {
              resolve(xhr.response); // returnt data
            } else {
              reject(new Error(xhr.statusText)); // returnt fouttekst van api
            }
          }
        };
        xhr.send();
      });
    }
    
    fetchJSON(url) // 'url' moet vervangen worden door de url van de api

##### Async / await

De beste manier!

    const fetchAPI = async (url) => { // zorg dat je functie async is
        try {
            let response = await fetch(url ,{modus: 'GET'})
            let data = await response.json();
            return data
        }
        catch {
            throw new Error('nieje mut')
        }
    }
    
    const displayData = async () => {
        const apiData = await fetchAPI('https://aws.random.cat/meow');
        console.log(apiData);
    }
    
    displayData();