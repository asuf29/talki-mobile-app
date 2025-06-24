import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

type Props = {
  name: string;
  native: string;
  learning: string;
};

export default function UserCard({ name, native, learning }: Props) {
  return (
    <TouchableOpacity style={tw`mr-4 bg-gray-100 p-4 rounded-xl w-40 shadow-sm`}>
      <Text style={tw`text-lg font-bold text-black mb-1`}>{name}</Text>
      <Text style={tw`text-sm text-gray-600`}>Native: {native}</Text>
      <Text style={tw`text-sm text-gray-600`}>Learning: {learning}</Text>
    </TouchableOpacity>
  );
}
