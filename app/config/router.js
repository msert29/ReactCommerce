import React from 'react';
import {TabNavigator, StackNavigator} from 'react-navigation';
import ImageNav from "../components/ImageNav/ImageNav";


export const Tabs = TabNavigator({
    Feed: {
        screen: ImageNav,
        navigationOptions: {
            tabBarLabel: 'Feed',
        },
    },
    Me: {
        screen: ImageNav,
        navigationOptions: {
            tabBarLabel: 'Me',
        },
    },
});

export const SettingsStack = StackNavigator({
    Settings: {
        screen: ImageNav,
        navigationOptions: {
            title: 'Settings'
        }
    }
});

export const Root = StackNavigator(
    {
        Tabs: {
            screen: Tabs
        },
        Settings: {
            screen: SettingsStack,
        },
    },
    {
        mode: 'modal',
        headerMode: 'none'
    }
);