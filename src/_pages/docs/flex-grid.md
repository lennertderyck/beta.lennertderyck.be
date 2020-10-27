---
layout: page
title: Flexgrid
subTitle: docs
permalink: docs/flexgrid/index.html
---

### About

Flexgrid is a tool, used when you want to display a collection of items in a grid where all items have the same dimensions.

#### Why not Masonry?

Masonry and its alternatives are fantastic tools for the right cases. Since they require JavaScript and/or JQuery and some setup, they use more bandwith, loadtime and knowledge of the tools.

With Flexgrid you only need three elements to get started, a container, a wrapper and the collection items.

Since it is simple (compressed) css, it takes little bandwidth to load. And to top it al off, it's fully responsive out of the box.

#### Features
- Fully responsive
- Supports custom css variables
- Extra classes to control behaviour for different screen sizes

### Setup
Flexgrid is part of another package, called ```Cutlery.js```<br>([view on NPM](https://www.npmjs.com/package/cutleryjs))

#### Option 1: using NPM
##### 1. Install package
```bash
npm i cutlery
```

##### 2. Import Scss/Sass
**Directly in your scss/sass files**
```scss
@import '/node_modules/cutleryjs/src/scss/index.scss';
```

**Or using a bundler like Parcel**
```html
<link rel="stylesheet" href="/node_modules/cutleryjs/src/scss/index.scss">
```

> Paths can be different, depending on how your folderstructure is

#### Option 2: from a CDN
```html
<link rel="stylesheet" href="https://unpkg.com/cutleryjs/dist/css/index.css">
```

### Use
##### Step 1: Add a Container

```html
<div class="flex-grid">
    ...
</div>
```

##### Step 2: Add a Wrapper

The wrapper compensates the margin of the outer items.

> In feature versions the wrapper element will be replaced by adding ```flex-gap``` to the container element

```html
<div class="flex-grid">
    <div class="flex-grid__wrapper">
        ...
    </div>
</div>
```

##### Step 3: Add collection items

These are the items that have to be arranged.

```html
<div class="flex-grid">
    <div class="flex-grid__wrapper">
        <div class="flex-grid__item">...</div>
        <div class="flex-grid__item">...</div>
        <div class="flex-grid__item">...</div>
    </div>
</div>
```

#### CSS variables
##### Amount of items
The amount of items on a row is controlled by the ```--flex-grid--items``` variable.

You can overwrite all behaviour by using it in your own css.
```scss
--flex-grid--items: 1;
```

##### Spacing
This controls the amount of spacing between elements.
```scss
--flex-grid--spacing: 20px; // default
```

#### Support classes
Use support classes to control the behaviour on different screen sizes. These are optional since Flexgrid is responsive out of box.

##### Basic syntax
```.flex-grid--{number of items}i```

**Example**
```scss
.flex-grid--1i
```

##### For screen sizes
```.flex-grid--{breakpoint}-{number of items}i```

**Example**
```scss
.flex-grid--sm-1i
```

> The max amount of items that is supported out of the box, is four. But you can add support classes yourself using the ```--flex-grid--items``` css variable.
