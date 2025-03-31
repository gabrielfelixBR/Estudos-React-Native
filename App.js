import React, { useRef } from "react";
import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [carroSelecionado, setCarroSelecionado] = useState(null);
  const pickerRef = useRef();

  const [carros, setCarros] = useState([
    { key: "0", nome: "golf 1.6", valor: "62.000" },
    { key: "1", nome: "savero 1.0", valor: "29.300" },
    { key: "2", nome: "gol 1.0", valor: "25.200" },
    { key: "3", nome: "bmw 120i", valor: "225.200" },
    { key: "4", nome: "uno com escada em cima", valor: "30.000" },
  ]);

  return (
    <View style={styles.container}>
      <Picker
        ref={pickerRef}
        selectedValue={carroSelecionado}
        onValueChange={(itemValue) => setCarroSelecionado(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione um carro" value="0" />
        {carros.map((v, k) => (
          <Picker.Item label={v.nome} value={k} key={v.key} />
        ))}
      </Picker>

      <View style={styles.infoContainer}>
        {carroSelecionado !== null && (
          <>
            <Text style={styles.carros}>
              carro: {carros[carroSelecionado].nome}
            </Text>
            <Text style={styles.carros}>
              R$ {Number(carros[carroSelecionado].valor).toFixed(2)}
            </Text>
          </>
        )}
      </View>
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
  picker: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 20,
  },
  infoContainer: {
    alignItems: "center",
  },
  carros: {
    fontSize: 22,
    textAlign: "center",
    marginVertical: 4,
  },
});
