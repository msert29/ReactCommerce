import React,{Component} from 'react';
import {Text, View} from 'react-native';

export default class Cart extends Component {
    render(){
        return(
            <View>
                {
                    this.props.products.map((product)=>{
                        return (<Text>{product.name.toString()}</Text>)
                    })
                }
            </View>
        )
    }
}