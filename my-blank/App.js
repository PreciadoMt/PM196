import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';



const Texto= () => {
  const { children } = props;
  return (
    <Text> {children} </Text>
  )
}


export default function App() {
  return (

    <View style={styles.container}>
          <StatusBar style="auto" />
      <Text >"Hola"</Text>
      <Text >"Mundo"</Text>
      <Text >React Native</Text>

      <Button title='Presioname'></Button>
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
