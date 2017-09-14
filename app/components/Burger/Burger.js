import React, {Component} from 'react';
import {View, Text, ListView, TouchableOpacity, Dimensions, Modal} from 'react-native';
import styles from './BurgerStyle';

export default class Burger extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const burgers = [
            {
                "id": 1,
                'type': 'burger',
                "name": "1/4 Burger",
                "price": 3.00,
            },
            {
                "id": 2,
                'type': 'burger',
                "name": "1/2 Burger",
                "price": 4,
            },
            {
                "id": 3,
                'type': 'burger',
                "name": "1/4 Chicken Burger",
                "price": 3.50,
            },
            {
                "id": 4,
                'type': 'burger',
                "name": "Vegie Burger",
                "price": 3.60,
            },
            {
                "id": 5,
                'type': 'burger',
                "name": "Doner Roll",
                "price": 3.80,
            },
            {
                "id": 6,
                'type': 'burger',
                "name": "Chicken Doner Roll",
                "price": 4.00,
            },
        ];
        this.state = {
            extra_toppings: [],
            dataSource: ds.cloneWithRows(burgers),
            modalVisible: false
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(product) {
        this.setState({modalVisible: !this.state.modalVisible});
        this.props.addItem(product);
        console.log(this.state);
    }

    setModalVisible(visible) { this.setState({modalVisible: visible}); }
    render(){
        return(
            <ListView style={styles.ListViewContainer} dataSource={this.state.dataSource} renderRow={(rowData) =>
                <View style={styles.BurgerContainer}>
                    <View style={styles.BurgerNameContainer}>
                        <Text style={styles.BurgerName}>{rowData.name}</Text>
                        <Text style={styles.BurgerDescription}>{rowData.description}</Text>
                    </View>
                    <View style={styles.BurgerPriceContainer}>
                        <Text style={styles.BurgerPrice}>from £{rowData.price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.BurgerAddButtonContainer}>
                        <TouchableOpacity style={styles.BurgerAddButton} onPress={() => {this.setModalVisible(true)}}>
                            <Text style={styles.BurgerAddButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }/>
        )
    }
}

/*

Action - An object that tells the reducer to change its data

Reducer - A function that returns some data.

State - Data for our app to us.

Store- An object that holds the applications data [Reducer and State]

 */