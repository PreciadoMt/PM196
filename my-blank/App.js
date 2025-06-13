import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const Texto = () => {
  const [contenido, setContenido] = useState("Hola Mundo");
  const actualizarTexto = () => { setContenido("sTate actualizado") };
  return (
    <Text onPress={actualizarTexto}> {contenido} </Text>
  );
}

// Main 
export default function App() {
  const [botonTexto, setBotonTexto] = useState("Presióname");

  const actualizarBoton = () => {
    setBotonTexto("Presionado");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Texto />
      <Texto />
      <Texto />

      <Button title={botonTexto} onPress={actualizarBoton}/>
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
