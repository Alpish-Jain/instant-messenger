import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import  Ionicons  from 'react-native-vector-icons/Ionicons';

import { Text,Dimensions } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ContactScreen from './screens/ContactScreen';
import MoreScreen from './screens/MoreScreen';
import AddChatScreen from './screens/AddChatScreen';


const fullScreenWidth=Dimensions.get('window').width;

const Stack=createStackNavigator();

const HomeStack=()=>{
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                elevation:0,
                shadowOpacity:0,
            },
            cardStyle: { backgroundColor: '#fff' }
        }}
        >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name="AddChat" component={AddChatScreen} />
        </Stack.Navigator>
    );
}

const ContactStack=()=>{
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                elevation:0,
                shadowOpacity:0,
            },
            cardStyle: { backgroundColor: '#fff' }
        }}
        >
            <Stack.Screen name='Contacts' component={ContactScreen} />
        </Stack.Navigator>
    );
}

const MoreStack=()=>{
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle:{
                elevation:0,
                shadowOpacity:0,
            },
            cardStyle: { backgroundColor: '#fff' }
        }}
        >
            <Stack.Screen name='More' component={MoreScreen} />
        </Stack.Navigator>
    );
}

const Tab=createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator
           screenOptions={({route})=>({
                    headerTitle:()=><Text>Header</Text>,
                   
                    tabBarIcon:({focused,color,size,padding})=>{
                        let iconName;
                        if(route.name==='Home'){
                            iconName=focused?'home':'home-outline'
                        }else if(route.name==='Contacts'){
                            iconName=focused?'call':'call-outline'
                        }
                        else if(route.name==='More'){
                            iconName=focused?'ellipsis-horizontal-sharp':'ellipsis-horizontal-outline'
                        }
                        return <Ionicons name={iconName} size={size} color={color} />;
                    }
            })}
            tabBarOptions={{
                activeTintColor:'lightseagreen',
                inactiveTintColor:'grey',
                labelStyle:{fontSize:16},
                style:{width:fullScreenWidth},
            }}
            >
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Contacts" component={ContactStack} />
                <Tab.Screen name="More" component={MoreStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}