import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Discover from '../screens/Discover';
import Profile from '../screens/Profile';
import Login from '../screens/Login';
import Welcome from '../screens/Welcome';
import Signup from '../screens/Signup';


import { Dimensions, LogBox, Platform, Text, View } from 'react-native';
import ArtScreen from '../screens/ArtScreen';
import { themeColors } from '../theme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {UserIcon as UserOutline, MagnifyingGlassIcon as MagOutline,HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import {UserIcon as UserSolid,MagnifyingGlassIcon as MagSolid,HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid} from 'react-native-heroicons/solid';
//npx expo start --tunnel

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle: {backgroundColor: 'white'}
      }}>
      
        <Stack.Screen name="Welcome" options={{headerShown: false}} component={Welcome} />
        <Stack.Screen name="Signup" options={{headerShown: false}} component={Signup} />
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeTabs} />
        <Stack.Screen name="Art" options={{headerShown: false}} component={ArtScreen} />
        <Stack.Screen name="Discover" options={{headerShown: false}} component={HomeTabs} />
        <Stack.Screen name="Profile" options={{headerShown: false}} component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

function HomeTabs(){
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 0,
          height: 75,
          alignItems: 'center',
          
          borderRadius: 0,
          marginHorizontal: 1,
          backgroundColor: themeColors.bgLight,

        },
        tabBarItemStyle: {
          marginTop: ios? 30: 0,
          
        }
      })}
      
      >
      
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="discover" component={Discover} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  )
}



const menuIcons = (route, focused)=> {
  let icon;
  

  if (route.name === 'home') {
    icon =  focused? <HomeSolid size="30" color={themeColors.bgLight} /> : <HomeOutline size="30" strokeWidth={2} color="black" />
  } else if (route.name === 'discover') {
    icon =  focused? <MagSolid size="30" color={themeColors.bgLight} /> : <MagOutline size="30" strokeWidth={2} color="black" />
  }else if(route.name==='profile'){
    icon =  focused? <UserSolid size="30" color={themeColors.bgLight} /> : <UserOutline size="30" strokeWidth={2} color="black" />
  }


  
  let buttonClass = focused? "bg-white": "";
  return (
    <View className={"flex items-center rounded-full p-3 shadow " + buttonClass}>
      {icon}
      <Text style={{
                            fontSize: 15,
                            
                        }}>{route.name}</Text>
    </View>

  )
}