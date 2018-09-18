# LiferayScreensReactNative

## INSTRUCTIONS TO USE THIS PROJECT

If you want to run the demo app of this repository you have to do the following steps:

  1. Execute `npm install`

  2. In ios folder execute: `pod install`

  3. In android folder create local.properties file with the next line:  
  ```
        in Windows sdk.dir = C:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk
        in macOS sdk.dir = /Users/USERNAME/Library/Android/sdk
        in linux sdk.dir = /home/USERNAME/Android/Sdk

    Replace USERNAME with your user name
  ```
## INSTRUCTIONS TO USE SCREENLETS IN YOUR REACT NATIVE PROJECT

You can see a complete installation in this [video](https://youtu.be/ob8YC4ofc5k).

As you can see in the video, the main steps are:
* Copy the folder “ios/LiferayScreenlets” into the “ios” folder of your React Native project.
* Copy the folder “android/app/src/main/java/LiferayScreenlets” into the “android” folder of your React Native project, in the same path.
* In the file MainApplication.java you have to include the packages to export. The best way to do that is to copy the getPackages() method from the MainApplication.java of this project.
* The final step is similar to the first two. Copy the LiferayScreens folder from our root path and copy it into your root path. 
