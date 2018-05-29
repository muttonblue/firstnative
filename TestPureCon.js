import React, { PureComponent } from 'react'
import PropTypes from 'prop-types';
import {
    Text,
    Button,
    View
  } from 'react-native';

  export default class TestPureCon extends PureComponent {

    render() {
        return (<Text>{this.props.token} </Text>)
    } 
    
}