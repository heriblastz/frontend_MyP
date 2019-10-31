import React, {Component} from 'react';
import {View,Text,TouchableHighlight} from 'react-native';

export default class Landing extends Component {
    static navigationOptions = {
        header : null
    }
    buttonLogin = () => {
        this.props.navigation.navigate('Login')
    }
    buttonRegister = () => {
        this.props.navigation.navigate('Register')
    }
    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.buttonLogin}>
                    <Text>
                        Click here to Login
                    </Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.buttonRegister}>
                    <Text>
                        Click here to Register
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}