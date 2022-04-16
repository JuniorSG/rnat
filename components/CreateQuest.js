import { useState } from 'react';
import { View, StyleSheet, Button, TextInput, } from 'react-native';

const Createquest = ({ submitHandler }) => {

    const [text, setText] = useState("")

    const changeHandler = (e) => {
        setText(e)
    }

    const resetHandler = () => {
        console.log("Falta Resetear el valor del input linea 18 de CreateQuest.js");
    }

    return (
        <View>
            <TextInput
                id="inputText"
                style={styles.input}
                placeholder='New Quest'
                // Is the same, automatically the function catch the event value
                // onChangeText={(e) => changeHandler(e)}
                onChangeText={changeHandler}
            />

            <Button onPress={() => submitHandler(text) & resetHandler()} title="Accept" color="coral" />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#bbb"
    }
})

export default Createquest;
