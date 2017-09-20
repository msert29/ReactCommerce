import React,{Component} from 'react';
import {Text, View, ListView, TouchableOpacity} from 'react-native';
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
        this.removeItem = this.removeItem.bind(this);
    }

    componentWillReceiveProps(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
            dataSource: ds.cloneWithRows(this.props.products)
        })
    }

    removeItem(product){
        this.props.removeItem(product);
    }

    render(){
        return(
                <ListView style={style.CartContainer} dataSource={this.state.dataSource} renderRow={(product, rowID) =>
                                <View style={style.CartItem} key={rowID}>
                                    <Text>{product.quantity}x</Text>
                                    <Text>{product.name.toString()}</Text>
                                    <Text>£{(product.quantity * product.price).toFixed(2)}</Text>
                                    <TouchableOpacity onPress={() => {this.removeItem(product)}}>
                                        <Text>Remove</Text>
                                    </TouchableOpacity>
                                </View>
                    }
                />
        )
    }
}