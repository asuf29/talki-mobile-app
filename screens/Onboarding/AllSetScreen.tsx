import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; 
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppNavigator';

export default function AllSetScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const handleStartLearning = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={tw`flex-1 bg-white px-8 pt-16 pb-12 justify-between`}>
      
      <View>
        <Text style={tw`text-2xl font-extrabold mb-2`}>All Set!</Text>
        <Text style={tw`text-sm text-gray-600 mb-4`}>
          You're all set to start your learning journey with Talki! 🚀
        </Text>
      </View>

      <TouchableOpacity
        style={tw`bg-black p-4 rounded-lg shadow-lg`}
        activeOpacity={0.8}
        onPress={handleStartLearning}
      >
        <Text style={tw`text-white text-center font-bold text-lg`}>Start Learning</Text>
      </TouchableOpacity>
    </View>
  );
}
