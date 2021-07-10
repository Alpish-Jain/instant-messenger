import React ,{useLayoutEffect} from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import CustomListItem from '../components/CustomListItem';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const HomeScreen = ({navigation}) => {

    useLayoutEffect(() => {
     navigation.setOptions({
            title:"Chatty",
            headerStyle:{backgroundColor:"#fff",
            elevation:0,
            shadowOpacity:0
        },
            headerTitleStyle:{color:"black"},
            headerRight:()=>(
                <View
                style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    width:80,
                    marginRight:20,
                }}
                >
                    <TouchableOpacity 
                    onPress={()=>navigation.navigate("AddChat")}
                    activeOpacity={0.5}>
                    <MaterialCommunityIcons name="message-plus" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            ),            
     });
    }, [navigation])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white'
    }
})
