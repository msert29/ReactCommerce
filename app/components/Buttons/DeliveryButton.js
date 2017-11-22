import React, {Component} from 'react';
import { Button, Icon } from 'react-native-elements';
import { width } from '../../config/constants';
import PropTypes from 'prop-types';

class DeliveryButton extends Component {
  render () {
    return (
      <Button
        raised
        large
        backgroundColor="#C71585"
        textStyle={{color: 'white'}}
        disabled={!this.props.eligable}
        icon={{name: 'motorcycle'}}
        title="Delivery"
        buttonStyle={{width: width / 2 - 30}}
      />
    )
  }
}

DeliveryButton.propTypes = {
  eligable: PropTypes.bool
};

export default DeliveryButton