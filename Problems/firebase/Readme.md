###  Google Sign-In Error [Error: DEVELOPER_ERROR]

#### Update android/build.gradle with

    buildscript {
        ext {
            buildToolsVersion = "a.b.c"
            minSdkVersion = x
            compileSdkVersion = y
            targetSdkVersion = z
            googlePlayServicesAuthVersion = "20.7.0" // <--- use this version or newer
        }
    // ...
        dependencies {
            classpath 'com.google.gms:google-services:4.4.0' // <--- use this version or newer
        }
    }

### Update android/app/build.gradle with

    apply plugin: "com.android.application"
    apply plugin: "org.jetbrains.kotlin.android"
    apply plugin: "com.facebook.react"
    apply plugin: "com.google.gms.google-services"

### Check SHA1 & SHA-256 keys. Add from "app:signingReport"

    Task :app:signingReport
    Variant: debug
    Config: debug
    Store: /home/santosh/Desktop/React Native/myApp/android/app/debug.keystore
    Alias: androiddebugkey