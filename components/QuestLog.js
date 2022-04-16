import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function QuestLog({ Q, questHandler }) {
    return (
        <TouchableOpacity onPress={() => questHandler(Q.key)}>
            <Text style={styles.quest}>{Q.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    quest: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10
    }
})

export default QuestLog