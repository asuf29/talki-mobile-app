import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../navigation/AppNavigator';

type Group = {
  title: string;
  description: string;
  users: number;
  hasNewMessages: boolean;
};

const groups: Group[] = [
  {
    title: '🧑‍🤝‍🧑 English Beginners',
    description: 'Practice basic conversations together.',
    users: 12,
    hasNewMessages: true,
  },
  {
    title: '💬 Daily Practice',
    description: 'Join to speak daily with new topics.',
    users: 8,
    hasNewMessages: false,
  },
  {
    title: '🌍 World Chat',
    description: 'Meet language learners from around the world.',
    users: 20,
    hasNewMessages: true,
  },
  {
    title: '🤖 AI Partner',
    description: 'Chat with AI language partners.',
    users: 5,
    hasNewMessages: false,
  },
];

export default function GroupChats() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  return (
    <View style={tw`mb-8`}>
      <Text style={tw`text-base font-bold text-black mb-4`}>Group Chat Rooms</Text>

      {groups.map((group, index) => (
        <TouchableOpacity
          key={index}
          style={tw`mb-3 p-4 bg-gray-100 rounded-xl shadow-sm relative`}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('ChatRoom', { title: group.title })
          }
        >
          <Text style={tw`text-base font-semibold text-black mb-1`}>
            {group.title}
          </Text>
          <Text style={tw`text-sm text-gray-600 mb-1`}>{group.description}</Text>
          <Text style={tw`text-xs text-gray-500`}>{group.users} users online</Text>

          {group.hasNewMessages && (
            <View style={tw`absolute top-2 right-3 w-3 h-3 bg-red-500 rounded-full`} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}
