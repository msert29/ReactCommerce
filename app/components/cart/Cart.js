import React, {Component} from 'react'
import {Text, View, ListView, TouchableOpacity, Switch } from 'react-native'
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements'
import {width} from '../../config/constants'
import style from './CartStyles'

export default class Cart extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      products: [],
      dataSource: ds.cloneWithRows(this.props.products),
      total: 0
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

  displayCart () {
    return (
      <ListView style={style.CartProductContainer} dataSource={this.state.dataSource} renderRow={(product, rowID) =>
        <View style={style.CartItem} key={rowID}>
          <Text>{product.quantity}x</Text>
          <Text>{product.name.toString()}</Text>
          <Text>£{(product.quantity * product.price).toFixed(2)}</Text>
          <TouchableOpacity onPress={() => { this.removeItem(product) }}>
            <Icon
              size={15}
              reverse
              color="red"
              name='close' />
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
        <View style={{flex: 3, padding: 10}}>
          {this.renderIf(this.props.products.length > 0, this.displayCart())}
          {this.renderIf(this.props.products.length < 1, Cart.displayEmptyCart())}
        </View>
        <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center', flexDirection: 'column', marginBottom: 5, marginTop: 20}}>
          <Text style={{alignSelf: 'center'}}>Total £{this.totalPrice().toFixed(2)}</Text>
          <View style={{ flex:1, flexDirection: 'row', alignItems: 'stretch' }}>
            <TouchableOpacity style={{flex:1, backgroundColor: 'purple'}}>
              <Text style={{alignSelf: 'center', textAlign: 'center'}}>Collection</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1, backgroundColor: 'green'}}>
              <Text style={{textAlign: 'center', alignSelf: 'center'}}>Delivery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
