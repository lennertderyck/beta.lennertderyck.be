---
layout: page
title: React Native
subTitle: Docs
permalink: manual/react-native/

---
### Platform styles

#### OS

```js
Platform.OS === 'android' ? StatusBar.currentHeight : 0
```

#### Select

```js
const styles = Platform.select({
  ios: {}
  android: {}
})
```

#### With files

iOS

```bash
ComponentName.ios.js
```

Android

```bash
ComponentName.android.js
```

### Useful components & functions

* TouchableOpacity
* SafeAreaView

#### Shortcodes

New component

    rsf 

Stylesheet

    rnss