import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button,} from "react-native";


export default function App() {
  const [contador, setContador] = useState(0)
  const [textContador, setTextContador] = useState(0)
  
  useEffect(() => {
    if(contador > 0 && contador < 10) {
      setTextContador(contador * 2)
    }
  }, [contador])

  return (
    <View style={styles.container}>
      <Button title="Aumentar" onPress={() => setContador(contador+1)}/>
      <Text style={{fontSize: 30}}>{contador} x 2 = {textContador}</Text>
      <Button title="Zerar" onPress={() => setContador(0) + setTextContador(0)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
});
