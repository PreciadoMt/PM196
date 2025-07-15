import { View, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="home-outline" size={28} color="red" />
        <Text style={styles.title}>Bienvenido a la pantalla principal</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'row', // Cambiado de 'column' a 'row'
    alignItems: 'center', // Mantiene la alineación vertical
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10, // Ahora tiene sentido como espacio horizontal
    color: 'red',
  },
});