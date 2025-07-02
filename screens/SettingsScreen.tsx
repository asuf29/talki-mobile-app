import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function SettingsScreen() {
  return (
    <View style={tw`flex-1 justify-center items-center bg-white`}>
      <Text style={tw`text-xl font-bold`}>Settings Screen</Text>
    </View>
  );
}
