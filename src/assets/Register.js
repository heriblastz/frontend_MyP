import React, {Component} from 'react';
import {Alert,TextInput,Text,View,TouchableHighlight} from 'react-native';

export default class Register extends Component {
    state = {
        name: "",
        username: "",
        email: "",
        password: "",
    }
    registerHandler = async () => {
        console.log('\x1b[33mButton Pressed\x1b[0m');
        const {name,username,email,password} = this.state;
        try {
            let response = await fetch('http://192.168.1.23:8000/auth/register', {
                method: 'POST',
                headers: {  
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    username: username,
                    email: email,
                    password: password,
                }),
            });
            let responseJson = await response.json();
            if (responseJson.statusCode == 201) {
                console.log('\x1b[32m'+responseJson.status+'\x1b[0m');
                Alert.alert(responseJson.status,'Please login');
                this.props.navigation.navigate('Login');
            } else {
                console.log('\x1b[31m'+responseJson.message+'\x1b[0m');
                Alert.alert(responseJson.message);
            }
        } catch (err) {
            console.error(error);
        }
    }
    render () {
        return (
            <View>
                <TextInput
                    placeholder={'Name'}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInput
                    placeholder={'Username'}
                    onChangeText={username => this.setState({ username })}
                />
                <TextInput
                    placeholder={'Email'}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    placeholder={'Password'}
                    onChangeText={password => this.setState({ password })}
                    secureTextEntry
                />
                <TouchableHighlight onPress={this.registerHandler}>
                    <Text>
                        Register Now
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}