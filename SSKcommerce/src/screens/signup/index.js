// module imports
import React from 'react';
import {
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';

// util imports
import { COLOR } from '../../utils';

// component imports
import { InputField, RoundButton } from '../../components';

export const SignUpScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLOR.White} />
            <Text style={styles.title}>Sign Up</Text>
            <Text>Sign up here</Text>
            <View style={styles.input}>
                <InputField placeholder={'email'} keyboardType={'email-address'} />
                <InputField placeholder={'password'} secureTextEntry={true} />
                <RoundButton label={'SignUp'} marginTop={30} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: COLOR.White,
    },
    title: {
        marginTop: 10,
        fontSize: 30,
        fontWeight: 'bold',
        color: COLOR.Black,
    },
    input: {
        flex: 1,
        justifyContent: 'center',
    },
});
