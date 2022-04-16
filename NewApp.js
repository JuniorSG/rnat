import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Home from './screens/Home';

const Newapp = () => {
    return (
        <View style={styles.container}>
            <Home />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#b5a58a",
        alignItems: "center",
        justifyContent: "center",
    },
})

export default Newapp;
