import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: 50,
    },
    image: {
        width: width,
        height: 20,
    }
});