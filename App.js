import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

export default function App() {
  const [status, setStatus] = useState(false)

  return (
    <View style={styles.container}>
      <Switch
        value={status}
        onValueChange={(valorSelecionado) => setStatus(valorSelecionado)}
      />

      <Text>{String(status)}</Text>
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
