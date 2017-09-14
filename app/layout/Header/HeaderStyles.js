import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;


module.exports = StyleSheet.create({
    baseContainer: {
        paddingTop: 15,
        backgroundColor: 'red',
        height: 60,
        width: width,
        shadowColor: '#000',
        shadowOffset: {width: 0, height:10},
        shadowOpacity: 0.1,
        marginBottom: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 25,
        color: 'white',
        fontWeight: '100',
    },
});
