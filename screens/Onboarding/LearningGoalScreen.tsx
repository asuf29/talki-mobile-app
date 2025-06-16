import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import tw from 'twrnc';

type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'LearningGoal'>;

const options = [
  { label: '5 minutes/day', value: 5 },
  { label: '10 minutes/day', value: 10 },
  { label: '20 minutes/day', value: 20 },
  { label: '30 minutes/day', value: 30 },
  { label: 'Custom', value: -1 }, 
];

export default function LearningGoalScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <View style={tw`flex-1 p-6 mt-10 bg-white`}>
      <Text style={tw`text-2xl font-semibold mb-2`}>Your Daily Learning Goal 📈</Text>
      <Text style={tw`text-sm text-gray-600 mb-4`}>
        How much time can you spend learning per day?
      </Text>

      <FlatList
        data={options}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`p-4 mb-2 rounded-xl border ${
              selected === item.value ? 'border-purple-500 bg-purple-100' : 'border-gray-200'
            }`}
            onPress={() => setSelected(item.value)}
          >
            <Text style={tw`text-base`}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={tw`mt-4 bg-black p-4 rounded-xl ${!selected ? 'opacity-50' : ''}`}
        onPress={() => selected && navigation.navigate('AllSet')}
        disabled={!selected}
      >
        <Text style={tw`text-white text-center font-medium text-base`}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
