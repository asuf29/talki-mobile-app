import React from 'react';
import { View, Text } from 'react-native'; 
import tw from 'twrnc';

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 p-6 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4 mt-8`}>Home Screen</Text>
      <Text style={tw`text-gray-700 mb-8`}>
        Welcome to the Talki app! This is your home screen.
      </Text>
    </View>
  );
}
