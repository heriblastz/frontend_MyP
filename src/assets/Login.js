import React, { Component } from 'react';
import { View, Text, TouchableHighlight, TextInput, Alert } from 'react-native';
import TokenStore from '../secure/tokenStore'

export default class Login extends Component {
    state = {
        email: "",
        password: "",
    }
    loginHandler = async () => {
        console.log('\x1b[33mButton Pressed\x1b[0m');
        const {email,password} = this.state;
        try {
            let response = await fetch('http://192.168.1.23:8000/auth/login', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            let responseJson = await response.json();
            if (responseJson.auth == true) {
                console.log('Login Success');
                TokenStore.updateToken(responseJson.accessToken)
                alert(TokenStore.getToken())
                this.props.navigation.navigate('Redirect')
            }
        } catch (err) {
            console.error(err);
        }
    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder={'Email'}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    placeholder={'Password'}
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry
                />
                <TouchableHighlight onPress={this.loginHandler}>
                    <Text>
                        Login Now
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}