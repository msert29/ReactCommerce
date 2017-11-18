import React, {Component} from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'
import { pizzas } from '../../config/constants'
import Pizza from './Pizza'
import { AddCart,  RemoveSingleItemCart, AddSingleItemCart } from '../../actions/actions'

class PizzaContainer extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      extra_toppings: [],
      pizzaList: ds.cloneWithRows(pizzas)
    }
  }

  render () {
    return (
      <Pizza
        pizzaList={this.state.pizzaList}
        addToCart={this.props.addToCart}
        addExistingItem={this.props.addSingleItem}
        cart={this.props.cart}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav,
  cart: state.cart
})

module.exports = connect(mapStateToProps, {
  addToCart: AddCart,
  addSingleItem: AddSingleItemCart
})(PizzaContainer)
