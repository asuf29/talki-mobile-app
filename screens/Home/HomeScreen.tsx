import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; 
import tw from 'twrnc';

export default function HomeScreen() {
  return (
    <View style={tw`flex-1 p-6 mt-10 bg-white`}>
      <Text style={tw`text-2xl font-bold mb-4`}>Home Screen</Text>
      <Text style={tw`text-gray-700 mb-8`}>
        Welcome to the Talki app! This is your home screen.
      </Text>
      <TouchableOpacity style={tw`bg-black p-4 rounded-lg`}>
        <Text style={tw`text-white text-center font-bold text-base`}>Start Learning</Text>
      </TouchableOpacity>
    </View>
  );
}
