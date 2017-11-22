import React, { Component } from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import { totalItemCountSelector } from '../../config/selectors';


class MenuContainer extends Component {
  render() {
    return <Menu navigation={this.props.nav} totalItems={this.props.totalItems} />;
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  totalItems: totalItemCountSelector(state)
});

export default MenuContainer = connect(mapStateToProps, null)(MenuContainer);
