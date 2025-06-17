import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import React,{useState} from 'react';

const Texto= ({style}) => {
  const [contenido,setContenido] = useState('Hola Mundo')
  const actualizarTexto = () => {setContenido('State Modificado')}
  return (
    <Text style={[styles.text, style]} onPress={actualizarTexto}> {contenido} </Text>
  )
}


export default function App() {
const [contenido,setContenido] = useState('toca mesta')
const actualizarBoton = () => {setContenido('apachurrado')}
  return (

    <View style={styles.container}>
          <StatusBar style="auto" />
      <Texto style={styles.green}></Texto>
      <Texto style={styles.red}></Texto>
      <Texto style={styles.yellow}></Texto>
      <Button
      onPress={actualizarBoton} title={contenido} 
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center', // 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
    justifyContent: 'center',// 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end' | 'center' | 'stretch'
    flexDirection: 'column',
  },
  text: {
    color: 'blue',
    fontSize: 28,
    //width: 200,
    //height: 200,
  },

  red:{backgroundColor: 'red',},
  green:{backgroundColor: 'green',},
  yellow:{backgroundColor: 'yellow',},
});
