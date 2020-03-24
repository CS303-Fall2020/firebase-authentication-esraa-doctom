import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import * as firebase from "firebase";
export default function ForgetPassword({ navigation }) {
    const [email, setEmail] = useState('')
    const [reset, setReset] = useState(false)
    const OnRetrivePassword = () => {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                setReset(true)

            }, (error) => {

                if (email == '') {
                    Alert.alert('ERROR', 'invalid credential!', [
                        { text: 'DISSMIS' }
                    ]);
                } else {
                    if (error.message == 'The email address is badly formatted.') {
                        Alert.alert('auth/invalid-email', error.message,
                            [{ text: 'Dismiss' }]);
                    } else if (error.message == 'There is no user record corresponding to this identifier. The user may have been deleted.') {
                        Alert.alert('auth/user-not-found', error.message,
                            [{ text: 'Dismiss' }]);
                    } else {
                        Alert.alert('auth/network-request-failed', error.message, [
                            { text: 'DISMISS' }
                        ])
                    }
                }

            })
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText}>Forget Password</Text>
            <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} value={email} onChangeText={(text) => setEmail(text)} />
            {reset? <Text style={styles.reset}>Email was sent successfully, please follow instructions to reset your password</Text>:console.log()}
            <TouchableOpacity style={styles.loginButton} onPress={() => OnRetrivePassword()}>
                <Text style={styles.btntxt2}>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton2} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.btntxt}>Sign up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginButton3} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btntxt}>Login</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    containerView: {
        flex: 1,
      },
      loginScreenContainer: {
        flex: 1,
        
      },
      logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
      },
      loginFormView: {
        flex: 1
      },
      loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 5,
        marginBottom: 5,
      
      },
      btntxt: {
        
        color: 'white',
        marginLeft:150,
      },
      btntxt2: {
        
        color: 'white',
        marginLeft:130,
      },
      loginButton: {
        backgroundColor: '#3897f1',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
        marginRight:20,
        marginLeft:20,
        justifyContent: 'center'
      },
      loginButton2: {
        backgroundColor: 'black',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
        marginRight:20,
        marginLeft:20,
        justifyContent: 'center'
      }
      ,
      loginButton3: {
        backgroundColor: 'red',
        borderRadius: 5,
        height: 45,
        marginTop: 10,
        marginRight:20,
        marginLeft:20,
        justifyContent: 'center'
      },
      reset: {
        paddingLeft: 25,
      }
});