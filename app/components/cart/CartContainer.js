import React, { Component } from 'react'
import { ListView } from 'react-native'
import { connect } from 'react-redux'

import Cart from './Cart'
import { RemoveCart, RemoveSingleItemCart } from '../../actions/actions'

class CartContainer extends Component {
  render () {
    return (
      <Cart
        cart={this.props.cart}
        removeCart={this.props.RemoveCart}
        removeSingleExistingItem={this.props.RemoveSingleItemCart}
      />
    )
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  cart: state.cart
})

export default connect(mapStateToProps, {
  RemoveCart, RemoveSingleItemCart
})(CartContainer)
