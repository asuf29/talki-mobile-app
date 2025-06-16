import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import tw from 'twrnc';

type NavigationProp = NativeStackNavigationProp<AppStackParamList, 'LanguageSelect'>;

type Language = {
  name: string;
  code: string;
  flag: string;
};

const languages: Language[] = [
  { name: 'English', code: 'en', flag: '🇬🇧' },
  { name: 'Japanese', code: 'ja', flag: '🇯🇵' },
  { name: 'Russian', code: 'ru', flag: '🇷🇺' },
  { name: 'French', code: 'fr', flag: '🇫🇷' },
  { name: 'Spanish', code: 'es', flag: '🇪🇸' },
];

export default function LanguageSelectScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={tw`flex-1 p-6 bg-white mt-10`}>
      <Text style={tw`text-2xl font-semibold mb-2`}>Which Language Do You Want to Master? 🌐</Text>
      <Text style={tw`text-sm text-gray-600 mb-4`}>
        Pick one language that you'd like to learn first.
      </Text>

      <TextInput
        style={tw`border border-gray-300 p-3 rounded-xl mb-4`}
        placeholder="Search"
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={filteredLanguages}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex-row items-center p-4 mb-2 rounded-xl border ${
              selected === item.code ? 'border-purple-500 bg-purple-100' : 'border-gray-200'
            }`}
            onPress={() => setSelected(item.code)}
          >
            <Text style={tw`text-xl mr-3`}>{item.flag}</Text>
            <Text style={tw`text-base flex-1`}>{item.name}</Text>
            {selected === item.code && <Text style={tw`text-purple-600 font-bold`}>✓</Text>}
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={tw`mt-4 bg-black p-4 rounded-xl ${!selected ? 'opacity-50' : ''}`}
        onPress={() => selected && navigation.navigate('LearningGoal')}
        disabled={!selected}
      >
        <Text style={tw`text-white text-center font-medium text-base`}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
