import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';

type Group = {
  title: string;
  description: string;
};

const groups: Group[] = [
  {
    title: '🧑‍🤝‍🧑 English Beginners',
    description: 'Practice basic conversations together.',
  },
  {
    title: '💬 Daily Practice',
    description: 'Join to speak daily with new topics.',
  },
  {
    title: '🌍 World Chat',
    description: 'Meet language learners from around the world.',
  },
];

export default function GroupChats() {
  return (
    <View style={tw`mb-8`}>
      <Text style={tw`text-base font-bold text-black mb-4`}>Group Chat Rooms</Text>

      {groups.map((group, index) => (
        <TouchableOpacity
          key={index}
          style={tw`mb-3 p-4 bg-gray-100 rounded-xl shadow-sm`}
          activeOpacity={0.8}
          onPress={() => {
            console.log(`Joining group: ${group.title}`);
          }}
        >
          <Text style={tw`text-base font-semibold text-black mb-1`}>
            {group.title}
          </Text>
          <Text style={tw`text-sm text-gray-600`}>{group.description}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
