---
layout: page
title: React Native
subTitle: Docs
permalink: manual/react-native/

---
### Platform styles

#### OS

    Platform.OS === 'android' ? StatusBar.currentHeight : 0

#### Select

    const styles = Platform.select({
    	ios: {}
    	android: {}
    })

#### With files

iOS

    ComponentName.ios.js

Android

    ComponentName.android.js

#### Useful components & functions

* TouchableOpacity
* SafeAreaView