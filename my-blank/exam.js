import React, { useState, useCallback } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
  SafeAreaView,
  Switch,
  Keyboard,
  Dimensions,
} from 'react-native';

// --- Constantes ---
const API_KEY = '99d2c5b5'; // <-- IMPORTANTE: Reemplaza esto con tu API Key de OMDb
const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=99d2c5b5`;
const { width } = Dimensions.get('window');

// --- Componente de Tarjeta de Película ---
// Un componente separado para mostrar cada película en la lista.
const MovieCard = ({ movie }) => (
  <View style={styles.cardContainer}>
    <Image
      style={styles.posterImage}
      source={{ uri: movie.Poster !== 'N/A' ? movie.Poster : 'https://placehold.co/100x150/2d3748/ffffff?text=No+Image' }}
      resizeMode="cover"
    />
    <View style={styles.cardDetails}>
      <Text style={styles.cardTitle} numberOfLines={2}>{movie.Title}</Text>
      <Text style={styles.cardInfo}>Año: {movie.Year}</Text>
      <Text style={styles.cardInfo}>Rating (IMDb): {movie.imdbRating || 'N/A'}</Text>
    </View>
  </View>
);

// --- Componente Principal de la App ---
export default function App() {
  // --- Estados ---
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isExactSearch, setIsExactSearch] = useState(false);

  // --- Función de Búsqueda ---
  // useCallback para evitar recreaciones innecesarias de la función.
  const searchMovies = useCallback(async () => {
    if (!query) {
      setError('Por favor, ingresa el nombre de una película.');
      setMovies([]);
      return;
    }

    Keyboard.dismiss(); // Oculta el teclado al iniciar la búsqueda.
    setIsLoading(true);
    setError(null);
    setMovies([]);

    // El parámetro de búsqueda cambia según el tipo de búsqueda (exacta o aproximada).
    const searchParameter = isExactSearch ? 't' : 's';
    const url = `${API_URL}&${searchParameter}=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === 'True') {
        // La búsqueda exacta (t) devuelve un solo objeto, la aproximada (s) un array.
        // Normalizamos el resultado a un array para que FlatList siempre funcione igual.
        const results = isExactSearch ? [data] : data.Search;
        setMovies(results);
      } else {
        setError(data.Error || 'No se encontraron resultados.');
        setMovies([]);
      }
    } catch (e) {
      console.error(e);
      setError('Ocurrió un error al conectar con el servidor. Inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  }, [query, isExactSearch]); // Dependencias de la función

  // --- Función para renderizar el contenido principal ---
  const renderContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" color="#00ff99" style={styles.indicator} />;
    }

    if (error) {
      return <Text style={styles.messageText}>{error}</Text>;
    }

    if (movies.length > 0) {
      return (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieCard movie={item} />}
          keyExtractor={(item) => item.imdbID + Math.random()} // Clave única para cada elemento
          contentContainerStyle={styles.listContainer}
        />
      );
    }

    return <Text style={styles.messageText}>Ingresa un término de búsqueda para comenzar.</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Buscador de Películas</Text>
      </View>

      <View style={styles.searchSection}>
        <TextInput
          style={styles.input}
          placeholder="Ej: Batman, Toy Story, Interstellar..."
          placeholderTextColor="#666"
          value={query}
          onChangeText={setQuery}
          onSubmitEditing={searchMovies} // Permite buscar con la tecla "Enter" del teclado.
        />
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Búsqueda Aproximada</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#00ff99' }}
            thumbColor={isExactSearch ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => setIsExactSearch(previousState => !previousState)}
            value={isExactSearch}
          />
          <Text style={styles.switchLabel}>Búsqueda Exacta</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={searchMovies} disabled={isLoading}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultsSection}>
        {renderContent()}
      </View>
    </SafeAreaView>
  );
}

// --- Estilos ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212', // Fondo oscuro para un look de cine
  },
  header: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Avenir-Heavy', // Fuente moderna (requiere configuración en el proyecto)
  },
  searchSection: {
    padding: 20,
  },
  input: {
    backgroundColor: '#222',
    color: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#444',
    marginBottom: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    color: '#ccc',
    fontSize: 14,
    marginHorizontal: 10,
  },
  button: {
    backgroundColor: '#00ff99', // Color de acento vibrante
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: "#00ff99",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonText: {
    color: '#121212',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultsSection: {
    flex: 1,
    paddingHorizontal: 10,
  },
  indicator: {
    marginTop: 50,
  },
  messageText: {
    color: '#999',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  // Estilos de la tarjeta de película
  cardContainer: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    flexDirection: 'row',
    marginBottom: 15,
    overflow: 'hidden', // Asegura que la imagen no se salga del borde redondeado
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  posterImage: {
    width: 100,
    height: 150,
  },
  cardDetails: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardInfo: {
    color: '#bbb',
    fontSize: 14,
    marginBottom: 4,
  },
});

