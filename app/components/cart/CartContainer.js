import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  totalItemCountSelector,
  totalPriceSelector,
  deliverySelector,
  collectionSelector
} from '../../config/selectors';
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
        totalPrice={this.props.totalPrice}
        totalItemsInCart={this.props.totalItems}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  products: state.products.products,
  totalPrice: totalPriceSelector(state),
  totalItems: totalItemCountSelector(state),
  deliveryEnabled: deliverySelector(state),
  collectionEnabled: collectionSelector(state),
});

export default connect(mapStateToProps, {
  RemoveCart,
  RemoveSingleItemCart
})(CartContainer);
