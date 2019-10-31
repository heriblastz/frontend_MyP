import React, { Component } from 'react'
import { View, Text, FlatList, ActivityIndicator, Image, TouchableHighlight } from 'react-native'
import TokenStore from '../secure/tokenStore'
import { style } from '../styles/adminStyle'
import Delete from '../handler/Delete'

export default class Admin extends Component {
    state = {
        loading: true,
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
            this.setState({
                loading: false,
                response: responseJson
            })

        } catch (err) {
            console.error(err);
        }
    }
    renderItem(data) {
        return (
            <View style={style.mainCon}>
                <View style={style.container}>
                    <Image style={style.userPic} source={require('../img/userPic.png')} />
                    <View style={style.userCon}>
                        <Text style={style.name}>{data.item.name}</Text>
                        <Text style={style.username}>{data.item.username}</Text>
                        <Text style={style.email}>{data.item.email}</Text>
                    </View>
                </View>
                <View style={style.break} />
            </View>
        )
    }
    render() {
        if (this.state.loading) {
            return (
                <ActivityIndicator />
            )
        }
        return (
            <View>
                <FlatList
                    data={this.state.response.users}
                    renderItem={this.renderItem}
                    keyExtractor={({ id }, i) => id}
                />
            </View>
        )

    }
}