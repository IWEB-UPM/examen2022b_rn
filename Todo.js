import {Text, Button, View } from 'react-native';

export default function Todo(props) {
  return (  
    <View>       
        <Text>Titulo: {props.item.todo}</Text>
        <Text>Completado: {'' + props.item.completed}</Text>
        {props.item.completed? null: <Button title="Hecho" onPress={() =>props.toggle(props.item)}/>}
        <Button title="Borrar" onPress={() =>props.borrar(props.item)}/>
    </View>
  )
}
