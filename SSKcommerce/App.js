// module imports
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// util imports
import { SCREEN } from './src/utils';

// component imports
import { SplashScreen, SignInScreen, SignUpScreen } from './src/screens';


const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={SCREEN.SPLASH} component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name={SCREEN.SIGNIN} component={SignInScreen} options={{ headerShown: false }} />
                <Stack.Screen name={SCREEN.SIGNUP} component={SignUpScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
