import React from 'react'
import {StyleSheet} from 'react-native'
import {width, height, burgers} from '../../config/constants'
module.exports = StyleSheet.create({
  ListViewContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    flex: 1,
    marginBottom: 50,
    borderBottomWidth: 0.5,
    borderColor: 'grey'
  },
  BurgerContainer: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: 'grey'
  },
  BurgerNameContainer: {
    flex: 2
  },
  BurgerName: {
    flex: 2,
    fontSize: 25,
    paddingLeft: 10,
    paddingTop: 15,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  BurgerDescription: {
    fontSize: 13,
    paddingLeft: 10,
  },
  BurgerPriceContainer: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  BurgerPrice: {
    flex: 2,
    fontSize: 13,
    paddingTop: 25,
    paddingLeft: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  BurgerAddButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  BurgerAddButton: {
    margin: 5,
    backgroundColor: 'red',
    width: 60
  },
  BurgerAddButtonText: {
    fontSize: 40,
    fontWeight: '100',
    color: 'white',
    alignSelf: 'center'
  }

})