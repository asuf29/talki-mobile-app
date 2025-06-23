import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import tw from 'twrnc';
import { AppStackParamList } from '../../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'Welcome'>;

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={tw`flex-1 bg-white px-6 pt-20 pb-10 justify-between`}>
      <View style={tw`items-center justify-center flex-1`}>
        <Image
          source={require('../../assets/images/welcome.gif')}
          resizeMode="contain"
          style={tw`w-40 h-40 mb-8`}
        />

        <Text style={tw`text-base text-center text-gray-600`}>
          Practice, connect, and grow your language skills with real people.
        </Text>
      </View>

      <TouchableOpacity
        style={tw`bg-black p-4 rounded-full shadow-md`}
        onPress={() => navigation.navigate('LanguageSelect')}
      >
        <Text style={tw`text-white text-center text-base font-semibold`}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}
