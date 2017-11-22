import React, { Component } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: 50,
  },
  image: {
    flex: 1,
    width: width,
    marginBottom: 1,
  },
  container: {
    display: 'flex',
    flex: 3,
    width: width,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textContainer: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    backgroundColor: "transparent",
    fontWeight: "100",
    fontSize: 50,
    color: "white"
  }
});
