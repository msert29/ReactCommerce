import React,{Component} from 'react';
import {Text, View, ListView} from 'react-native';
import style from './CartStyles';

export default class Cart extends Component {
    constructor(props){
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            products: [],
            dataSource: ds.cloneWithRows(this.props.products),
            total: 0
        }
    }

    render(){
        return(
                <ListView style={style.CartContainer} dataSource={this.state.dataSource} renderRow={(product) =>
                                <View style={style.CartItem}>
                                    <Text>{product.quantity}</Text>
                                    <Text>{product.name.toString()}</Text>
                                    <Text>£{(product.quantity * product.price).toFixed(2)}</Text>
                                </View>
                    }
                />
        )
    }
}