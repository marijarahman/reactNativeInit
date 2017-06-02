import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {images} from './Images';
import {Gradient} from './Gradient';

export const DashboardProfile = () =>
    <View>
        <Gradient
            colors={['#1D7B77', '#1A5167', '#0D2832']}
            start={{x: 0.0, y: 0.25}}
            end={{x: 0.5, y: 1.0}}
            style={styles.gradient}
        >
            <Image style={styles.profileImage} source={{uri: images['profile']}}/>
        </Gradient>
        <Text style={styles.username}>PETER BJORKBORG</Text>
    </View>;

const styles = StyleSheet.create({
    profileImage: {
        alignSelf: 'center',
        borderWidth: 4,
        borderColor: '#143D4D',
        borderRadius: 50,
        height: 100,
        marginTop: 5,
        width: 100
    },
    username: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 22
    },
    gradient: {
        alignSelf: 'center',
        borderRadius: 55,
        height: 110,
        marginTop: 15,
        marginBottom: 10,
        width: 110
    }
});