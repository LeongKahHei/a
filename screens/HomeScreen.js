import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from '../theme';
import { StatusBar } from 'expo-status-bar';
import {  art } from '../constants';
import Carousel from 'react-native-snap-carousel';
import ViewArt from '../components/viewArt';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import { AlignRight } from 'react-native-feather';
import Test1 from '../components/test1';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <ScrollView className="flex-1 relative bg-white">
      <StatusBar />

      <Image 
        source={require('../assets/images/bgart3.png')} 
        style={{height: height*2}} 
        className="w-full absolute -top-5 opacity-40" />
      <SafeAreaView className={ios? '-mb-8': ''}>
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center">
          
          
          <View className="flex-row items-center space-x-2">
            
            <Text className="font-semibold text-base text-2xl">
              Home page
            </Text>
          </View>
          
        </View>
        
          
      </SafeAreaView>

      {/* coffee cards */}
      <Image 
        source={require('../assets/images/bgart2.png')} 
        style={{height: height*0.25,marginTop: height*0.08}} 
        className="w-full absolute -top-5 " />
      <View className="px-4 space-y-2">
      
          <Text style={{color: themeColors.text,fontSize:40, textAlign: 'center',marginTop: height*0.09}} className="text-4l font-bold">Welcome to Penang Art Gallery</Text>
          <Text style={{color: themeColors.text, textAlign: 'center',marginTop: height*0.06,marginBottom: height*0.12}} className="text-lg font-bold">Start exploring beautiful arts now!</Text>
        </View>


        <View className="px-4 space-y-2">
          
          <Text style={{color: themeColors.text, fontSize:25,textAlign: 'center', marginTop: height*0.03}} className="text-3l font-bold">Highest rated Arts</Text>
        </View>
      <View className={`overflow-visible flex justify-center flex-1 ${ios? 'mt-10':''}`}>
        <View>
          <Carousel
            containerCustomStyle={{overflow: 'visible'}}
            data={art}
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
      

      <View className="px-4 space-y-2">
          
          <Text style={{color: themeColors.text, fontSize:25,textAlign: 'center', marginTop: height*0.12}} className="text-lg font-bold">User comments</Text>
        </View>
      
    <View className="mx-4 flex-row  items-center">
      <Image 
        source={require('../assets/art/3.jpg')} 
        style={{
          marginTop: height*0.06,
          marginRight: width*0.03,
          borderRadius: 40, 
          backgroundColor: themeColors.bgDark, 
          height: ios? height*0.2 : height*0.3, 
          width: width*0.45,
        }} 
         />
         <View className="flex-row items-center space-x-2">

            <Text style={{color: themeColors.text, fontSize:20,textAlign: 'left', marginRight: width*0.5}} className="text-lg font-bold">
            "Another wonderful example of street artwork in George Town.
There are many other pieces of art close to it (such as the "butterfly cat"), so you should have a walk and take a look."
            </Text>
          </View>
    </View>

    <View className="mx-4 flex-row  items-center">
          

          <Image 
        source={require('../assets/art/1.jpg')} 
        style={{
          marginTop: height*0.06,
          marginRight: width*0.03,
          borderRadius: 40, 
          backgroundColor: themeColors.bgDark, 
          height: ios? height*0.2 : height*0.3, 
          width: width*0.45,
        }} 
         />
          <View className="flex-row items-center space-x-2">
        <Text style={{color: themeColors.text, fontSize:20,textAlign: 'left', marginRight: width*0.5}} className="text-lg font-bold">
              "A local attractions that a must-see and visit in Penang. 
              If you like to play seek and find, then you should be here. "
            </Text>
          </View>
      </View>

      
    </ScrollView>
  )
}
