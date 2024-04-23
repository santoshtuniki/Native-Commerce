// module imports
import React from 'react';
import {
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

// util imports
import { COLOR } from '../utils';

export const FullRoundButton = ({ image, bg = COLOR.LightBlue, onPress }) => {
    return (
        <TouchableOpacity
            style={[styles.button, { backgroundColor: bg }]}
            onPress={() => onPress()}
        >
            <Image source={image} style={styles.image} />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginRight: 10,
    },
    image: {
        height: 40,
        width: 40,
    },
});
