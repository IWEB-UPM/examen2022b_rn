import { useState } from "react";
import { Text, View, Button, TextInput } from 'react-native';

export default function Formulario(props) {
  const [texto, setTexto] = useState("");
  const [completado, setCompletado] = useState(false);

	return (
    <View>
			<Text>Título</Text>
			<TextInput placeholder="Añade un texto" value={texto} onChangeText={setTexto}/>
      <Button title="Añadir" onPress={() =>props.crear(texto, false)}/>
    </View>
    )
}