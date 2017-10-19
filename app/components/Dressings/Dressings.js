import React, {Component} from 'react'
import { Text } from 'react-native'
import Header from '../../layout/Header/Header'
import {Container, Content, Form, Input, Label, Picker, Item, Card, CardItem, Body, Left, Button } from 'native-base'
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
      bread: 'Pitta Bread',
      cheese: 'No Cheese',
    }
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
              <Label>Cheese option</Label>
              <Picker
                mode="dropdown"
                placeholder="Select Cheese"
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
        <Button full success>
          <Text>Add to Cart</Text>
        </Button>
      </Container>
    )
  }
}

module.exports = Dressings
