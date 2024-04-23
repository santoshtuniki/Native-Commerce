// module imports
import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

// util imports
import { COLOR, SCREEN } from '../../utils';

// component imports
import { FullRoundButton, RoundButton } from '../../components';
import { _signInWithGoogle } from '../../config';

export const SignInScreen = ({ navigation }) => {

    const googleSignIn = async () => {
        try {
            const data = await _signInWithGoogle();
            if (!data) {
                console.log('Error: No data');
                return;
            }
            // console.log('Success:\n',data);
        } catch (error) {
            console.log('Error using firbase:', error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image
                    source={require('../../assets/welcome.jpg')}
                    resizeMode={'cover'}
                    style={styles.image}
                />
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>
                    Welcome to E-COMMERCE app
                </Text>
                <View style={styles.buttons}>
                    <RoundButton
                        label={'Login'}
                        width={120}
                        onPress={() => navigation.navigate(SCREEN.SIGNIN)}
                    />
                    <RoundButton
                        label={'Sign Up'}
                        bg={COLOR.White}
                        width={120}
                        onPress={() => navigation.navigate(SCREEN.SIGNUP)}
                    />
                </View>
                <View style={styles.bottomBar}>
                    <Text
                        style={{
                            textAlign: 'center',
                            marginTop: 20,
                        }}
                    >
                        or via social media account
                    </Text>
                    <View style={styles.roundButtons}>
                        <FullRoundButton
                            image={require('../../assets/google.png')}
                            bg={COLOR.White}
                            onPress={() => googleSignIn()}
                        />
                        <FullRoundButton
                            image={require('../../assets/facebook.png')}
                            bg={COLOR.MediumBlue}
                        />
                        <FullRoundButton
                            image={require('../../assets/linkedin.png')}
                            bg={COLOR.NavyBlue}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR.LightBlue,
    },
    box: {
        flex: 0.5,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    text: {
        color: COLOR.Black,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        marginTop: 10,
    },
    bottomBar: {
        flex: 1,
        marginTop: 20,
        paddingBottom: 20,
        justifyContent: 'flex-end',
    },
    buttons: {
        marginTop: 20,
        marginLeft: '18%',
        alignContent: 'center',
        flexDirection: 'row',
    },
    roundButtons: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
