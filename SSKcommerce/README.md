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

[React-native-firebase](https://github.com/santoshtuniki/Firebase-Setup/tree/main)