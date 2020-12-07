---
layout: page
title: Sesam collapse
subTitle: docs
permalink: /docs/sesam/
---

### About

I've written Sesam because I needed a simple system to collapse items and more. The only thing Sesam does is remove or add a class so there are a lot of possibilities with it.

#### Why not Bootstrap?

Bootstrap is a great framework with a lot of features. But sometimes a lot of css is required to change a component the way you like it.

When you add Bootstrap to your project without removing the parts you don't need a lot of extra code is loaded thereby adding loadtime.

Sesam on the other hand is a small package so you can use it without worrying about loadtime.

### Setup
#### With NPM (ESM)
**1. Install package**
```bash
npm i sesam-collapse
```

**2. Import**
```js
import {sesamCollapse, sesam} from 'sesam-collapse';
```

**3. Initialize script**
```js
sesamCollapse.initialize();
```

#### From a CDN (ESM)
**1. Import package from CDN**
```js
import {sesamCollapse, sesam} from 'https://unpkg.com/sesam-collapse';
```

**2. Initialize script**
```js
sesamCollapse.initialize();
```

#### With node.js
Sesam is a script that uses DOM nodes. Since the DOM is not accessible in node.js, using Sesam would give some errors. But you can use Sesam with bundlers like Parcel or Webpack. Personally I think Parcel is the best option for simple webapplications because it doesn't require much configuration. I also have a [Parcel-boilerplate on GitHub](https://github.com/lennertderyck/parcel-boilerplate).

> **Note**<br>
> You can initialize the script as soon the document is loaded. Otherwise you would get an error saying the node couldn't be found.

### Use
#### Define a trigger
```html
data-sesam-trigger="placeNameHere"
```

```html
<button data-sesam-trigger="placeNameHere">
    Show / hide
</button>
```

Add ```data-sesam-trigger``` to the trigger node. Choose an attribute value, you will use this to call the target.

> It is possible to define multiple triggers with the same value.

#### Define a target
```html
data-sesam-target="placeNameHere"
```

```html
<div data-sesam-target="placeNameHere">
    <p>Some content</p>
</div>
```

Add ```data-sesam-target``` to the target node. The attribute value is the value you entered before for the trigger.

> A target can be every element that holds classes, this is the same for trigger elements.

#### Done
You did great! Now click the trigger, watch the classes change and add your css.

### Options using data attributes
Additional options can be set. This method uses an attribute per option.

#### Collapse other children
Sometimes, when you click a target and collapse a node, you want the other children to react. Being hidden, change color, ...
You can do this by defining a group and to which parent a node has to "listen". So when an node is clicked that has a parent defined every other child element of that parent will react.

**Define the parent as group**
```html
data-sesam-group="groupNameHere"
```

**Define the children**
```html
data-sesam-parent="groupNameHere"
```

#### Backdrop
When you use Sesam for creating modals, you can add a backdrop behind the modal so it's clearly visible in front of other content.

> The backdrop element gets created automatically on intialization of Sesam

**1. Choose which Sesam target that gets a backdrop**<br>
Just add the attribute below to the **target** element.
```html
data-sesam-backdrop="true"
```

**2. Add (s)css**
```scss
.sesam-backdrop {
    position: fixed;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.336);
    
    &.sesam-hidden {
        display: none;
    }
}
```

> The code above is SCSS, not regular css

#### Scrollblock
If you want that the user isn't able to scroll trough the rest of the page just add this to your target-element.

**1. Choose which Sesam target that gets a scrollblock**<br>
```html
data-sesam-scrollblock="true"
```

```html
<div data-sesam-target="placeNameHere" data-sesam-scrollblock="true">
    <p>Some content</p>
</div>
```

**2. Add (s)css**
```scss
body.sesam-scrollBlock {
    overflow: hidden;
}
```

### Api
#### v6.x.x and above
Version 6 is not out yet, but this is how it will work then.

```js
// collapse can be true/false/show/hide
/**
 * @param {string|boolean} target has to be the attributes name
 * @param {string|boolean} collapse
 * true: just switch classes,
 * false: don't switch classes,
 * show: set classes to show,
 * hide: set classes to hide
 */
sesam(target, collapse, {
    backdrop: true, 
    scrollBlock: true,
    callback: ({trigger, targets}) => {}
```

#### v5.x.x and below
```js
sesam({
    target: 'example',
    collapse: true,
    action: 'show',
    execute: (() => {
        console.log('this works!')
    })(),
    modal: {
        backdrop: true,
        scrollBlock: true
    }
})
```

### Api as Javascript class
Coming soon.






