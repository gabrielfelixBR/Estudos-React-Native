import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function App(){
  const [num, setNum] = useState(1)

  function add() {
    if(num != 10) {
      setNum(num => num + 1)
    } 
  }

  function remove(){
    if(num != 1) {
      setNum(num => num - 1)
    } 
  }

  return(
    <View style={styles.containerApp}>
      <Text style={styles.title}>Pessoas no restaurante:</Text>
      <View style={styles.cont}>
        <Text style={styles.contNum}>{num}</Text>
      </View>

      {
        num != 10 ?
        <></>
        : 
        <View style={styles.limited}>
          <Text style={styles.textLimited}>Restaurante está no seu limite de pessoas.</Text>
        </View>
      }
      
      <View style={styles.contanerButton}>

        <TouchableOpacity style={num != 10 ? styles.add : [styles.add, styles.buttonLimited]} onPress={add}>
          <Text style={styles.textButton} >Adicionar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={num != 1 ? styles.remove : [styles.remove, styles.buttonLimited]} onPress={remove}>
          <Text style={styles.textButton}>Remover</Text>
        </TouchableOpacity>
        
      </View>
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
  cont: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    width: 50,
    height: 55,
    borderRadius: 10,
    margin: 20
  },
  contNum: {
    color: '#fff',
    fontSize: 30
  },
  limited: {
    backgroundColor: '#F6B335',
    padding: 5,
    borderRadius: 5
  },
  textLimited: {
    fontSize: 14,
    fontWeight: '500'
  },
  contanerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20
  },
  add: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A7BF2',
    width: 100,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10
  },
  remove: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0A7BF2',
    width: 100,
    height: 50,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10
  },
  buttonLimited: {
    opacity: 0.5
  },
  textButton: {
    color: '#fff',
    fontSize: 20
  },
})

export default App