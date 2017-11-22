import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
const ImageNavStyle = require('./ImageNavStyles');
import Header from '../../layout/Header/Header';
const width = Dimensions.get('window').width;
import { connect } from 'react-redux';

class ImageNav extends Component {
  static navigationOptions = {
    header: <Header pageTitle="Super Kebab & Pizza" />,
  };

  render() {
    return (
      <View style={ImageNavStyle.container}>
        <ImageBackground
          style={ImageNavStyle.image}
          blurRadius={8}
          source={require('../../images/pizza.jpg')}
        >
          <View style={ImageNavStyle.textContainer}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('Menu', {
                  sectionName: 'Pizzas',
                })
              }
            >
              <Text style={ImageNavStyle.text}>Place an Order</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ImageBackground
          style={ImageNavStyle.image}
          blurRadius={8}
          source={require('../../images/2.jpg')}
        >
          <View style={ImageNavStyle.textContainer}>
            <Text style={ImageNavStyle.text}>View Menu</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          style={ImageNavStyle.image}
          blurRadius={8}
          source={require('../../images/review.jpg')}
        >
          <View style={ImageNavStyle.textContainer}>
            <Text style={ImageNavStyle.text}>Customer Reviews</Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

mapStateToProps = state => ({
  nav: state.nav,
});

module.exports = connect(mapStateToProps)(ImageNav);
