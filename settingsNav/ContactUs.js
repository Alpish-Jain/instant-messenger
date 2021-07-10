import React, { useState } from 'react'
import { Alert, TextInput } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { db } from '../firebase'


const ContactUs = () => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')

    const handleSubmit=()=>{
        db.collection('Contacts').add({
            name:name,
            email:email,
            message:message
        })
        .then(()=>{

            Alert.alert(
                "Hi! There",
                "Your query has succesfully been submitted to our team!",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        })
        .catch((error)=>{
            Alert.alert(
                "OOPS!",
                "There is an error while submitting the form!Sorry for the inconvinience!",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        })

        setName('');
        setEmail('');
        setMessage('');
       
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Name
            </Text>
            <TextInput
            placeholder="Enter Name"
            value={name}
            onChangeText={(val)=>setName(val)}
            style={styles.input}
            />
            <Text style={styles.text}>
                Email
            </Text>
            <TextInput
            value={email}
            placeholder="Enter Email"
            onChangeText={(val)=>setEmail(val)}
            style={styles.input}
            />
            <Text style={styles.text}>
                Message
            </Text>
            <TextInput
            value={message}
            placeholder="Enter your Message"
            multiline
            onChangeText={(val)=>setMessage(val)}
            style={styles.message}
            />
            <Button title="Submit" onPress={handleSubmit} style={styles.buttonStyle} />
        </View>
    )
}

export default ContactUs

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:20,
        justifyContent:'center',
            
    },
    input:{
        borderWidth:2,
        borderRadius:10,
        padding:10,
        borderColor:'grey',
        marginBottom:40
    },
    message:{
        borderWidth:2,
        borderRadius:10,
        padding:10,
        height:90,
        borderColor:'grey',
        marginBottom:40
    },
    buttonStyle:{
        marginTop:20,
        padding:20,
    },
    text:{
        marginLeft:10,
        marginBottom:5,
        fontSize:16,
        fontWeight:'bold'
    }
})
