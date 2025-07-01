import React, { useEffect, useState } from "react";
import {View, StyleSheet, Text, ImageBackground, ActivityIndicator, SafeAreaView, Platform, TextInput, Button, Alert} from "react-native";

export default function App() {

    const [loading, setLoading] = useState(true);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telefono, setTelefono] = useState("");

    // Mostrar pantalla de carga por 6 segundos
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    // Mostrar pantalla de carga si loading = true
    if (loading) {
        return (
            <View style={styles.splash}>
                <Text style={styles.splashText}>Cargando...</Text>
                <ActivityIndicator size="large" color="white" />
            </View>
        );
    }

    // Función para mostrar alertas de validación o éxito
    const mostrarAlerta = () => {
        if (!nombre || !email || !password) {
            if (Platform.OS === 'web') {
                window.alert("Por favor, completa todos los campos.");
            } else {
                Alert.alert(
                    "Alerta",
                    "Por favor, completa todos los campos.",
                    [{ text: "OK" }]
                );
            }
        } else {
            if (Platform.OS === 'web') {
                window.alert(`Registro exitoso\nNombre: ${nombre}\nEmail: ${email}\nContraseña: ${password}\nTeléfono: ${telefono}`);
                limpiarFormulario();
            } else {
                Alert.alert(
                    "Registro exitoso",
                    `Nombre: ${nombre}\nEmail: ${email}`,
                    [{ text: "OK", onPress: () => limpiarFormulario() }]
                );
            }
        }
    };

    const limpiarFormulario = () => {
        setNombre("");
        setEmail("");
        setPassword("");
        setTelefono("");
    };

    // Pantalla principal de la app
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={{
                    uri: 'https://th.bing.com/th/id/R.e9d3e46c222aa78665b16802e1a169d4?rik=5yY4JSU1Z6XI7A&riu=http%3a%2f%2fgalaxiamilitar.es%2fwp-content%2fuploads%2f2018%2f04%2f34_FS_activation_ceremony_150716-F-EI321-120.jpg&ehk=%2b99BWqGo6iosMAfy%2blcfKYhZjs4%2fFHIa6RyWMaFzmXU%3d&risl=&pid=ImgRaw&r=0'
                }}
                style={styles.background}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <Text style={styles.text}>Bienvenido a la app</Text>
                </View>
            </ImageBackground>

            <View style={styles.formulario}>
                <Text style={styles.titulo}>Registro de Usuario</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nombre Completo *"
                    value={nombre}
                    onChangeText={setNombre}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Email *"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Contraseña *"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TextInput
                    style={styles.input}
                    placeholder="Teléfono (opcional)"
                    value={telefono}
                    onChangeText={setTelefono}
                    keyboardType="phone-pad"
                />

                <Button title="Registrarse" onPress={mostrarAlerta} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "transparent"
    },
    splash: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: 'center',
        justifyContent: 'center'
    },
    splashText: {
        color: 'white',
        fontSize: 28,
        marginBottom: 20
    },
    background: {
        flex: 1,
        justifyContent: 'center'
    },
    overlay: {
        backgroundColor: "rgba(0,0,0,0.5)",
        padding: 20,
        borderRadius: 10,
        alignSelf: 'center'
    },
    text: {
        color: 'white',
        fontSize: 24,
        textAlign: "center"
    },
    formulario: {
        backgroundColor: "transparent", // antes: rgba(0, 0, 0, 0) o un color sólido
        padding: 20,
        borderRadius: 10,
        marginTop: 20
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        height: 49,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: "white"
    }
});
