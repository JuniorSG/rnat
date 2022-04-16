
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Createquest from './components/CreateQuest';
import Header from './components/Header';
import QuestLog from './components/QuestLog';

// Chapter 1.6: Icons and Flexbox
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import Newapp from './NewApp';

export default function App() {
  // Chapter 1.1: States
  const [person, setPerson] = useState({
    rol: "mid", class: "Platinium V"
  })
  const [name, setName] = useState("Noisy")
  // Handlers
  const clickHandler = () => {
    if (name === "Noisy") {
      setName("Tailvan")
      setPerson({ rol: "top", class: "Challenger" })
    } else {
      setName("Noisy")
      setPerson({ rol: "mid", class: "Platinium V" })
    }
  }

  // Chapter 1.2: Text Input
  const [sword, setSword] = useState({
    name: "FireSword", tier: 1, atk: 25, type: "Fire"
  })

  // Chapter 1.3: Lists and ScrollView 
  const [gems, setGems] = useState([
    { gem: "Time", key: "green", id: "1" },
    { gem: "Reality", key: "red", id: "2" },
    { gem: "Mind", key: "yellow", id: "3" },
    { gem: "Space", key: "blue", id: "4" },
    { gem: "Soul", key: "gold", id: "5" },
    { gem: "Power", key: "purple", id: "6" }
  ])

  // Chapter 1.4: FlatList and Touchable Components
  const pressHandler = (id) => {
    console.log(id);
    setGems((prevGems) => {
      return prevGems.filter(currentGem => currentGem.id != id)
    })
  }

  // Chapter 1.5: Create APP
  const [quests, setQuests] = useState([
    { title: "Your first archievement", reward: "3000", lvl: "1", key: "1" },
    { title: "On the way", reward: "1500", lvl: "15", key: "2" },
    { title: "Good or Evil", reward: "5000", lvl: "30", key: "3" }
  ])

  const questHandler = (key) => {
    setQuests((prevQuest) => {
      return prevQuest.filter(Q => Q.key != key)
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setQuests((prevQuest) => {
        return [
          { title: text, key: Math.random().toString() },
          ...prevQuest
        ]
      })
    } else {
      const Test = Number.NEGATIVE_INFINITY * Number.NEGATIVE_INFINITY
      console.log(Test);
      Alert.alert("OOPS!", "To Create a Quest must have more than 3 chars", [
        { text: "Ok", onPress: () => console.log("Closed") }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      console.log("Dismissed Keyboard")
    }}>

      < ScrollView >
        <View style={styles.container}>
          {/* Chapter 1.1: States */}
          <Text style={styles.titleChapters}>Chapter 1: States</Text>
          <Text>My name is {name}</Text>
          <Text> His rol is {person.rol} at {person.class} </Text>
          <View style={styles.buttonContainer}>
            <Button title="update state" onPress={clickHandler} />
          </View>

          {/* Chapter 1.2: Text Input */}
          <Text style={styles.titleChapters}>Chapter 1.2: Text Input</Text>
          <Text>Sword Description</Text>
          <Text>Name: {sword.name} Tier: {sword.tier} Atk: {sword.atk} Type: {sword.type} </Text>
          <Text>Change Name</Text>
          <TextInput style={styles.input} placeholder="e.g. Default Sword" onChangeText={(e) => setSword({ name: e, tier: sword.tier, atk: sword.atk, type: sword.type })} />
          <Text>Change Type</Text>
          <TextInput style={styles.input} placeholder="e.g. Default Type" onChangeText={(e) => setSword({ name: sword.name, tier: sword.tier, atk: sword.atk, type: e })} />
          <Text>Change ATK</Text>
          <TextInput style={styles.input} keyboardType="numeric" placeholder="e.g. Default ATK" onChangeText={(e) => setSword({ name: sword.name, tier: sword.tier, atk: e, type: sword.type })} />

          {/* Chapter 1.3: Lists and ScrollView */}
          <Text style={styles.titleChapters}>Chapter 1.3: Lists and ScrollView</Text>
          <View style={styles.container3} >
            {/* <ScrollView> */}
            {gems.map((currentMap) => {
              return (
                <View key={currentMap.key}>
                  <Text style={styles.gems}>{currentMap.gem}</Text>
                </View>
              )
            })}
            {/* 
            - Can also been simplify >

            {gems.map(currentMap => (
                <View key={currentMap.key}>
                  <Text style={styles.gems}>{currentMap.gem}</Text>
                </View>
              )
            )}
*/}
            {/* </ScrollView> */}
          </View>
          {/* Chapter 1.4: FlatList and Touchable Components */}
          <Text style={styles.titleChapters}>Chapter 1.4: FlatList and Touchable Components</Text>
          <View style={styles.container3} >
            {/* 2 or more FlatList on the same component will break the App */}
            <FlatList
              data={gems}
              numColumns={2}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.flatList} onPress={() => pressHandler(item.id)}>
                  <Text>{item.gem}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
          {/* Chapter 1.5: Create APP */}
          <Text style={styles.titleChapters}>Chapter 1.5: Create APP</Text>
          <View style={styles.root}>
            {/* HEADER */}
            <Header />
            <View style={styles.body}>
              <Createquest submitHandler={submitHandler} />
              <View style={styles.list}>
                {/* <FlatList
                data={quests}
                renderItem={({ item }) => (
                  <Text>{item.title}</Text>
                )}
              /> */}
                {quests.map(currentQuest => (
                  <View key={currentQuest.key}>
                    <QuestLog Q={currentQuest} questHandler={questHandler} />
                  </View>
                ))}
              </View>
            </View>
          </View>
          {/* Chapter 1.6: Icons and Flexbox */}
          <Text style={styles.titleChapters}>Chapter 1.6: Icons and Flexbox</Text>
          <View style={styles.icon}>
            <AntDesign name="banckward" size={24} color="black" />
            <AntDesign name="caretleft" size={24} color="#636363" />
            <MaterialIcons name="360" size={28} color="#00e5ff" />
            <AntDesign name="caretright" size={24} color="#636363" />
            <AntDesign name="forward" size={24} color="black" />
          </View>
          {/* Chapter 2.1: Starting New APP */}
          <Text style={styles.titleChapters}>Chapter 2.1: Starting New APP</Text>
        </View>
        <Newapp />
      </ScrollView >

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  // Chapter 1.1: States
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  titleChapters: {
    margin: 30,
    fontWeight: "bold",
    backgroundColor: "rgba(10, 10, 10, 0.2)",
    width: "100%",
    height: 22,
    textAlign: "center",
  },

  // Chapter 1.2: Text Input
  input: {
    borderWidth: 1,
    borderColor: "rgba(10, 10, 10, 0.2)",
    paddingLeft: 10,
    margin: 10,
    width: 200,
  },

  // Chapter 1.3: Lists and ScrollView
  container3: {
    width: "100%",
    flex: 1,
    backgroundColor: "#e8e6d8"
  },
  gems: {
    width: "97.5%",
    margin: 5,
    padding: 20,
    backgroundColor: "#8ee6c4",
    fontSize: 24
  },

  // Chapter 1.4: FlatList and Touchable Components
  flatList: {
    width: "47.5%",
    margin: 5,
    padding: 20,
    backgroundColor: "#fade64",
    fontSize: 24
  },

  // Chapter 1.5: Create APP
  root: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff"
  },
  body: {
    padding: 40
  },
  list: {
    marginTop: 20,
  },

  // Chapter 1.6: Icons and Flexbox
  icon: {
    flexDirection: "row"
  }

});
