import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

const HeaderStyle = require('./HeaderStyles');

export default class Header extends Component {
    render() {
        return(
            <View style={HeaderStyle.baseContainer}>
                    <Text style={HeaderStyle.title}>{this.props.pageTitle}</Text>
            </View>
        )
    }
}