import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BackHandler, ScrollView, StyleSheet, Text, View, Button } from 'react-native';

class Login extends Component {

    render() {
        return (
            <View>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home', { name: 'Home' })}
                /> 
                
            </View>
        )
    }
}

export default Login