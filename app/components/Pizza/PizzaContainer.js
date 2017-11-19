import React, { Component } from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import { pizzas } from "../../config/constants";
import Pizza from "./Pizza";
import { AddCart, AddSingleItemCart } from "../../actions/actions";
import {
  getTotalPrice,
  getTotalItemCount,
  checkCollectionEnabled,
  checkDeliveryEnabled
} from "../../config/utils";
class PizzaContainer extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      extra_toppings: [],
      pizzaList: ds.cloneWithRows(pizzas)
    };
  }

  render() {
    return (
      <Pizza
        pizzaList={this.state.pizzaList}
        addToCart={this.props.addToCart}
        addExistingItem={this.props.addSingleItem}
        products={this.props.products}
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

module.exports = connect(mapStateToProps, {
  addToCart: AddCart,
  addSingleItem: AddSingleItemCart
})(PizzaContainer);
