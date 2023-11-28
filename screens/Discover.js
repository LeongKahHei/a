import { ScrollView, View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from '../theme';
import { StatusBar } from 'expo-status-bar';
import { mural, steel, gallery } from '../constants';
import Carousel from 'react-native-snap-carousel';
import ViewArt from '../components/viewArt';
import Test1 from '../components/test1';
import { BellIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import COLORS from '../constants/colors';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function Discover() {
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
              Discover page
            </Text>
          </View>
          
        </View>
        {/* search bar */}
        <View className="mx-5 shadow" style={{marginTop: height*0.06}}>
          <View className="flex-row items-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput placeholder='Search' className="p-4 flex-1 font-semibold text-gray-700" />
            <TouchableOpacity 
              className="rounded-full p-2" 
              style={{backgroundColor: themeColors.bgLight}}>
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>
        {/* categories */}
        
          
      </SafeAreaView>

      {/* coffee cards */}

      <View className="px-4  justify-between items-center">
            <Text style={{color: themeColors.text, marginTop: height*0.06, textAlign: 'center'}} className="text-4xl font-semibold">
              Mural
            </Text> 
            </View>
      <View className={`overflow-visible flex justify-center flex-1 ${ios? 'mt-10':''}`}>
        <View>
          <Carousel
            containerCustomStyle={{overflow: 'visible'}}
            data={mural}
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


      <View className="px-4  justify-between items-center">
            <Text style={{color: themeColors.text, marginTop: height*0.06, textAlign: 'center'}} className="text-4xl font-semibold">
              Steel Rod Sculptures
            </Text> 
        </View>
      <View className={`overflow-visible flex justify-center flex-1 ${ios? 'mt-10':''}`}>
        <View>
          <Carousel
            containerCustomStyle={{overflow: 'visible'}}
            data={steel}
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


      <View className="px-4  justify-between items-center">
            <Text style={{color: themeColors.text, marginTop: height*0.06, textAlign: 'center'}} className="text-4xl font-semibold">
              Gallery/Museum
            </Text> 
        </View>
      <View className={`overflow-visible flex justify-center flex-1 ${ios? 'mt-10':''}`}>
        <View>
          <Carousel
            containerCustomStyle={{overflow: 'visible'}}
            data={gallery}
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
      
      
    </ScrollView>
  )
}
