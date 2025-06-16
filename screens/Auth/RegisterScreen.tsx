import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import tw from 'twrnc';
import type { AuthStackParamList } from '../../navigation/AuthNavigator';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

export default function RegisterScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={tw`flex-1 p-6 justify-center`}>
      <Text style={tw`text-3xl font-bold mb-8 text-center`}>Create an Account</Text>
      <TextInput placeholder="Full Name" style={tw`border border-gray-300 p-4 rounded mb-4`} />
      <TextInput placeholder="Email" style={tw`border border-gray-300 p-4 rounded mb-4`} keyboardType="email-address" />
      <TextInput placeholder="Password" style={tw`border border-gray-300 p-4 rounded mb-4`} secureTextEntry />
      <TouchableOpacity style={tw`bg-black p-4 rounded mb-4`}>
        <Text style={tw`text-white text-center`}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={tw`text-center text-gray-600`}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

