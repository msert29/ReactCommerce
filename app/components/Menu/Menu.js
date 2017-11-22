import React, { Component } from "react";
import { View, Text, TabBarIOS, TouchableOpacity } from "react-native";
import PizzaContainer from "../Pizza/PizzaContainer";
import Burger from "../Burger/Burger";
import CartContainer from "../cart/CartContainer";

import {
  mealIcon,
  cartIcon,
  kebabIcon,
  burgerIcon,
  pizzaIcon
} from "../../config/constants";

export default class Menu extends Component {
  state = {
    selectedTab: "Pizzas"
  };

  changeTab(selectedTab) {
    this.setState({ selectedTab });
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <TabBarIOS
          unselectedTintColor="grey"
          tintColor="#05A5D1"
          barTintColor="white"
        >
          <TabBarIOS.Item
            icon={{ uri: pizzaIcon, scale: 2 }}
            title="Pizzas"
            selected={this.state.selectedTab === "Pizzas"}
            onPress={() => this.changeTab("Pizzas")}
          >
            <PizzaContainer />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={{ uri: kebabIcon, scale: 2 }}
            title="Kebabs"
            selected={this.state.selectedTab === "Kebabs"}
            onPress={() => this.changeTab("Kebabs")}
          >
            {
              <View>
                <TouchableOpacity
                  onPress={() => this.setState({ showModal: true })}
                >
                  <Text>Kebabs</Text>
                </TouchableOpacity>
              </View>
            }
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={{ uri: burgerIcon, scale: 2 }}
            title="Burgers"
            selected={this.state.selectedTab === "Burgers"}
            onPress={() => this.changeTab("Burgers")}
          >
            <Burger />
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={{ uri: mealIcon, scale: 2 }}
            selected={this.state.selectedTab === "Meals"}
            onPress={() => this.changeTab("Meals")}
            title="Meals"
          >
            {
              <View>
                <Text>Meals</Text>
              </View>
            }
          </TabBarIOS.Item>
          <TabBarIOS.Item
            icon={{ uri: cartIcon, scale: 2 }}
            title="Cart"
            selected={this.state.selectedTab === "Cart"}
            onPress={() => this.changeTab("Cart")}
            badge={this.props.totalItems}
          >
            <CartContainer />
          </TabBarIOS.Item>
        </TabBarIOS>
      </View>
    );
  }
}

module.exports = Menu;
