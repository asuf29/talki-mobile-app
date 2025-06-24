import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

type Props = {
  name: string;
};

export default function GreetingHeader({ name }: Props) {
  return (
    <View style={tw`mb-4`}>
      <Text style={tw`text-xl font-bold text-black`}>Welcome back, {name} 👋</Text>
      <Text style={tw`text-sm text-gray-500`}>Let’s keep your language streak alive!</Text>
    </View>
  );
}
