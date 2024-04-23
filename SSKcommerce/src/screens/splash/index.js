// module imports
import React, { useEffect } from 'react';
import {
    ImageBackground,
    StyleSheet,
    View,
    Text,
} from 'react-native';

// util imports
import { COLOR, SCREEN } from '../../utils';

export const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(SCREEN.SIGNIN);
        }, 2000);
    }, [navigation]);

    return (
        <ImageBackground
            source={require('../../assets/splashBg.jpg')}
            resizeMode={'cover'}
            style={styles.image}
        >
            <View style={styles.container}>
                <Text style={styles.text}>E-Commerce</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    image: {
        height: '100%',
        width: '100%',
        opacity: 0.7,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: COLOR.Blue,
        fontWeight: 'bold',
        fontSize: 42,
        opacity: 1,
    },
});
