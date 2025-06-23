//Zona de importaciones
import { StatusBar } from 'expo-status-bar';    
import { StyleSheet, Text, View, Button, Alert, Platform } from 'react-native';
import React,{useState} from 'react';

const showAlert =(message) =>{
  if(Platform.OS === 'web') {
    window.alert(message);
  } else {
    Alert.alert('Alert', message);
  }
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native Buttons Test</Text>

      <View style={styles.section}>
        <Text style={styles.description}>Boton basico</Text>
        <Button title='Presioname' onPress={() => showAlert('Boton presionado!')}/>
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Boton de color</Text>
        <Button
          title='Presioname'
          color='purple'
          onPress={() => showAlert('Boton de color presionado!')}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.description}>Boton deshabilitado</Text>
        <Button
          title='Deshabilitado'
          disabled
          onPress={() => showAlert('wtff?')}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.description}> Dos botones: </Text>
          <view style={styles.buttonRow}>
            <Button
              title='Izquierda'
              onPress={() => showAlert('Boton izquierdo presionado!')}
            />
            <View style={styles.buttonSpacer}/>
            <Button
              title='Derecha'
              onPress={() => showAlert('Boton Derecho presionado!')}
            />
          </view>
      </View>
    </View> 
  );
}

// Zona de estilos
// Estilos para la vista principal de la aplicacion
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#000000',
  },
  section: {
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonSpacer: {
    width: 10,
  },
});