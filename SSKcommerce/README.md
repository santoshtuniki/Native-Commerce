### To disable prettier in eslint

    rules: {
        "prettier/prettier": 0,
    }

-----

### Configuring ESLint 

    npm install --save-dev eslint-plugin-react-hooks

    npm install --save-dev eslint-plugin-react

-----

### Configuring React Navigation

    npm install @react-navigation/native

    npm install react-native-screens react-native-safe-area-context

### react-native-screens package requires one additional configuration step to properly work on Android devices. 

1) Edit MainActivity.kt or MainActivity.java file which is located under **android/app/src/main/java/package_name/**.

2) Add the code to the body of MainActivity class: (Kotlin)

    class MainActivity: ReactActivity() {
        
        override fun onCreate(savedInstanceState: Bundle?) {
            super.onCreate(null)
        }
    
    }

#### The react-navigation libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. 

    npm install @react-navigation/native-stack

### The navigation prop 

It is available to all screen components (components defined as screens in route configuration and rendered by React Navigation as a route).

-----

### React Native Firebase

Prerequisites:

1) React Native - Setting up the development environment

2) Create a new Firebase project

### Create a Firebase Project

Search for 'firebase console' in Chrome or [Click here](https://console.firebase.google.com/)

Click on **Create Project**

### Go to react-native-firebase

Search for 'react-native-firebase' in Chrome or [Click here](https://rnfirebase.io/)

Follow instruction mentioned in 'Getting Started'.

    npm install --save @react-native-firebase/app

-----

##  React Native CLI - Android Setup

### Add Firebase to your Android app

1) Copy 'package name' from **namespace** inside  **android/app/build.gradle**.

2) Go to Firebase project, and click on 'android' symbol.

3) Add package name in Firebase console.

4) To get **Debug signing certificate**:

        cd android
        
        ./gradlew signingReport

    This generates two variant keys. 

    Take keys from 
    
        Task :app:signingReport
        Variant: debug
    
    Copy both **SHA1** and **SHA-256** keys that belong to the 'debugAndroidTest' variant key option. 

5) Add **SHA1** key to the 'SHA certificate fingerprints' on your app in Firebase console.

6) Click "Register app" and download **google-services.json**

7) Place it inside **android/app/google-services.json**

8) Click "next" and finish set-up in Firebase console.

9) Click on **Settings** in my project in in Firebase console.

10) Click on **Add fingerprint** and add **SHA-256** to it.

-----

### Configure Firebase with Android credentials

To allow Firebase on Android to use the credentials, the **google-services** plugin must be enabled on the project. 

This requires modification to two files in the Android director.

1)  Add the **google-services** plugin as a dependency inside of your **/android/build.gradle file**

        buildscript {
            dependencies {
                // ... other dependencies
                // NOTE: if you are on react-native 0.71 or below, you must not update
                //       the google-services plugin past version 4.3.15 as it requires gradle >= 7.3.0
                classpath 'com.google.gms:google-services:4.4.1'
                // Add me --- /\
            }
        }

2) Execute the plugin by adding the following to your **/android/app/build.gradle file**

        apply plugin: 'com.android.application'
        apply plugin: 'com.google.gms.google-services' // <- Add this line

-----

### Authentication 

    yarn add @react-native-firebase/auth

[Google](https://github.com/react-native-google-signin/google-signin)

1) Google Sign-in

        yarn add @react-native-google-signin/google-signin

Get **Authentication Credential** from the Firebase console.

1) Go to Project --> Build --> Authentication --> Signin method

2) Under Signin method:

        Select "Google" and toggle "Enable"

        Select "Email" and save it.

3) We get the Confirmation. Choose "Edit"

    From there, Copy the "Web client ID"

-----

### Download the google-services.json file 

and place it inside of your project at the following location: **/android/app/google-services.json**.

    androidClientID -- client_type: 1

    webClientId -- client_type: 3