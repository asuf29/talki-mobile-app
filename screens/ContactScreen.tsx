import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AppStackParamList } from '../navigation/AppNavigator';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

const dummyUsers = [
  { id: '1', name: 'Alice', targetLanguage: 'English', avatar: require('../assets/images/girl.png') },
  { id: '2', name: 'Bob', targetLanguage: 'Spanish', avatar: require('../assets/images/boy.png') },
  { id: '3', name: 'Charlie', targetLanguage: 'French', avatar: require('../assets/images/boy.png') },
  { id: '4', name: 'Daisy', targetLanguage: 'English', avatar: require('../assets/images/girl.png') },
];

const languages = ['All', 'English', 'Spanish', 'French'];

export default function ContactScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const navigation = useNavigation<NavigationProp>();

  const filteredUsers = dummyUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLanguage = selectedLanguage === 'All' || user.targetLanguage === selectedLanguage;
    return matchesSearch && matchesLanguage;
  });

  const handleMessage = (name: string) => {
    navigation.navigate('ChatRoom', { title: name });
  };

  return (
    <View style={tw`flex-1 bg-white px-8 pt-16`}>
      <Text style={tw`text-xl font-bold mb-4`}>Find Language Buddies</Text>

      <TextInput
        style={tw`border border-gray-300 rounded-full px-4 py-2 mb-4`}
        placeholder="Search by name..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={tw`flex-row flex-wrap mb-4`}>
        {languages.map(lang => (
          <TouchableOpacity
            key={lang}
            onPress={() => setSelectedLanguage(lang)}
            style={tw.style(
              `px-4 py-1 rounded-full mr-2 mb-2 border`,
              selectedLanguage === lang
                ? 'bg-[#00c7ee] border-[#00c7ee] text-white'
                : 'bg-white border-gray-300'
            )}
          >
            <Text style={tw`${selectedLanguage === lang ? 'text-white' : 'text-gray-800'} text-sm`}>
              {lang}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={tw`flex-row items-center bg-gray-100 p-4 mb-3 rounded-xl`}>
            <Image source={item.avatar} style={tw`w-12 h-12 rounded-full mr-4`} />
            <View style={tw`flex-1`}>
              <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
              <Text style={tw`text-sm text-gray-600`}>Learning: {item.targetLanguage}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleMessage(item.name)}
              style={tw`bg-[#00c7ee] px-3 py-1 rounded-full`}
            >
              <Text style={tw`text-white text-sm font-medium`}>Message</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
