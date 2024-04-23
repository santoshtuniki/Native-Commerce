// module imports
import React from 'react';
import {
    TouchableOpacity,
    Text,
} from 'react-native';

// util imports
import { COLOR } from '../utils';

export const RoundButton = ({ label, bg = COLOR.DarkBlue, onPress, width = '100%', marginTop = 0 }) => {
    return (
        <TouchableOpacity
            style={{
                padding: 10,
                borderRadius: 20,
                marginBottom: 10,
                marginRight: 10,
                borderWidth: 0.5,
                borderColor: COLOR.Black,
                backgroundColor: bg,
                width: width,
                marginTop: marginTop,
            }}
            onPress={() => onPress()}
        >
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    color: bg === COLOR.White ? COLOR.Black : COLOR.White,
                }}
            >
                {label}
            </Text>
        </TouchableOpacity>
    );
};
