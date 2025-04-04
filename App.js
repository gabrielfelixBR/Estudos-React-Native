import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity,} from "react-native";
import AsyncStorange from '@react-native-async-storage/async-storage'

export default function App() {
  const [input, setInput] = useState('')
  const [nome, setNome] = useState('')

  async function gravatNome(){
    await AsyncStorange.setItem('@nome', input)
    setNome(input)
    setInput('')
    console.log(input)
  }

  useEffect(() => {
    async function loadData(){
      await AsyncStorange.getItem('@nome').then((value) => {
        setNome(value)
      })
    }     
    loadData()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(item) => setInput(item)}
        />
        <TouchableOpacity style={styles.button} onPress={gravatNome}>
          <Text style={styles.textInput}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textNome}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 10
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: 10,
    fontSize: 18
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
  textInput: {
    color: '#fff',
    fontSize: 34
  },
  textNome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
