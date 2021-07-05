import React,{useState} from 'react'
import { StyleSheet, Text, View,KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { Button,Input,Image } from 'react-native-elements';

const LoginScreen = ({navigation}) => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const signIn=()=>{

    }
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
            <Image 
           source={{
               uri:"https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_messenger-128.png",
           
            }}
            style={styles.img}

            />
            <View style={styles.inputContainer}>
                <Input placeholder="Email"
                 autoFocus 
                 type="Email"
                  value={email}
                    onChangeText={(text)=>setEmail(text)}
                 />
                <Input placeholder="Password"
                 secureTextEntry 
                 type="password"
                value={password}
                onChangeText={(text)=>setPassword(text)}
                />
                <Button containerStyle={styles.button} onPress={signIn} title="Login" />
                <Button onPress={()=>navigation.navigate("Register")} containerStyle={styles.button} type="outline" title="Register" />
                <View style={{height:100}} />
            </View>
        </KeyboardAvoidingView>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
    },
    img:{
        width:180,
        height:180,
        marginBottom:30,
    },
    inputContainer:{
        width:200,
    },
    button:{
        width:200,
        marginTop:10,
    },

})
