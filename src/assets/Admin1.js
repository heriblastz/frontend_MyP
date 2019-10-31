import React, {Component} from 'react'
import {View, Text, FlatList} from 'react-native'

export default class Admin extends Component {
    state = {
        response: this.props.response
    }
    render () {
        const {response} = this.state
        return (
            <View>
                <FlatList
                    data={response}
                    renderItem={({ item }) => <Text>{item.name},{item.email}</Text>}
                    keyExtractor={({ id }, i) => id}
                />
            </View>
        )
    }
}