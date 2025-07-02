import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';

export default function ProfileScreen() {
  return (
    <ScrollView style={tw`flex-1 bg-white px-8 pt-16`}>
      <View style={tw`items-center mb-6`}>
        <Image
          source={require('../assets/images/boy.png')}
          style={tw`w-24 h-24 rounded-full`}
        />
        <Text style={tw`text-xl font-bold mt-4`}>John Doe</Text>
        <Text style={tw`text-gray-500 text-sm`}>johndoe@example.com</Text>
        <Text style={tw`text-gray-600 mt-2`}>Learning: English</Text>
      </View>

      <View style={tw`mt-6`}>
        <TouchableOpacity style={tw`py-4 border-b border-gray-200`}>
          <Text style={tw`text-base text-gray-800`}>Edit Target Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`py-4 border-b border-gray-200`}>
          <Text style={tw`text-base text-gray-800`}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`py-4`}>
          <Text style={tw`text-base text-red-500 font-semibold`}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
