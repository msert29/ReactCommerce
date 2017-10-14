import React, {Component} from 'react'
import {View} from 'react-native'

class CommonModal extends Component {
  render() {
    const { renderContent } = this.props.navigation.state.params || {}
    return (
      <View style={{ width: '100%', height: '100%' }}>
        {
          renderContent()
        }
      </View>
    )
  }
}

module.exports = CommonModal