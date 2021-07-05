import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View,Button,KeyboardAvoidingView,TextInput, TouchableOpacity } from 'react-native';


const AuthenticationScreen = ({navigation}) => {

    let textInput=useRef(null);
    const [phoneNumber,setPhoneNumber]=useState();
    const [focusInput,setFocusInput]=useState(true);

const onChangePhone =(number)=>{
setPhoneNumber(number)
}
const onPressContinue=()=>{
if(phoneNumber){
    navigation.navigate('InputOTP')
}
}

const onChangeFocus=()=>{
    setFocusInput(true)
}
const onChangeBlur=()=>{
    setFocusInput(false);
}
useEffect(()=>{
    textInput.focus()
},[])

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
            keyboardVerticalOffset={50}
            behaviour={'padding'}
            style={styles.containerAvoidingView}
            >
                <Text style={styles.textTitle}>{"Please input your mobile phone number"}</Text>
                <View style={styles.containerInput}>

                <View style={styles.openDialogView}>
                        <Text>{"+91"}</Text>
                    </View>
                    <TextInput 
                    ref={(input)=>textInput=input}
                    style={styles.phoneInputStyle}
                    placeholder="Phone Number"
                    keyboardType="numeric"
                    value={phoneNumber}
                    onChangeText={onChangePhone}
                    secureTextEntry={false}
                    onFocus={onChangeFocus}
                    onBlur={onChangeBlur}
                    />

                </View>
                <View style={styles.viewBottom}>
                    <TouchableOpacity onPress={onPressContinue}>
                        <View style={[
                            styles.btnContinue,
                            {
                                backgroundColor:phoneNumber?'#244CE0':'grey'
                            }
                            ]}>
                            <Text style={styles.textContinue}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    )
}

export default AuthenticationScreen;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    containerAvoidingView:{
        flex:1,
        alignItems:'center',
        padding:10
    },
    textTitle:{
        marginBottom:50,
        marginTop:50,
        fontSize:16
    },
    containerInput:{
        flexDirection:'row',
        paddingHorizontal:12,
        borderRadius:10,
        backgroundColor:'white',
        alignItems:'center',
        borderBottomWidth:1.5
    },
    openDialogView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    phoneInputStyle:{
        marginLeft:5,
        flex:1,
        height:50
    },
    viewBottom:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:50,
        alignItems:'center'
    },
    btnContinue:{
        width:350,
        height:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
       
    },
    textContinue:{
        color:'#ffffff',
        alignItems:'center'
    }
})
