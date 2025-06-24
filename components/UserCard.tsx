import React from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

type Props = {
  name: string;
  native: string;
  learning: string;
  avatar?: any; 
};

export default function UserCard({ name, native, learning, avatar }: Props) {
  return (
    <TouchableOpacity style={tw`mr-4 bg-white p-4 rounded-xl w-40 shadow-md`}>
      <Image
        source={avatar}
        style={tw`w-16 h-16 rounded-full mb-3 self-center`}
        resizeMode="cover"
      />
      <Text style={tw`text-lg font-bold text-black text-center`}>{name}</Text>
      <Text style={tw`text-sm text-gray-600 text-center mt-1`}>
        Native: {native}
      </Text>
      <Text style={tw`text-sm text-gray-600 text-center`}>
        Learning: {learning}
      </Text>
    </TouchableOpacity>
  );
}
