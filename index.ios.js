import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

import Header from './app/layout/Header/Header';
import ImageNav from "./app/components/ImageNav/ImageNav";
import Menu from "./app/components/Menu/Menu";
import { StackNavigator, withNavigation } from 'react-navigation';
const window = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

export default class Homepage extends Component {
    static navigationOptions = {
        header: <Header pageTitle='Super Kebab & Pizza'/>
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <ImageNav navigate={navigate}/>
            </View>
        );
    }
}

const Super = StackNavigator({
    Home: {screen: Homepage},
    Order: {screen: Menu},
    // Dressing: {screen: Dressings}
});

AppRegistry.registerComponent('Super', () => Super);
