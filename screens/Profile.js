import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from '../theme';
import { StatusBar } from 'expo-status-bar';
import { categories, coffeeItems, favorite } from '../constants';
import Carousel from 'react-native-snap-carousel';
import ViewArt from '../components/viewArt';
import Test1 from '../components/test1';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import COLORS from '../constants/colors';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function Profile() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <ScrollView className="flex-1 relative bg-white">
      <StatusBar />

      <Image 
        source={require('../assets/images/bgart3.png')} 
        style={{height: height*2}} 
        className="w-full absolute -top-5 opacity-40" />
      <SafeAreaView className="space-y-4 flex-1">
      <View className="mx-4 flex-row justify-between items-center">

          
          <View className="flex-row items-center space-x-2">
            
            <Text className="font-semibold text-base text-2xl">
              Profile page
            </Text>
          </View>
          
        </View>


      
        
        <View 
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOffset: {width: 0, height: 30},
            shadowOpacity: 0.9,
          }}
          className="flex-row justify-center">
          <Image source={require('../assets/images/avatar.png')} className="h-60 w-60" style={{marginTop: ios? 0:40}} />
          
        </View>
        
        <View className="px-4 flex-row justify-between items-center">
            <Text style={{color: themeColors.text, textAlign:'center'}} className="text-4xl font-semibold">
              Leong
            </Text>
          
            
        </View>

        <View className="px-4 space-y-2">
          
        <Text style={{color: themeColors.text}} className="text-lg font-bold">Email: xxx@gmail.com</Text>
        <Text style={{color: themeColors.text}} className="text-lg font-bold">Phone Number: 012-3456789</Text>      
        </View>
        <View className="flex-row justify-between px-4">
            
            <TouchableOpacity 
              style={{backgroundColor: themeColors.bgGreen, marginRight: width*0.6}} 
              className="p-4 rounded-full flex-1 ">
              <Text className="text-center text-white text-base font-semibold">Edit Account details</Text>
            </TouchableOpacity>
          </View>

        

        

        
      </SafeAreaView>

      {/* coffee cards */}

      


      <View className="px-4 flex-row justify-between items-center">
            <Text style={{color: themeColors.text, marginTop: height*0.06, textAlign: 'center'}} className="text-4xl font-semibold">
              Favorited arts
            </Text> 
        </View>
      <View className={`overflow-visible flex justify-center flex-1 ${ios? 'mt-10':''}`}>
        <View>
          <Carousel
            containerCustomStyle={{overflow: 'visible'}}
            data={favorite}
            renderItem={({item})=> <ViewArt item={item} />}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width*0.63}
            slideStyle={{display: 'flex', alignItems: 'center'}}
          />
        </View>
        
      </View>
      
      


      

      <View className={`space-y-3 ${ios? 'mb-6': 'mb-3'}`}>
          <View className="px-4 flex-row justify-between items-center">
            <Text style={{color: themeColors.text, marginTop: height*0.06, textAlign: 'center'}} className="text-4xl font-semibold">
              Any questions for us?
            </Text> 
        </View>
        {/* comment */}
        <View style={{ flex: 1, marginHorizontal: 22 }}>
            <View style={{ marginBottom: 12 }}>

                    <View style={{
                      flex: 1,
                        width: "100%",
                        height: 150,
                        borderColor: COLORS.black,
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",

                        paddingLeft: 22,
                        
                    }}>
                    
                        <TextInput
                            placeholder='Enter feedback'
                            placeholderTextColor={COLORS.black}
                            keyboardType='email-address'
                            style={{
                                
                                width: "100%",

                            }}
                            
                        />
                    </View>
                </View>
                </View>

          
          <View className="flex-row justify-between px-4">

          
            
          <TouchableOpacity 
              style={{backgroundColor: themeColors.bgGreen, marginRight: width*0.6}} 
              className="p-4 rounded-full flex-1 ">
              <Text className="text-center text-white text-base font-semibold">Submit</Text>
            </TouchableOpacity>
          
          </View>
        </View>
    </ScrollView>
  )
}
