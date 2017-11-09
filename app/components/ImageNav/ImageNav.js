import React, {Component} from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity, ImageBackground} from 'react-native';
const ImageNavStyle = require('./ImageNavStyles');
import Header from "../../layout/Header/Header";
const width = Dimensions.get('window').width;
import {store} from '../../../App'

class ImageNav extends Component {
    static navigationOptions = {
        header: <Header pageTitle='Super Kebab & Pizza'/>
    };

    render() {
      console.log(store)
      console.log(store.getState())
        return (
            <View
                style={{
                    display: 'flex',
                    flex: 3,
                    width: width,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                <ImageBackground style={{flex: 1, width: width, marginBottom: 1}} blurRadius={8} source={require('../../images/pizza.jpg')}>
                    <View style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Menu', {'sectionName': 'Pizzas'})}>
                            <Text style={{backgroundColor: 'transparent', fontWeight: '100', fontSize: 50, color: 'white'}}>
                                Place an Order
                            </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
                <ImageBackground style={{flex: 1,width: width, marginBottom: 1}} blurRadius={8} source={require('../../images/2.jpg')} >
                    <View style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{backgroundColor: 'transparent', fontWeight: '100', fontSize: 50, color: 'white'}}>
                            View Menu
                        </Text>
                    </View>
                </ImageBackground>
                <ImageBackground style={{flex: 1,width: width, marginBottom: 1}} blurRadius={8} source={require('../../images/review.jpg')}>
                    <View style={{display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{backgroundColor: 'transparent', fontWeight: '100', fontSize: 45, color: 'white'}}>
                            Customer Reviews
                        </Text>
                    </View>
                </ImageBackground>
            </View>

        )
    }
}

module.exports = ImageNav;