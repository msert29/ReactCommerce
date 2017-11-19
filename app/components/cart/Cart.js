import React, { Component } from 'react';
import { Text, View, ListView, TouchableOpacity, Switch } from 'react-native';
import { Button, FormLabel, FormInput, Icon } from 'react-native-elements';
import { width } from '../../config/constants';
import style from './CartStyles';

export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      productsList: this.ds.cloneWithRows(this.props.products)
    };
    this.removeItem = this.removeItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      productsList: this.ds.cloneWithRows(nextProps.products),
    });
  }

  removeItem(product) {
    let index = this.props.products.indexOf(product);
    if (product.quantity > 1) {
      this.props.removeSingleExistingItem(
        index,
        product,
        (product.quantity -= 1),
      );
    } else {
      this.props.removeCart(index, product);
    }
  }

  accumulateItems() {
    let totalItems = 0;
    let totalPrice = 0;
    if (this.props.products.length > 0) {
      this.props.products.map(product => {
        totalPrice += product.quantity * product.price;
        totalItems += product.quantity;
      });
    }
    return { totalPrice: totalPrice, totalItems: totalItems };
  }

  renderIf(condition, content) {
    if (condition) {
      return content;
    } else {
      return null;
    }
  }

  displayCart() {
    return (
      <ListView
        style={style.CartProductContainer}
        dataSource={this.state.productsList}
        renderRow={(product, rowID) => (
          <View style={{ borderBottomWidth: 0.2 }}>
            <View style={style.CartItem} key={rowID}>
              <Text style={{ flex: 0.1 }}>{product.quantity}x</Text>
              <Text style={{ padding: 10, flex: 0.5 }}>
                {product.name.toString()}
              </Text>
              <Text style={{ flex: 0.2 }}>
                £{(product.quantity * product.price).toFixed(2)}
              </Text>
              <TouchableOpacity
                style={{ flex: 0.2 }}
                onPress={() => {
                  this.removeItem(product);
                }}
              >
                <Icon size={15} reverse color="red" name="close" />
              </TouchableOpacity>
            </View>
            {this.displayProductChoices(product)}
          </View>
        )}
      />
    );
  }

  static displayEmptyCart() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Please add items in order to proceed!</Text>
      </View>
    );
  }

  displayProductChoices(product) {
    if (product.type === 'burger') {
      return (
        <View style={{ marginLeft: 50, paddingBottom: 10 }}>
          <Text>-{product.salad.toString()}</Text>
          <Text>-{product.sauce.toString()}</Text>
          <Text>-{product.cheese.toString()}</Text>
        </View>
      );
    } else if (product.type === 'kebab') {
      return (
        <View style={{ marginLeft: 50, paddingBottom: 10 }}>
          <Text>-{product.salad.toString()}</Text>
          <Text>-{product.sauce.toString()}</Text>
          <Text>-{product.bread.toString()}</Text>
        </View>
      );
    } else if (product.type === 'pizza' && product.extra_toppings) {
      return (
        // TODO: A ListView of all extra toppings should be appended here
        <ListView style={{ marginLeft: 90, paddingBottom: 10 }}>
          <Text>-{product.salad.toString()}</Text>
        </ListView>
      );
    } else {
    }
  }

  render() {
    return (
      <View style={style.CartContainer}>
        <View style={{ flex: 3, padding: 10 }}>
          {this.renderIf(
            this.props.products.length > 0,
            this.displayCart(),
          )}
          {this.renderIf(
            this.props.products.length < 1,
            Cart.displayEmptyCart(),
          )}
        </View>
        <View
          style={{
            flex: 1.5,
            alignItems: 'stretch',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: 5,
            marginTop: 20,
          }}
        >
          <View style={{ flexDirection: 'column', flex: 0.5 }}>
            <Text
              style={{
                alignSelf: 'flex-end',
                borderBottomWidth: 0.5,
                borderBottomColor: 'black',
                marginRight: 15,
                padding: 5,
              }}
            >
              Total Items {this.accumulateItems()['totalItems']}
            </Text>
            <Text
              style={{
                alignSelf: 'flex-end',
                borderBottomWidth: 0.5,
                borderBottomColor: 'black',
                marginRight: 15,
                padding: 5,
              }}
            >
              Total £{this.accumulateItems()['totalPrice'].toFixed(2)}
            </Text>
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', alignItems: 'stretch' }}
          >
            <Button
              raised
              large
              backgroundColor="green"
              disabled={!this.props.collectionEnabled}
              icon={{ name: 'home' }}
              title="Collection"
              buttonStyle={{ width: width / 2 - 30 }}
            />
            <Button
              raised
              large
              backgroundColor="#C71585"
              textStyle={{ color: 'white' }}
              disabled={!this.props.deliveryEnabled}
              icon={{ name: 'motorcycle' }}
              title="Delivery"
              buttonStyle={{ width: width / 2 - 30 }}
            />
          </View>
        </View>
      </View>
    );
  }
}
