import React, { Component } from "react";
import { ListView } from "react-native";
import { connect } from "react-redux";
import { pizzas } from "../../config/constants";
import Pizza from "./Pizza";
import { AddCart, UpdateExistingItemQuantityCart } from "../../actions/actions";
import {
  totalItemCountSelector,
  totalPriceSelector,
  deliverySelector,
  collectionSelector
} from '../../config/selectors';

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
        incrementExistingItemQuantity={this.props.incrementExistingItemQuantity}
        products={this.props.products}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  products: state.products.products,
  totalPrice: totalPriceSelector(state),
  totalProducts: totalItemCountSelector(state),
  deliveryEnabled: deliverySelector(state),
  collectionEnabled: collectionSelector(state),
});

export default connect(mapStateToProps, {
  addToCart: AddCart,
  incrementExistingItemQuantity: UpdateExistingItemQuantityCart
})(PizzaContainer);
