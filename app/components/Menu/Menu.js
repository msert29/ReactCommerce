import React, {Component} from 'react';
import {
    View,
    Text,
    TabBarIOS,
    TouchableOpacity,
    Modal
} from 'react-native';
import Header from "../../layout/Header/Header";
import Pizza from '../Pizza/Pizza';
import Burger from '../Burger/Burger';
import Cart from  '../cart/Cart';
import Dressings from './../Dressings/Dressings'

import {
    mealIcon,
    cartIcon,
    kebabIcon,
    burgerIcon,
    pizzaIcon,
    minimumOrderFee
} from '../../config/constants';

class Menu extends Component {
    static navigationOptions = ({navigation}) => ({
      header: <Header pageTitle={navigation.state.params.sectionName}/>
    });

    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);

        this.state = {
            products: [],
            selectedTab: 'Pizzas',
            deliveryEnabled: false,
            collectionEnabled: false,
            totalPrice: 0,
            showModal: false
        };
    }

    addItem(product){
      // Get current list of products
      let products = this.state.products
      let idx = this.state.products.indexOf(product)

      // Update the total price by quantity * price of the added product
      let totalPrice = this.state.totalPrice + (product.price * product.quantity)
      if (this.state.products.indexOf(product) !== -1) {
          // TODO: Check if product choices i.e extra toppings or salad sauce options are same and increment then only!
          products[idx].quantity += 1;
      } else {
          products.push(product);
      }

      // Update the state
      this.setState({
        products: products,
        totalPrice: totalPrice,
        deliveryEnabled: this.eligibleForDelivery(totalPrice),
        collectionEnabled: this.eligibleForCollection(totalPrice)
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
          deliveryEnabled: this.eligibleForDelivery(totalPrice),
          collectionEnabled: this.eligibleForCollection(totalPrice)
      })
    }

    eligibleForDelivery(totalPrice) {
      return totalPrice >= minimumOrderFee
    }

    eligibleForCollection(totalPrice) {
      // At least have one item in the basket to order a collection
      return totalPrice > 1
    }

    updateTabAndTitle (title) {
      this.setState({selectedTab: title});
      this.props.navigation.setParams({sectionName: title})
    }

    accumulateProducts () {
      let total = 0
      this.state.products.map((product) => {
        total += product.quantity
      })
      return total
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
                            selected={this.state.selectedTab === 'Pizzas'}
                            onPress={() => this.updateTabAndTitle('Pizzas')}>
                            {
                              <Pizza addItem={this.addItem} navigation={this.props.navigation} />
                            }
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            title="Kebabs"
                            icon={{uri: kebabIcon, scale:2}}
                            selected={this.state.selectedTab === 'Kebabs'}
                            onPress={() => this.updateTabAndTitle('Kebabs')}>
                            {
                                <View>
                                    <TouchableOpacity onPress={() => this.setState({showModal: true})}>
                                      <Text>Kebabs</Text>
                                    </TouchableOpacity>
                                    <Modal
                                      animationType="slide"
                                      transparent={false}
                                      visible={this.state.showModal}
                                      onRequestClose={() => {alert("Modal has been closed.")}}
                                    >
                                      <Dressings />
                                    </Modal>
                                </View>
                            }
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            icon={{uri: burgerIcon, scale:2}}
                            title="Burgers"
                            selected={this.state.selectedTab === 'Burgers'}
                            onPress={() => this.updateTabAndTitle('Burgers')}>
                            {
                                <Burger addItem={this.addItem} navigation={this.props.navigation}/>
                            }
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            title="Meals"
                            icon={{uri: mealIcon, scale: 2}}
                            selected={this.state.selectedTab === 'Meals'}
                            onPress={() => this.updateTabAndTitle('Meals')}>
                            {
                                <View>
                                    <Text>Meals</Text>
                                </View>
                            }
                        </TabBarIOS.Item>
                        <TabBarIOS.Item
                            icon={{uri: cartIcon, scale: 2}}
                            badge={this.accumulateProducts()}
                            title="Cart"
                            selected={this.state.selectedTab === 'Cart'}
                            onPress={() => this.updateTabAndTitle('Cart')}>
                            {
                                <Cart
                                  products={this.state.products} removeItem={this.removeItem}
                                  deliveryEnabled={this.state.deliveryEnabled}
                                  collectionEnabled={this.state.collectionEnabled}
                                  navigation={this.props.navigation}
                                />
                            }
                        </TabBarIOS.Item>
                    </TabBarIOS>
                </View>
        )
    }
}

module.exports = Menu;

