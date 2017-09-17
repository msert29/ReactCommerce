import React,{Component} from 'react';
import {Text, View} from 'react-native';
import style from './CartStyles';

export default class Cart extends Component {
    render(){
        return(
            <View style={style.CartContainer}>
                {
                    this.props.products.map((product)=>{
                        return (
                            <View style={style.CartItem}>
                                <Text>1</Text>
                                <Text>{product.name.toString()}</Text>
                                <Text>£{product.price.toFixed(2)}</Text>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}