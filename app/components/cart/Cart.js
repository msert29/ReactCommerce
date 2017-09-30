import React, {Component} from 'react'
import {Text, View, ListView, TouchableOpacity} from 'react-native'
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

  render () {
    return (
      <View>
        <View>
          <ListView style={style.CartContainer} dataSource={this.state.dataSource} renderRow={(product, rowID) =>
            <View style={style.CartItem} key={rowID}>
              <Text>{product.quantity}x</Text>
              <Text>{product.name.toString()}</Text>
              <Text>£{(product.quantity * product.price).toFixed(2)}</Text>
              <TouchableOpacity style={{backgroundColor: 'red'}} onPress={() => { this.removeItem(product) }}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          }
          />
        </View>
        <View>
          <Text>Total</Text>
          <Text>{this.totalPrice()}</Text>
        </View>
      </View>
    )
  }
}
