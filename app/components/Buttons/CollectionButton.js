import React, {Component} from 'react';
import { Button, Icon } from 'react-native-elements';
import { width } from '../../config/constants';
import PropTypes from 'prop-types';


export default class CollectionButton extends Component {
  render () {
    return (
      <Button
        raised
        large
        backgroundColor="green"
        enabled
        disabled={!this.props.eligable}
        icon={{name: 'home'}}
        title="Collection"
        buttonStyle={{width: width / 2 - 30}}
      />
    )
  }
};

CollectionButton.propTypes = {
  eligable: PropTypes.bool
}

