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
        };
    }

    addItem(product){
        this.setState(prevState => {
            if (this.state.products.indexOf(product) !== -1) {
                let idx = this.state.products.indexOf(product);
                this.state.products[idx].quantity += 1;
            } else {
                this.state.products.push(product);
            }
        });
    }

    removeItem(product){
        this.setState(prevState => {
            console.log((this.state));
            let idx = this.state.products.indexOf(product);
            // Check if quantity is higher than one and if so remove one item only at a time!
            if (this.state.products[idx].quantity > 1 ){
                this.state.products[idx].quantity -= 1
            } else {
                this.state.products.splice(idx)
            }
            //this.state.products[idx].splice(idx, 1);
        })
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
                                <Cart products={this.state.products} removeItem={this.removeItem}/>
                            }
                        </TabBarIOS.Item>
                    </TabBarIOS>

                </View>
        )
    }
}

module.exports = Menu;

