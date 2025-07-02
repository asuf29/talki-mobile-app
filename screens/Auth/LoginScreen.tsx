import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
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
    <View style={tw`flex-1 bg-white px-6 justify-center`}>
      <Image
        source={require('../../assets/images/lets-talk.gif')}
        resizeMode="contain"
        style={tw`w-28 h-28 mb-4 self-center`}
      />

      <Text style={tw`text-3xl font-bold text-center mb-2 text-black`}>
        Welcome to, <Text style={tw`italic text-[#00c7ee]`}>Talki</Text>
      </Text>
      <Text style={tw`text-base text-center text-gray-500 mb-8`}>
        Let's improve your language skills together!
      </Text>

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

      <TouchableOpacity
        onPress={handleLogin}
        style={tw`bg-black p-4 rounded-full mb-6 shadow-md`}
      >
        <Text style={tw`text-white text-center text-base font-semibold`}>
          Log In
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={tw`text-center text-gray-600`}>
          Don't have an account? <Text style={tw`text-[#00c7ee] font-semibold`}>Register</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
