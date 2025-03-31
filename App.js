import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Slider from '@react-native-community/slider'

export default function App() {
  const [valor, setValor] = useState(50)

  return (
    <View style={styles.container}>
      <Slider
        minimumValue={0}
        maximumValue={100}
        value={valor}
        onValueChange={(valorSeleconado) => setValor(valorSeleconado)}
      />

      <Text>{valor}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
});
