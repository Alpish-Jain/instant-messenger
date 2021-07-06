import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, View,Button,KeyboardAvoidingView,TextInput, TouchableOpacity,Modal ,SafeAreaView,FlatList,TouchableWithoutFeedback} from 'react-native';
import { Countries } from './Countries';

const AuthenticationScreen = ({navigation}) => {

    let textInput=useRef(null);
    const defaultCodeCountry="+91"
    const defaultMaskCountry="789 555 444"
    const [phoneNumber,setPhoneNumber]=useState();
    const [focusInput,setFocusInput]=useState(true);
    const [modalVisible,setModalVisible]=useState(false);
    const [dataCountries,setDataCountries]=useState(Countries);
    const [codeCountry,setCodeCountry]=useState(defaultCodeCountry);
    const [placeholder,setPlaceholder]=useState(defaultMaskCountry);

    const onShowHideModal=()=>{
        setModalVisible(!modalVisible)
    }

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

const filterCountries=(value)=>{
    if(value){
        const countryData=dataCountries.filter((obj)=>
        (obj.en.indexOf(value)>-1 || obj.dialCode.indexOf(value)>-1))
        setDataCountries(countryData)
    }else{
        setDataCountries(Countries)
    }
}
const onCountryChange=(item)=>{
    setCodeCountry(item.dialCode)
    setPlaceholder(item.mask)
    onShowHideModal()
}

let rendermodal=()=>{
    return (
        <Modal animationType="slide" transparent={false} visible={modalVisible}>
            <SafeAreaView style={{flex:1}}>
                <View style={styles.modalContainer}>
                    <View style={styles.filterInputContainer}>
                    <TextInput 
                    autoFocus={true}
                    onChangeText={filterCountries}
                    placeholder={'Filter'}
                    focusable={true}
                    style={styles.filterInputStyle}
                    />
                    </View>
                   
                    <FlatList 
                style={{flex:1}}
                data={dataCountries}
                extraData={dataCountries}
                keyExtractor={(item,index)=>index.toString()}
                renderItem={
                    ({item})=>(
                        <TouchableWithoutFeedback onPress={()=>onCountryChange(item)}>
                                <View style={styles.countryModalStyle}>
                                    <View style={styles.modalItemContainer}>
                                        <Text style={styles.modalItemName}>{item.en}</Text>
                                        <Text style={styles.modalItemDialCode}>{item.dialCode}</Text>
                                    </View>
                                </View>
                        </TouchableWithoutFeedback>
                    )
                }
                />
                </View>
                <TouchableOpacity onPress={onShowHideModal} style={styles.closeButtonStyle}>
                    <Text style={styles.closeTextStyle}>{'CLOSE'}</Text>
                </TouchableOpacity>
                
            </SafeAreaView>

        </Modal>
    );
}

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView
            keyboardVerticalOffset={50}
            behaviour={'padding'}
            style={styles.containerAvoidingView}
            >
                <Text style={styles.textTitle}>{"Please input your mobile phone number"}</Text>
                <View style={[
                    styles.containerInput,
                {
                borderBottomColor:focusInput ? '#244DB7':'#ffffff'
                }
                ]}
                >

                    <TouchableOpacity onPress={onShowHideModal}>
                    <View style={styles.openDialogView}>
                        <Text>{codeCountry+" |"}</Text>
                    </View>
                    </TouchableOpacity>
               {rendermodal()}
                    <TextInput 
                    ref={(input)=>textInput=input}
                    style={styles.phoneInputStyle}
                    placeholder={placeholder}
                    keyboardType="numeric"
                    value={phoneNumber}
                    onChangeText={onChangePhone}
                    secureTextEntry={false}
                    onFocus={onChangeFocus}
                    onBlur={onChangeBlur}
                    autoFocus={focusInput}
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
    },
    modalContainer:{
        paddingTop:15,
        paddingLeft:25,
        paddingRight:25,
        flex:1,
        backgroundColor:'white'
    },
    filterInputStyle:{
        flex:1,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#fff',
        color:'#424242'
    },
    countryModalStyle:{
        flex:1,
        borderColor:'black',
        borderTopWidth:1,
        padding:12,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    modalItemContainer:{
        flex:1,
        paddingLeft:5,
        flexDirection:'row'
    },
    modalItemName:{
        flex:1,
        fontSize:16
    },
    modalItemDialCode:{
        fontSize:16
    },
    filterInputContainer:{
        width:'100%' ,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    closeButtonStyle:{
        padding:12,
        alignItems:'center'
    },
    closeTextStyle:{
        padding:5,
        fontSize:20,
        color:'black',
        fontWeight:'bold'
    }
})
