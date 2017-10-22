import React, {Component} from 'react'
import { Text } from 'react-native'
import Header from '../../layout/Header/Header'
import {Container, Content, Form, Input, Label, Picker, Item, Card, CardItem, Body, Left, Button, Footer, FooterTab } from 'native-base'
const PickerItem = Picker.Item

class Dressings extends Component {
  static navigationOptions = ({navigation}) => ({
    header: <Header pageTitle="Options"/>
  });

  constructor (props) {
    super(props)
    console.log('here')
    console.log(this.props)
    this.state = {
      salad: 'No Salad',
      sauce: 'No Sauce',
      bread: undefined,
      cheese: undefined,
      size: undefined,
    }
    this.addToCart = this.addToCart.bind(this)
  }

  setSalad (selectedSalad) {
    this.setState({salad: selectedSalad})
  }

  setSauce (selectedSauce) {
    this.setState({sauce: selectedSauce})
  }

  setBread (selectedBread) {
    this.setState({bread: selectedBread})
  }

  setCheese (selectedCheese) {
    this.setState({cheese: selectedCheese})
  }

  setSize (selectedSize) {
    this.setState({size: selectedSize})
  }

  checkAndDisplayBreadSelection () {
    if (this.props.navigation.state.params.displayBread) {
      return (
        <CardItem>
          <Body>
            <Item fixedLabel>
              <Label>Bread Choice</Label>
              <Picker
                mode="dropdown"
                placeholder="Select Sauce"
                selectedValue={this.state.bread}
                onValueChange={this.setBread.bind(this)}
              >
                <Item label="Pitta Bread" value="Pitta Bread"/>
                <Item label="Tortilla Wrap" value="Tortilla Wrap"/>
                <Item label="Seperate Bread" value="Seperate Bread"/>
                <Item label="No Bread" value="No Bread"/>
              </Picker>
            </Item>
          </Body>
        </CardItem>
      )
    }
  }

  checkAndDisplayCheeseSelection () {
    if (this.props.navigation.state.params.displayCheese) {
      return (
        <CardItem>
          <Body>
            <Item fixedLabel>
              <Label>Cheese Choice</Label>
              <Picker
                mode="dropdown"
                placeholder="Cheese Choice"
                selectedValue={this.state.cheese}
                onValueChange={this.setCheese.bind(this)}
              >
                <Item label="No Cheese" value="No Cheese"/>
                <Item label="Cheese" value="Cheese"/>
              </Picker>
            </Item>
          </Body>
        </CardItem>
      )
    }
  }

  addToCart () {
    let product = this.props.navigation.state.params.product
    product.salad = this.state.salad
    product.sauce = this.state.sauce

    if (this.props.navigation.state.params.displayBread) {
      product.bread = this.state.bread
    }
    if (this.props.navigation.state.params.displayCheese) {
      product.cheese = this.state.cheese
      if (product.cheese === 'Cheese')
        product.price += 0.20
    }
    this.props.navigation.state.params.addToCart(product)
    this.props.navigation.goBack()
  }

  displaySizeOptions (product) {
    if (this.props.navigation.state.params.displaySize) {
      return (
        <CardItem>
          <Body>
          <Item fixedLabel>
            <Label>Size Choice</Label>
            <Picker
              mode="dropdown"
              placeholder="Size Choice"
              selectedValue={this.state.size}
              onValueChange={this.setSize.bind(this)}
            >
              <Item label={product.size.small} value={product.size.small}/>
              <Item label={product.size.large} value={product.size.large}/>
            </Picker>
          </Item>
          </Body>
        </CardItem>
      )
    }
  }


  render () {
    const {state} = this.props.navigation;
    return (
      <Container>
        <Content>
          <Form>
            <Card>
              <CardItem header>
                <Text style={{fontWeight: '100', fontSize: 35, color: 'black'}}>
                  {
                    state.params.product.name
                  }
                </Text>
              </CardItem>
              {
                this.displaySizeOptions(state.params.product)
              }
              <CardItem>
                <Item fixedLabel>
                  <Label>Salad Choice</Label>
                  <Picker
                    mode="dropdown"
                    placeholder="Select Salad"
                    selectedValue={this.state.salad}
                    onValueChange={this.setSalad.bind(this)}
                  >
                    <PickerItem label="No Salad" value="No Salad" />
                    <PickerItem label="All Salad" value="All Salad" />
                    <PickerItem label="Front Four" value="Front Four" />
                  </Picker>
                </Item>
              </CardItem>
              <CardItem>
                <Item fixedLabel>
                  <Label>Sauce Choice</Label>
                  <Picker
                    mode="dropdown"
                    placeholder="Select Sauce"
                    selectedValue={this.state.sauce}
                    onValueChange={this.setSauce.bind(this)}
                  >
                    <PickerItem label="No Sauce" value="No Sauce" />
                    <PickerItem label="Chilli" value="Chilli" />
                    <PickerItem label="Garlic Mayo" value="Garlic Mayo" />
                    <PickerItem label="Chilli + Garlic" value="Chilli + Garlic" />
                    <PickerItem label="Chilli + Mayo" value="Chilli + Mayo" />
                    <PickerItem label="BBQ" value="BBQ" />
                    <PickerItem label="Ketchup" value="Ketchup" />
                    <PickerItem label="Mint" value="Mint" />
                    <PickerItem label="Burger Sauce" value="Burger Sauce" />
                  </Picker>
                </Item>
              </CardItem>
              {
                  this.checkAndDisplayBreadSelection()
              }
              {
                this.checkAndDisplayCheeseSelection()
              }
            </Card>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
          <Button full danger>
            <Text style={{color:"white", fontSize: 20, fontWeight: '300' }}>
              Cancel
            </Text>
          </Button>
          </FooterTab>
          <FooterTab>
          <Button full success onPress={() => this.addToCart()}>
            <Text style={{ color:"white", fontSize: 20, fontWeight: '300' }}>
              Add to Cart
            </Text>
          </Button>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

module.exports = Dressings
