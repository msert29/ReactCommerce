import React, {Component} from 'react';
import {View, Text, ListView, TouchableOpacity, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

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
            <ListView style={{backgroundColor: 'white', flexDirection: 'column', flex:1}} dataSource={this.state.dataSource} renderRow={(rowData) =>
                <View style={{flex: 1, width: width, flexDirection: 'row', height: 70, borderBottomWidth: 0.5, borderColor: 'grey'}}>
                    <View style={{flex:2, borderBottomWidth: 0.5, borderColor: 'grey'}}>
                        <Text style={{fontSize: 15, paddingLeft: 10, paddingTop: 10, flex: 2, justifyContent: 'center', alignItems: 'flex-start'}}>{rowData.name}</Text>
                        <Text style={{fontSize:9, paddingLeft: 10, paddingTop: 1, flex: 2, alignItems: 'flex-end'}}>{rowData.description}</Text>
                    </View>
                    <View style={{flex: 1, borderBottomWidth: 0.5, borderColor: 'grey', justifyContent: 'center', alignSelf: 'center'}}>
                        <Text style={{fontSize: 10, padding: 10, flex: 2, justifyContent: 'flex-end', alignItems: 'flex-end'}}>from £{rowData.price.toFixed(2)}</Text>
                    </View>
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', borderBottomWidth: 0.5, borderColor: 'grey'}}>
                        <TouchableOpacity style={{margin: 5, backgroundColor: 'red', width: 60}} onPress={() => {this.onClick(rowData)}}>
                            <Text style={{ fontSize: 40, fontWeight: '100', color: 'white', alignSelf: 'center'}}>+</Text>
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