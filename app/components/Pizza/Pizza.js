import React, { Component } from 'react';
import { View, Text, ListView, TouchableOpacity } from 'react-native';
import PizzaStyle from './PizzaStyle';


export default class Pizza extends Component {
  addRequested = product => {
    // Check if products array contain the same product
    let productExists = false;
    let productIndex = -1;
    this.props.products.forEach((p, idx) => {
      if (product.id === p.id) {
        productExists = true;
        productIndex = idx;
      }
    });

    if (productExists) {
      this.props.incrementExistingItemQuantity(productIndex, product, (product.quantity += 1));
    } else {
      this.props.addToCart(product);
    }
  };

  render() {
    return (
      <ListView
        style={PizzaStyle.ListBaseContainer}
        dataSource={this.props.pizzaList}
        renderRow={rowData => (
          <View style={PizzaStyle.ItemBaseContainer}>
            <View style={PizzaStyle.PizzaNameDescriptionContainer}>
              <Text style={PizzaStyle.PizzaName}>{rowData.name}</Text>
              <Text style={PizzaStyle.PizzaDescription}>
                {rowData.description}
              </Text>
            </View>
            <View style={PizzaStyle.PizzaPriceContainer}>
              <Text style={PizzaStyle.PizzaPriceText}>
                from £{rowData.price.toFixed(2)}
              </Text>
            </View>
            <View style={PizzaStyle.PizzaAddButtonContainer}>
              <TouchableOpacity
                style={PizzaStyle.PizzaAddButton}
                onPress={() => this.addRequested(rowData)}
              >
                <Text style={PizzaStyle.PizzaAddButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    );
  }
}
