import React, { use, useEffect, useState } from "react";
import { View, StyleSheet, Text, ImageBackground, ActivityIndicator } from "react-native";

export default function App() {

    const [loading, setLoading] = useState(true);

    useEffect(()=> {
        setTimeout(()=> setLoading(false), 6000);
    },[]);

    if (loading){
        return(
            <View style={styles.splash}>
                <Text style={styles.splashText}>Cargando...</Text>
                <ActivityIndicator size="large" color="white"/>
            </View>
        );
    }

    return (
        <ImageBackground
            source={{ uri: 'https://th.bing.com/th/id/R.e9d3e46c222aa78665b16802e1a169d4?rik=5yY4JSU1Z6XI7A&riu=http%3a%2f%2fgalaxiamilitar.es%2fwp-content%2fuploads%2f2018%2f04%2f34_FS_activation_ceremony_150716-F-EI321-120.jpg&ehk=%2b99BWqGo6iosMAfy%2blcfKYhZjs4%2fFHIa6RyWMaFzmXU%3d&risl=&pid=ImgRaw&r=0' }}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>Bienvendio a la app</Text>
            </View>
        </ImageBackground>
    )


}

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        backgroundColor:'#2c3e50',
        alignItems:'center',
        justifyContent:'center'
    },
    splashText:{
        color: 'with',
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
        fontSize: 24
    }
}
)