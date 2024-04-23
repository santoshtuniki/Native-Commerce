// module imports
import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';

// util imports
import { COLOR } from '../utils';

export const InputField = ({ placeholder, keyboardType = 'default', secureTextEntry = false }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBlockColor: COLOR.Gray,
        borderBottomWidth: 1,
        marginBottom: 15,
    },
});
