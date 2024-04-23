// module imports
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// component imports
import { KEYS } from '../../utils/secret';

export const _signInWithGoogle = async () => {
    try {
        GoogleSignin.configure({
            offlineAccess: false,
            webClientId: KEYS.WEB_CLIENT_ID,
            androidClientID: KEYS.ANDROID_CLIENT_ID,
            scopes: ['profile', 'email'],
        });
        await GoogleSignin.hasPlayServices();

        const userInfo = await GoogleSignin.signIn();

        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        auth().signInWithCredential(googleCredential);

        return userInfo;
    } catch (error) {
        console.log('Google Sign-In Error', error);
        return null;
    }
};
