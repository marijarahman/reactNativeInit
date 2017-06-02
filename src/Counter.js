import React from 'react';
import {View, Text} from 'react-native';

export const Counter = (props) => {
    const { container, counter } = styles;
    return (
        <View style={container}>
            <Text style={counter}>{props.size}</Text>
        </View>
    )
};

const styles = {
    container: {
        backgroundColor: '#28FFCA',
        position: 'absolute',
        right: 40,
        paddingTop: 2.5,
        paddingBottom: 2.5,
        paddingLeft: 3.5,
        paddingRight: 3.5
    },
    counter: {
        fontSize: 12
    }
};