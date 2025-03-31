import { View, Text } from 'react-native';

export default function User(props) {
 return (
   <View>
    <Text>Nome: {props.nome}</Text>
    <Text>Usuário: {props.usuario}</Text>
   </View>
  );
}