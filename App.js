import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { useState, useEffect } from "react";
import Todo from "./Todo";
import Formulario from "./Formulario";

const DATOS = [
  {"todo":"COMPRAR PAN","completed":true},
  {"todo":"COMPRAR CEBOLLAS","completed":false},
  {"todo":"HACER LA COMIDA","completed":false},
  {"todo":"ECHAR LA SIESTA","completed":false}];

export default function App() {


  const [miLista, setMiLista] = useState(DATOS);

  function toggle(item){

    const newMyList = [...miLista];
    const index = newMyList.indexOf(item);
    if (index > -1) {
      newMyList[index].completed = !newMyList[index].completed;
    }
    setMiLista(newMyList);
  }

  function borrar(item){
    const newMyList = [...miLista];
    //no se puede llamar a este método con index, 
    //porque en el return tenemos dos listas resultado de un filter (ver que aparecen dos map y por lo tanto hay dos arrays), 
    //el index 0 está dos veces por ejemplo, una en la lista de cosas por hacer y otra en la de cosas hechas
    //se podría haber hecho dos estados distintos y dos métodos borrar o hay múltiples maneras de hacerlo
    const index = newMyList.indexOf(item);
    if (index > -1) {
      newMyList.splice(index, 1); 
    }
    setMiLista(newMyList);
  }

  function crear(text, completed){
    let newMyList;
    if(text==="REINICIAR"){
      newMyList = [...DATOS];
    } else {
      newMyList = [...miLista];
      newMyList.push({todo: text, completed: completed});
    }    
    setMiLista(newMyList);
  }

  const renderItem = ({item, index}) => {

    console.log(item, index);

    return (
      <Todo item={item} index={index} toggle={toggle} borrar={borrar}/>
    )
  }
  

  return (
    <View style={styles.container}>
      <Formulario crear={crear}/>
      <Text>LISTA COSAS POR HACER</Text>
      <FlatList data={miLista.filter(item=>!item.completed)} renderItem={renderItem} />
      <Text>LISTA COSAS HECHAS</Text>
      <FlatList data={miLista.filter(item=>item.completed)} renderItem={renderItem} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
