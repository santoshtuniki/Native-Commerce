### Parsing error: No Babel config file detected.

#### Either disable config file checking with requireConfigFile: false, or configure Babel so that it can find the config files.

Adding the block to **settings.json** will solve this issue:

    "eslint.workingDirectories": [
            {"mode": "auto"}
    ],

To access settings.json file:

1) click Ctrl+,

2) Type "eslint" in the search bar.

3) Find Edit in settings.json in Options.

#### You can also add below in .eslinric.js (Not Recommended)

    "parserOptions": {
        "requireConfigFile": false,
    }

-----

### To disable prettier in eslint

    rules: {
        "prettier/prettier": 0,
    }

-----

### ImageBackground not showing image

    Height is required

-----

### com.facebook.react.bridge.ReadableNativeArray cannot be cast into java.lang.Double

This error arises in React Native development when your Java code attempts to treat a JavaScript array (ReadableNativeArray) as a single double-precision floating-point number (Double). 
    
This **mismatch** in data types leads to a casting exception.

-----

