import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import User from "./Components/User";

function App(){
  return(
    <View style={styles.containerApp}>
      <Text style={styles.title}>Seja Bem Vindo</Text>
      <User nome="Gabriel Felix" cargo="Programador Front-End"/>
    </View>
  )
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '500'
  },
})

export default App