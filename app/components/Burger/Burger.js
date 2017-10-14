import React, {Component} from 'react'
import {View, Text, ListView, TouchableOpacity, Dimensions, Modal} from 'react-native'
import styles from './BurgerStyle'
import {burgers} from '../../config/constants'

export default class Burger extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      extra_toppings: [],
      dataSource: ds.cloneWithRows(burgers)
    }
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart (product) {
    this.props.navigation.navigate('Dressings', {navigation: this.props.navigation})
    this.props.addItem(product)
  }

  render () {
    return (
      <ListView style={styles.ListViewContainer} dataSource={this.state.dataSource} renderRow={(rowData) =>
        <View style={styles.BurgerContainer}>
          <View style={styles.BurgerNameContainer}>
            <Text style={styles.BurgerName}>{rowData.name}</Text>
            <Text style={styles.BurgerDescription}>{rowData.description}</Text>
          </View>
          <View style={styles.BurgerPriceContainer}>
            <Text style={styles.BurgerPrice}>from £{rowData.price.toFixed(2)}</Text>
          </View>
          <View style={styles.BurgerAddButtonContainer}>
            <TouchableOpacity style={styles.BurgerAddButton} onPress={() => { this.addToCart(rowData) }}>
              <Text style={styles.BurgerAddButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      }/>
    )
  }
}
