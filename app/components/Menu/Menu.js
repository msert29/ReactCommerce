import React, {Component} from 'react';
import {
    View,
    Text,
    TabBarIOS,
} from 'react-native';
import Header from "../../layout/Header/Header";
import Pizza from '../Pizza/Pizza';
import Burger from '../Burger/Burger';
import Cart from  '../cart/Cart';

import {
    mealIcon,
    cartIcon,
    kebabIcon,
    burgerIcon,
    pizzaIcon,
    minimumOrderFee
} from '../../config/constants';

class Menu extends Component {
    static navigationOptions = {
        header: <Header pageTitle="Menu"/>,
    };

    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);

        this.state = {
            products: [],
            selectedTab: 'pizzas',
            checkoutEnabled: false,
            totalPrice: 0
        };
    }

    addItem(product){
      // Get current list of products
      let products = this.state.products
      let idx = this.state.products.indexOf(product)

      // Update the total price by quantity * price of the added product
      let totalPrice = this.state.totalPrice + (product.price * product.quantity)
      if (this.state.products.indexOf(product) !== -1) {
          products[idx].quantity += 1;
      } else {
          products.push(product);
      }

      // Update the state
      this.setState({
        products: products,
        totalPrice: totalPrice,
        checkoutEnabled: this.eligableForDelivery(totalPrice)
      })
    }

    removeItem(product){
      let idx = this.state.products.indexOf(product)
      let products = this.state.products
      let totalPrice = 0

      // Remove single item if multiple items added, else remove the whole item from cart
      if (this.state.products[idx].quantity > 1 ){
          products[idx].quantity -= 1
          totalPrice = this.state.totalPrice - (product.price * product.quantity)
      } else {
          products.splice(idx, 1)
          totalPrice = this.state.totalPrice - product.price
      }
      this.setState({
          products: products,
          totalPrice: totalPrice,
          checkoutEnabled: this.eligableForDelivery(totalPrice)}
        )
    }

    eligableForDelivery(totalPrice) {
      console.log(totalPrice)
      console.log(minimumOrderFee)
      console.log(totalPrice >= minimumOrderFee)
      return totalPrice >= minimumOrderFee
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                    <TabBarIOS
                        unselectedTintColor="grey"
                        tintColor="#05A5D1"
                        barTintColor="white">
                        <TabBarIOS.Item
                            icon={{uri: pizzaIcon , scale: 2}}
                            title="Pizzas"
                            selected={this.state.selectedTab === 'pizzas'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'pizzas',
                                });
                            }}>
                            {<Pizza addItem={this.addItem} />}
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            title="Kebabs"
                            icon={{uri: kebabIcon, scale:2}}
                            selected={this.state.selectedTab === 'kebabs'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'kebabs',
                                });
                            }}>
                            {
                                <View>
                                    <Text>Kebabs</Text>
                                </View>
                            }
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            icon={{uri: burgerIcon, scale:2}}
                            title="Burgers"
                            selected={this.state.selectedTab === 'burgers'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'burgers',
                                });
                            }}>
                            {
                                <Burger addItem={this.addItem} />
                            }
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            title="Meals"
                            icon={{uri: mealIcon, scale: 2}}
                            selected={this.state.selectedTab === 'meals'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'meals',
                                });
                            }}>
                            {
                                <View>
                                    <Text>Meals</Text>
                                </View>
                            }
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            icon={{uri: cartIcon, scale: 2}}
                            title="Cart"
                            selected={this.state.selectedTab === 'cart'}
                            onPress={() => {
                                this.setState({selectedTab: 'cart'});
                            }}>
                            {
                                <Cart products={this.state.products} removeItem={this.removeItem} checkoutEnabled={this.state.checkoutEnabled}/>
                            }
                        </TabBarIOS.Item>
                    </TabBarIOS>

                </View>
        )
    }
}

module.exports = Menu;

