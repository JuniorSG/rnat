import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
})

export default Home;
