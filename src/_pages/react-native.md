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

### Offline support

#### NetInfo

Komt vanuit expo-community package

```bash
expo install @react-native-community/netinfo
```

```js
import NetInfo from '@react-native-community/netinfo';
```

NetInfo ophalen

```js
NetInfo.fetch // Returns promise
```

#### NetInfo EventListener

```js
NetInfo.addEventListener(info => console.log(info))
```

Niet vergeten unsubscriben!

```js
const netInfoUnsubscribe = NetInfo.addEventListener(info => console.log(info))
```

```js
// later in application
netInfoUnsubscribe()
```

#### NetInfo Hook

```js
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
```

```js
const netInfo = useNetInfo()
```