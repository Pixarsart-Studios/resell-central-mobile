# Resell Central React Native (iOS/Android) APP

## Building

### Prerequisites
- Xcode installation with command line tools.
- android studio install for the sdk, ndk, adb, etc...
- nodejs (use https://nodejs.org/en/ or use command line ```brew install node```)
- yarn


### Building and Running


#### Installation
```
yarn install
```

#### Starting metro
```
npx react-native start
```

#### Starting for android

launches an emulator or sends app to an adb connected phone

```
npx react-native run-android
```


#### Before Running on iOS, Install Pods

change directory to $HOME/{PATH_TO_SOURCE}/ios

```
pods install
```


#### Starting for iOS

launches an iOS Simulator or sends app to an connected iPhone

```
npx react-native run-ios
```



#### Starting for Android

launches an iOS Simulator or sends app to an connected iPhone

```
npx react-native run-android
```

## Purpose

The purpose of this project is to create a react native version for our product named "Resell Central". It's react-native version is developed for cross-platform and will support both iOS and Android devices.

## Deployment

#### Deployment for iOS

To deploy or publish this project on iPhone run the project on Xcode. Use the Xcode -> Product -> Archive to generate archieve file and use Orgainzer to Upload to AppStore or export IPA file. 

#### Deployment for Android

To deploy or publish this project on Android run the project on Android Studio. Use the Android Studio Menu Build -> Generate Signed Build / APK -> Enter Signing information to generate apk file to share and use aab file to upload to PlayStore. 


## License

[Copyrights © 2023 resell-central.com, All Rights Reserved ](https://resell-central.com/privacy-policy/)
