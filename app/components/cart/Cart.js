import React, {Component} from 'react'
import {Text, View, ListView, TouchableOpacity, Image } from 'react-native'
import { Button, FormLabel, FormInput } from 'react-native-elements'
import {width} from '../../config/constants'
import style from './CartStyles'

export default class Cart extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      products: [],
      dataSource: ds.cloneWithRows(this.props.products),
      total: 0,
    }
    this.removeItem = this.removeItem.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.setState({
      dataSource: ds.cloneWithRows(nextProps.products)
    })
  }

  removeItem (product) {
    this.props.removeItem(product)
  }

  totalPrice () {
    let total = 0
    if (this.props.products.length > 0) {
      this.props.products.map(product => {
        total += (product.quantity * product.price)
      })
    }
    return total
  }

  renderIf (condition, content) {
    if (condition) {
      return content
    } else {
      return null
    }
  }

  displayCart() {
    return (
      <ListView style={style.CartProductContainer} dataSource={this.state.dataSource} renderRow={(product, rowID) =>
        <View style={style.CartItem} key={rowID}>
          <Text>{product.quantity}x</Text>
          <Text>{product.name.toString()}</Text>
          <Text>£{(product.quantity * product.price).toFixed(2)}</Text>
          <TouchableOpacity style={{backgroundColor: 'red'}} onPress={() => { this.removeItem(product) }}>
            <Text>Remove</Text>
          </TouchableOpacity>
        </View>
      } />
    )
  }

  static displayEmptyCart () {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Please add items in order to proceed!</Text>
      </View>
    )
  }
  render () {
    console.log(this.state)
    return (
      <View style={style.CartContainer}>
        <View style={{flex: 3}}>
          {this.renderIf(this.props.products.length > 0, this.displayCart())}
          {this.renderIf(this.props.products.length < 1, Cart.displayEmptyCart())}
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: 20}}>
          <Text>Total £{this.totalPrice().toFixed(2)}</Text>
          <Button
            disabled={this.props.checkoutDisabled}
            large
            raised
            BACKGROUNDCOLOR="Green"
            title='Proceed to Checkout' style={{padding: 5}}/>
        </View>
      </View>
    )
  }
}
