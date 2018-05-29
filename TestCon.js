import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {
    Text,
    Button,
    View
  } from 'react-native';

 export default class TestCon extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log("TestCon : shouldComponentUpdate")
        let shouldUpdate = this.props.token !== nextProps.token;
        return shouldUpdate;
      }

    render() {
        return (<Text>{this.props.token}</Text>)
    } 
}