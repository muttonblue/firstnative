import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Button, View} from 'react-native';
import MultiSelectExample from "./MultiSelectExample"
import TestCon from "./TestCon";
import TestPureCon from "./TestPureCon";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev men' +
            'u'
});

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            wo: "",
            token: 0
        }
        // this.say = this.say.bind(this);
    }
    componentWillUpdate() {
        console.log("App : componentWillUpdate")
    }
    componentWillUpdate() {
        console.log("App : componentWillUpdate")
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("App : shouldComponentUpdate", this.state, nextState)
        let shouldUpdate = this.state.token !== nextState.token;
        return shouldUpdate;
    }

    say = (param) => () => {
        console.log(">>>", this.state.token);
        this.setState({
            token: ++this.state.token,
            wo: param + Math.random()
        });
    } 

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Button
                        onPress={this.say("x")}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"/>
                </View>
                <View>
                    <TestCon token={this.state.token}/>
                </View>
                <View>
                    <TestCon token={this.state.token}/>
                </View>
                <View>
                    <Text>
                        {this.state.token}
                        - {this.state.wo}
                    </Text>
                </View>

                {/* <MultiSelectExample/> */}
                {/* <Text style={styles.welcome}>
                    Welcome to React Native! iRambo hello React Native. Android Success ffffsdf
                </Text> */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
