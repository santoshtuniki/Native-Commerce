### Install Android Studio (preferably snap for linux)

#### Initiate Project:

    npx react-native@latest init Project_Name

#### Start the Metro Server

    npm start

#### Start your Application

    npm run android

#### Modifying your app

    Press the R key twice (or) 
    
    select Reload from the Dev Menu (Ctrl + M) to see your changes!

------

### To Modify app icon. 

#### [Create_App_Icon](makeappicon.com)

#### Setting App Icon for Android

1) To change the Android application icon copy all the minmap-* directory from the android directory of downloaded makeappicon zip.

2) Now navigate to res directory of your project (YourProject -> android -> app -> src -> main -> res) and replace the default icons with newly downloaded icons.

3) Now open the terminal again and run the project again

------

### To Modify app name

#### Modify app_name in strings.xml

    android/app/src/main/res/values/strings.xml

#### Run commands

    cd android
    ./gradlew clean

    cd ..
    npx react-native run-android

------

#### justifyContent: Arrange along primary axis

#### alignItems: Arrange along secondary axis

    flexDirection: "row"

        Primary axis - horizontal

    flexDirection: "column"

        Primary axis - vertical

------

### To disable prettier in eslint

    rules: {
        "prettier/prettier": 0,
    }

-----

### Configuring ESLint 

    npm install --save-dev eslint-plugin-react-hooks

    npm install --save-dev eslint-plugin-react

-----

### React Native doesn't have a built-in API for navigation like a web browser does

### Configuring React Navigation

    npm install @react-navigation/native

    npm install react-native-screens react-native-safe-area-context

#### react-native-screens package requires one additional configuration step to properly work on Android devices. 

1) Edit MainActivity.kt or MainActivity.java file which is located under **android/app/src/main/java/package_name/**.

2) Add the code to the body of MainActivity class: (Kotlin)

    class MainActivity: ReactActivity() {
        
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(null)
        }
    
    }

#### The react-navigation libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. 

    npm install @react-navigation/native-stack

-----

### NavigationContainer

1) It should be only used **once** in your app at the root. 

2) It is a component which manages our navigation tree and contains the navigation state. 

3) This component must **wrap** all navigators structure

### createNativeStackNavigator 

1) A function that returns an object containing 2 properties: 
    
    a) Navigator  
    
        It contain Screen elements as its children to define the configuration for routes.

    b) Screen 

        A route can be specified by using the Screen component

2) Each Stack.Screen component takes the 2 required props

    a) **name** prop which refers to the name of the route
    
    b) **component** prop which specifies the component to render for the route. 

To specify what the initial route in a stack is, provide an **initialRouteName** as the prop for the navigator.

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

### The navigation prop 

It is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).

-----

### Google authentication using react-native firebase

-----

### Build and Deploy APK

Add **assets** floder in **android/app/src/main**

    npm install react-native-cli

    npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

    cd android

    ./gradlew assembleRelease

Find **release.apk** file which u can install in your device at **cd app/build/outputs/apk/release/**

Tto clean the build and update the build 

    ./gradlew clean 
    
    ./gradlew assembleRelease

Find **debug.apk** file which u can install in your device for debugging at **cd app/build/outputs/apk/debug/**
