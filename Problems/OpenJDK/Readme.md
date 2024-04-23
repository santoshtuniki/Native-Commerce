#### ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

#### Issue with openJdk

1) Find all jdk installations

    sudo dpkg --list | grep -i jdk

2) Remove all jdk installations

    sudo apt-get purge openjdk*

    sudo apt-get purge icedtea-* openjdk-*

    sudo apt autoremove

3) Get java command unknown, if all jdk removed

    java -version

4) Install JDK 17 from ORACLE

    x64 Debian Package

5) Open and install it.

--------

#### Android development environment

1) Install Android Studio

2) Install the Android SDK

    Requires the Android 14 (UpsideDownCake) SDK in particular.   
    The SDK Manager can also be found within the Android Studio "Settings" dialog.

    Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. 
    
    Expand the Android 14 (UpsideDownCake) entry, then make items are checked:

        1. Android SDK Platform 34
        
        2. Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Imag

    Select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. 
    
    Expand the "Android SDK Build-Tools" entry, 
    
        Make sure that 34.0.0 is selected.

    Finally, click "Apply" to download and install the Android SDK and related build tools.

3) Configure the ANDROID_HOME environment variable

    Add the following lines to your $HOME/.bash_profile (or) $HOME/.bashrc

        export ANDROID_HOME=$HOME/Android/Sdk

        export PATH=$PATH:$ANDROID_HOME/emulator
        
        export PATH=$PATH:$ANDROID_HOME/platform-tools

--------

