import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import tw from 'twrnc';
import type { AuthStackParamList } from '../../navigation/AuthNavigator';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Register'>;

export default function RegisterScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleRegister = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'App' }],
    });
  };

  return (
    <View style={tw`flex-1 bg-white px-6 justify-center`}>
      <Image
        source={require('../../assets/images/logo.png')}
        resizeMode="contain"
        style={tw`w-24 h-24 mb-6 self-center`}
      />
      <Text style={tw`text-3xl font-bold text-center mb-2 text-black`}>
        Create Account
      </Text>
      <Text style={tw`text-base text-center text-gray-500 mb-8`}>
        Join Talki and start learning together!
      </Text>

      <View style={tw`bg-gray-100 p-4 rounded-full mb-4`}>
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#888"
          style={tw`text-base text-black`}
        />
      </View>

      <View style={tw`bg-gray-100 p-4 rounded-full mb-4`}>
        <TextInput
          placeholder="Last Name"
          placeholderTextColor="#888"
          style={tw`text-base text-black`}
        />
      </View>

      <View style={tw`bg-gray-100 p-4 rounded-full mb-4`}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          style={tw`text-base text-black`}
        />
      </View>

      <View style={tw`bg-gray-100 p-4 rounded-full mb-6`}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          style={tw`text-base text-black`}
        />
      </View>

      <View style={tw`bg-gray-100 p-4 rounded-full mb-6`}>
        <TextInput
          placeholder="Password Confirmation"
          placeholderTextColor="#888"
          secureTextEntry
          style={tw`text-base text-black`}
        />
      </View>

      <TouchableOpacity
        onPress={handleRegister}
        style={tw`bg-black p-4 rounded-full mb-6 shadow-md`}
      >
        <Text style={tw`text-white text-center text-base font-semibold`}>
          Register
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={tw`text-center text-gray-600`}>
          Already have an account? <Text style={tw`text-blue-600 font-semibold`}>Log In</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
