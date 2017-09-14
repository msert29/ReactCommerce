import React, {Component} from 'react';
import {View, Text, ListView, TouchableOpacity, Dimensions, Modal} from 'react-native';
const {width, height} = Dimensions.get('window');

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
                        <TouchableOpacity style={{margin: 5, backgroundColor: 'red', width: 60}} onPress={() => {this.setModalVisible(true)}}>
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