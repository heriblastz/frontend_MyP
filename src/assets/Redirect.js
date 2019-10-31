import React, { Component } from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import TokenStore from '../secure/tokenStore'
import Admin from './Admin1'

export default class AdminPage extends Component {
    state = {
        loading: true,
        type: ""    
    }
    componentDidMount = async () => {
        try {
            let response = await fetch('http://192.168.1.23:8000/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': TokenStore.getToken()
                },
            });
            let responseJson = await response.json();
            console.log(responseJson.type)
            this.setState({
                loading: false,
                type: responseJson.type,
                response: responseJson
            })

        } catch (err) {
            console.error(err);
        }
        if (this.state.type == "ADMIN") {
            this.props.navigation.navigate('Admin')
        }
    }
    render() {
            return (
                <ActivityIndicator />
            )
    }
}