import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase'

export default function Home() {
    const OnSignOut = () => {
        firebase.auth().signOut()

    }
    var user = firebase.auth().currentUser;
    
    return (


        <View style={styles.container}>
           
           <View >
                <Text style={styles.header}>Todo</Text>
            </View>
           
            <Text style={styles.text}>Welcome {user.email}</Text>
            <TouchableOpacity style={styles.button} onPress={() => OnSignOut()}>
                <Text style={styles.btntext}>Sign Out</Text>
            </TouchableOpacity>

        </View>

    )
}
const styles = StyleSheet.create({
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 30,
        backgroundColor: 'red',
        marginTop: 30,
        marginRight:20,
        marginLeft:20,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',

    },
    container: {
        flex: 1,

        backgroundColor: 'white',


        paddingBottom: 30,
    },
    header: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 80,
        marginBottom: 250,
        padding: 10,
        paddingTop: 38,
        backgroundColor: 'white',

        fontSize: 22
    },
    text: {
        
        marginLeft:20,
    }
})