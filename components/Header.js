import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native';

import React from 'react'

function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Quest Log</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 25,
        backgroundColor: "coral"
    },
    title: {
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
})

export default Header