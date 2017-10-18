import React, {Component} from 'react'
import { Text } from 'react-native'
import Header from '../../layout/Header/Header'
import {Container, Content, Form, Input, Label, Picker, Item } from 'native-base'
const PickerItem = Picker.Item

class Dressings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      salad: 'No Salad',
      sauce: 'No Sauce',
      bread: 'Pitta Bread'
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

  checkAndDisplayBreadSelection () {
    if (true) {
      return (
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
      )
    }
  }

  render () {
    return (
      <Container>
        <Header pageTitle="Options"/>
        <Content>
          <Form>
            <Form>
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
              {
                this.checkAndDisplayBreadSelection()
              }
            </Form>
          </Form>
        </Content>
      </Container>
    )
  }
}

module.exports = Dressings
