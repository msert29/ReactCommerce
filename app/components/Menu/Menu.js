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
            checkoutDisabled: true,
            totalPrice: 0
        };
    }

    addItem(product){
      let products = this.state.products
      let idx = this.state.products.indexOf(product);
      if (this.state.products.indexOf(product) !== -1) {
          products[idx].quantity += 1;
      } else {
          products.push(product);
      }
      let totalPrice = this.state.totalPrice + (product.price * product.quantity)
      this.setState({products: products, totalPrice: totalPrice, checkoutDisabled: this.totalPriceAboveMinimumOrder(totalPrice)})
    }

    removeItem(product){
      let idx = this.state.products.indexOf(product)
      let products = this.state.products
      let totalPrice = this.state.totalPrice - (product.price * product.quantity)
      console.log(totalPrice)
        if (this.state.products[idx].quantity > 1 ){
          products[idx].quantity -= 1
        } else {
          products.splice(idx, 1)
        }
      this.setState({products: products, totalPrice: totalPrice, checkoutDisabled: this.totalPriceAboveMinimumOrder(totalPrice)})

    }

    totalPriceAboveMinimumOrder(totalPrice) {
      return totalPrice < 13
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
                                <Cart products={this.state.products} removeItem={this.removeItem} checkoutDisabled={this.state.checkoutDisabled}/>
                            }
                        </TabBarIOS.Item>
                    </TabBarIOS>

                </View>
        )
    }
}

module.exports = Menu;

