import React from 'react'
import { StyleSheet, Text, View,FlatList, TouchableOpacity, SafeAreaView } from 'react-native'
import {ListItem,Avatar} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
const list=[
    {
        id:'1',
        title:'user',
        icon:'person-outline'
    },
    {
        id:'2',
        title:'privacy policy',
        icon:'shield-checkmark-outline'
    },
    {
        id:'3',
        title:'Contact Us',
        icon:'call-outline'
    },
    {
        id:'4',
        title:'About us',
        icon:'people-outline'
    },

]

const MoreScreen = ({navigation}) => {

    const onPressNav=(val)=>{
            if(val==='1')
                navigation.navigate('Profile')
            else if(val==='2')
                navigation.navigate('Privacy Policy')
            else if(val==='3')
                navigation.navigate('Contact Us')
            else if(val==='4')
                navigation.navigate('About Us')
    }


    return (
        <SafeAreaView style={styles.container}>
            <ListItem >
                        <Avatar source={{
                            uri:'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                        }} />
                        <ListItem.Content>
                            <ListItem.Title>Chris Jackson</ListItem.Title>
                            <ListItem.Subtitle>+62 1309-1710-1920</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                        </ListItem>

            <FlatList 
            data={list}
            keyExtractor={item=>item.id}
            renderItem={({item})=>{
                return(
                <TouchableOpacity activeOpacity={0.5} onPress={()=>onPressNav(item.id) }>
                    <ListItem >
                        <Ionicons name={item.icon} size={30} color="black"/>
                        <ListItem.Content>
                            <ListItem.Title>{item.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron />
                        </ListItem>
                </TouchableOpacity>
                );
            }}
            />
        </SafeAreaView>
    )
}

export default MoreScreen

const styles = StyleSheet.create({
    container:{}
})
