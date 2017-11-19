import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getTotalPrice, getTotalItemCount, checkDeliveryEnabled, checkCollectionEnabled} from '../../config/utils'

import Cart from './Cart';
import { RemoveCart, RemoveSingleItemCart } from '../../actions/actions';

class CartContainer extends Component {
  render() {
    return (
      <Cart
        products={this.props.products}
        removeCart={this.props.RemoveCart}
        removeSingleExistingItem={this.props.RemoveSingleItemCart}
        deliveryEnabled={this.props.deliveryEnabled}
        collectionEnabled={this.props.collectionEnabled}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  products: state.cart.products,
  totalPrice: getTotalPrice(state.cart.products),
  totalProducts: getTotalItemCount(state.cart.products),
  deliveryEnabled: checkDeliveryEnabled(state.cart.products),
  collectionEnabled: checkCollectionEnabled(state.cart.products),
});

export default connect(mapStateToProps, {
  RemoveCart,
  RemoveSingleItemCart
})(CartContainer);
