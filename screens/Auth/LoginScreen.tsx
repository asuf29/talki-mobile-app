import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import tw from 'twrnc';
import type { AuthStackParamList } from '../../navigation/AuthNavigator';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Login'>;

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'App' }],
    });
  };

  return (
    <View style={tw`flex-1 p-6 justify-center`}>
      <Text style={tw`text-3xl font-bold mb-8 text-center`}>Welcome Back</Text>
      <TextInput
        placeholder="Email"
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={tw`border border-gray-300 p-4 rounded mb-4`}
        secureTextEntry
      />
      <TouchableOpacity onPress={handleLogin} style={tw`bg-black p-4 rounded mb-4`}>
        <Text style={tw`text-white text-center`}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={tw`text-center text-gray-600`}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}
