import React, {Component} from 'react';
import {View, Text, ListView, TouchableOpacity, Dimensions} from 'react-native';
import PizzaStyle from './PizzaStyle';

export default class Pizza extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        const pizzas = [
            {
                "id": 1,
                'type': 'pizza',
                "name": "Margerita",
                "price": 5.50,
                "description": "Toppings: Tomato"
            },
            {
                "id": 2,
                'type': 'pizza',
                "name": "Vegetarian",
                "price": 5.80,
                "description": "Toppings: Tomato, "
            },
            {
                "id": 3,
                'type': 'pizza',
                "name": "Hawaiian",
                "price": 5.80,
                "description": "Toppings: fresh tomatoes"
            },
            {
                "id": 4,
                'type': 'pizza',
                "name": "Hot & Spicy",
                "price": 6.80,
                "description": "Toppings: mushroom, sweetcorn."
            },
            {
                "id": 5,
                'type': 'pizza',
                "name": "Mexican",
                "price": 6.80,
                'description': 'Toppings: Beef, Mushroom'
            },
            {
                "id": 6,
                'type': 'pizza',
                "name": "Seafood",
                "price": 7.80,
                'description': 'Toppings: Beef, Mushroom'
            },
            {
                "id": 7,
                'type': 'pizza',
                "name": "Meat Mix",
                "price": 8.20,
                'description': 'Toppings: Beef, Ham, Turkey, Chicken, Peperoni, Seafood, Chicken.'
            },
            {
                "id": 8,
                'type': 'pizza',
                "name": "Super Special",
                "price": 8.50,
                'description': 'Toppings: All Toppings'
            },
        ];
        this.state = {
            extra_toppings: [],
            dataSource: ds.cloneWithRows(pizzas),
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick(product) {
        this.props.addItem(product);
    }

    render(){
        return(
            <ListView style={PizzaStyle.ListBaseContainer}  dataSource={this.state.dataSource} renderRow={(rowData) =>
                <View style={PizzaStyle.ItemBaseContainer}>
                    <View style={PizzaStyle.PizzaNameDescriptionContainer}>
                        <Text style={PizzaStyle.PizzaName}>{rowData.name}</Text>
                        <Text style={PizzaStyle.PizzaDescription}>{rowData.description}</Text>
                    </View>
                    <View style={PizzaStyle.PizzaPriceContainer}>
                        <Text style={PizzaStyle.PizzaPriceText}>from £{rowData.price.toFixed(2)}</Text>
                    </View>
                    <View style={PizzaStyle.PizzaAddButtonContainer}>
                        <TouchableOpacity style={PizzaStyle.PizzaAddButton} onPress={() => {this.onClick(rowData)}}>
                            <Text style={PizzaStyle.PizzaAddButtonText}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }/>
        )
    }
}
