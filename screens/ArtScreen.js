import { ScrollView, View, Text,TextInput, TouchableOpacity, Image, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { ShoppingBag } from 'react-native-feather';
import { MapPinIcon } from 'react-native-heroicons/solid'
import { Rating } from 'react-native-ratings';
import COLORS from '../constants/colors';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';

//pic,name, artist, intro, map, rating, comment

export default function ArtScreen(props) {
  const item = props.route.params;
  const [size, setSize] = useState('small');
  const navigation = useNavigation();
  return (
    <ScrollView className="flex-1">
      <StatusBar style="light" />
      <Image 
        source={require('../assets/images/bgart3.jpg')} 
        style={{height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50}} 
        className="w-full absolute" />
        
      <SafeAreaView className="space-y-4 flex-1">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity className=" rounded-full " onPress={()=> navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>

          <TouchableOpacity className=" rounded-full border-2 border-white p-2">
            <HeartIcon size="24" color="white" />
            
          </TouchableOpacity>
        </View>
        <View 
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: {width: 0, height: 30},
            shadowOpacity: 0.9,
          }}
          className="flex-row justify-center">
          <Image source={item.image} className="h-60 w-60" style={{marginTop: ios? 0:40}} />
        </View>
        <View 
          style={{backgroundColor: themeColors.bgLight}} 
          className="flex-row justify-center items-center mx-4 rounded-3xl p-1 px-2 space-x-1 opacity-90 w-16">
          <StarIcon size="15" color="white" />
          <Text className="text-base font-semibold text-white">{item.stars}</Text>
        </View>
        <View className="px-4 flex-row justify-between items-center">
            <Text style={{color: themeColors.text}} className="text-4xl font-semibold">
              {item.name}
            </Text>
            <Text style={{color: themeColors.text}} className="text-lg font-semibold">
              Author: {item.nameA}
            </Text>
            
        </View>

        <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text}} className="text-lg font-bold">About</Text>
          <Text className="text-gray-600">
            {item.desc}
          </Text>
        </View>

        <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text,marginTop: height*0.04}} className="text-lg font-bold">Location</Text>
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text className="font-semibold text-base">
            {item.address}
            </Text>
          </View>
          
        </View>

        <Image 
        source={item.location}
        style={{
          marginTop: height*0.10,
          
          backgroundColor: themeColors.bgDark, 
          height: ios? height*0.2 : height*0.4, 
          width: width*1,
        }} 
        />

        
      </SafeAreaView>


      <View className={`space-y-3 ${ios? 'mb-6': 'mb-3'}`}>
          

          {/* rating */}
          <View className="px-4 space-y-2">
          <Text style={{color: themeColors.text, textAlign: 'center',marginTop: height*0.06}} className="text-lg font-bold">Rate this art by dragging on the stars!</Text>
        </View>

          <View>
          <Rating type='star' rating count={5} imageSize={40}
          style={{paddingVertical:10}}/>
        </View>
 


        {/* comment */}
        <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View style={{ marginBottom: 12 }}>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22
                    }}>
                        <TextInput
                            placeholder='Enter comment'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                width: "100%"
                            }}
                        />
                    </View>
                </View>
                </View>

          
          <View className="flex-row justify-between px-4">

          
            
            <TouchableOpacity 
              style={{backgroundColor: themeColors.bgLight}} 
              className="p-4 rounded-full flex-1 ml-4">
              <Text className="text-center text-white text-base font-semibold">Post comment</Text>
            </TouchableOpacity>
          </View>
        </View>

        
      
    </ScrollView>
  )
}