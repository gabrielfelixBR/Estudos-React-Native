import React, { useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput, Switch, ScrollView, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker'
import Slider from "@react-native-community/slider";

export default function App() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [dados, setDados] = useState([])
  const [sexo, setSexo] = useState(null)
  const [valor, setValor] = useState(50)
  const [estudante, setEstudante] = useState(false)
  const pickerRef = useRef()

  const [optSexo, setOptSexto] = useState([
    {key: 1, sexo: 'Masculino'},
    {key: 2, sexo: 'Feminino'}
  ])

  function cadastro(){
    if(sexo !== null) {
      setDados((prevDados) => [
        ...prevDados,  // Mantém os itens existentes no array
        {
          nome: nome,
          idade: idade,
          sexo: optSexo[sexo].sexo,
          limite: valor.toFixed(2),
          estudante: estudante
        }
      ]);
    }else{
      alert("Existe campo sem cadastro!!")
      setDados('')
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <Text style={styles.title}>Banco Felix</Text>
        <Text style={styles.subTitle}>Dados Cadastrais:</Text>
      </View>

      <View >
        <Text style={styles.titleInput}>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome:"
          onChangeText={(e) => setNome(e)}
        />
      </View>
        
      <View>
        <Text style={styles.titleInput}>Idade:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade:"
          onChangeText={(e) => setIdade(e)}
        />
      </View>

      <View>
        <Picker
          ref={pickerRef}
          selectedValue={sexo}
          onValueChange={(item) => setSexo(item)}
          style={styles.picker}
        >
          <Picker.Item label="Selecione o sexo:" value="0"/>
          {optSexo.map((v, k) => (
            <Picker.Item label={v.sexo} value={k} key={v.key}/>
          ))}
        </Picker>
      </View>

      <View style={styles.containerSlider}>
        <Slider 
          minimumValue={0}
          maximumValue={100}
          value={valor}
          onValueChange={(item) => setValor(item)}
        />
        <Text style={styles.textSlider}>R${valor.toFixed(2)}</Text>
      </View>

      <View>
        <Text>Estudante:</Text>
        <Switch 
          value={estudante}
          onValueChange={(item) => setEstudante(item)}
        />
      </View>
    
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.button} title="Enviar" onPress={cadastro}> 
          <Text style={styles.textButton}>Enviar</Text>
        </TouchableOpacity>

        {dados.length > 0 && (
          <View style={styles.containerDados}>  
            <Text style={styles.textTitleDados}>Cadastro Realizado:</Text>
            <>
              <Text style={styles.textDados}>
                Nome: {dados[dados.length - 1].nome}
              </Text>
              <Text style={styles.textDados}>
                Idade: {dados[dados.length - 1].idade}
              </Text>
              <Text style={styles.textDados}>
                Sexo: {dados[dados.length - 1].sexo}
              </Text>
              <Text style={styles.textDados}>
              Limite: {dados[dados.length - 1].limite}
              </Text>
              <Text style={styles.textDados}>
                Estudante: {dados[dados.length - 1].estudante ? "Sim" : "Não"}
              </Text>
            </>
          </View>
      )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal: 20
  },
  title: {
    fontSize: 30
  },
  subTitle: {
    fontSize: 18,
    fontStyle: 'italic'
  },
  titleInput: {
    marginVertical: 10,
  },  
  input: {
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 18,
  },
  picker: {
    width: "100%",
    borderRadius: 8,
    marginBottom: 0,
  },
  containerSlider: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textSlider: {
    marginVertical: 30,
    fontSize: 30,
    fontWeight: '600'
  },
  containerButton: {
    
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: "#000",
  },
  textButton: {
    fontSize: 22,
    textAlign: 'center',
    paddingVertical: 5,
    color: '#fff'
  },
  textDados: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: '600'
  },
  containerScrow:{
    marginBottom: 50
  },
  containerDados: {
    marginTop: 50
  },
  textTitleDados: {
    fontSize: 30,
    fontWeight: '600'
  }
});
