# ShoppingAppDemo
Demo of Shopping App


# Setting up the Project

 In order to create new React Native (RN) project you should connect to the internet and install dependencies library. If you have not chanced to set it up with React Native, please take a look to the document here: https://facebook.github.io/react-native/docs/getting-started.html

This document explain in detail about initial react native setup and project creation.

## 1. Installing
Once you have install node and react-native-cli then you can execute the npm and react-native from the command line. Let go to the root folder of the project after extracting the folder. Then execute
### npm install
Or
### yarn
This will install all dependencies library which added into package.json file

## 2. Run application and Node server

### For Android
Run the command to start package, make sure you started the Android Emulator.
NOTE: We haven't setup this project for android yet.
#### react-native run-android
Or
#### npm run anroid
Or
#### yarn run android

### For IOS

## Some additional steps for iOS setup process

First change the directory to ios folder inside the project by excuting following command.
Or
Directly run npx pod-install ios without changing directory(Avoid next two steps).

### cd ios

Now, you can execute following command to install the pod files

### pod install

Run simulator on Mac OS, you should install XCode to get the iOS simulator:Run the command to start package, make sure you started the emulator.
#### react-native run-ios
Or
#### npm run ios
Or
#### yarn run ios

We can also run this app on any iOS simulator from Xcode directltly, we have to follow below setups:
- Find where we downloaded or cloned ShoppinAppDemo project
- Find the path ShoppingAppDemo/ios/ShoppingAppDemo.xcworkspace and double click on it and it will launch this project on Xcode
- From here we can select different type of simulators and run our app.

Run the Unit Test Cases commands
- To run the test cases
### npm run test
Or
### yarn test

- To run the test cases and watch actively for new changes
### npm run test:watch
Or
### yarn test:watch

- To run the test cases and generate the report
### npm run test-report
Or
### yarn test-report

- To claear the test case's cache
### npm run clear_jest
Or
### yarn clear_jest

- To run the test cases and check the code coverage
### npm run test-coverage
Or
### yarn test-coverage