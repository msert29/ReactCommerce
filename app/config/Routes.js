import React from "react";
import { StackNavigator } from "react-navigation";
import ImageNav from "../components/ImageNav/ImageNav";
import MenuContainer from "../components/Menu/MenuContainer";
import Dressings from "../components/Dressings/Dressings";
import Header from "../layout/Header/Header";

export const AppRoutes = StackNavigator({
  Home: {
    screen: ImageNav
  },
  Menu: {
    screen: MenuContainer,
    navigationOptions: ({ navigation }) => ({
      header: <Header pageTitle="Super Kebab & Pizza" />
    })
  },
  Dressings: {
    screen: Dressings
  }
});
