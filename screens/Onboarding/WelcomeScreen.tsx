import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import tw from 'twrnc';
import { AppStackParamList } from '../../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'Welcome'>;

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={tw`flex-1 p-6 bg-white`}>
      <Text style={tw`text-2xl font-semibold text-center mb-6 mt-8`}>Welcome to Talki! 🎉</Text>

      <TouchableOpacity style={tw`bg-black p-4 rounded-xl w-full`} onPress={() => navigation.navigate('LanguageSelect')}>
        <Text style={tw`text-white text-center text-base font-medium`}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
