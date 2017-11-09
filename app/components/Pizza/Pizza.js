import React, {Component} from 'react'
import {View, Text, ListView, TouchableOpacity, Dimensions} from 'react-native'
import PizzaStyle from './PizzaStyle'
import {pizzas} from '../../config/constants'
import {store} from '../../../App'
import { AddCart } from '../../actions/actions'

export default class Pizza extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      extra_toppings: [],
      dataSource: ds.cloneWithRows(pizzas)
    }
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart (product) {
    this.props.addItem(product)
  }

  render () {
    return (
      <ListView style={PizzaStyle.ListBaseContainer} dataSource={this.state.dataSource} renderRow={(rowData) =>
        <View style={PizzaStyle.ItemBaseContainer}>
          <View style={PizzaStyle.PizzaNameDescriptionContainer}>
            <Text style={PizzaStyle.PizzaName}>{rowData.name}</Text>
            <Text style={PizzaStyle.PizzaDescription}>{rowData.description}</Text>
          </View>
          <View style={PizzaStyle.PizzaPriceContainer}>
            <Text style={PizzaStyle.PizzaPriceText}>from £{rowData.price.toFixed(2)}</Text>
          </View>
          <View style={PizzaStyle.PizzaAddButtonContainer}>
            <TouchableOpacity style={PizzaStyle.PizzaAddButton} onPress={() => { this.addToCart(rowData) }}>
              <Text style={PizzaStyle.PizzaAddButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      }/>
    )
  }
}
