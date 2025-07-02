import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import tw from 'twrnc';
import UserCard from './UserCard';

export default function UserSuggestions() {
  const users = [
    {
      name: 'Doğukan',
      native: '🇹🇷',
      learning: '🇬🇧',
      avatar: require('../assets/images/boy.png'),
    },
    {
      name: 'Anna',
      native: '🇺🇸',
      learning: '🇫🇷',
      avatar: require('../assets/images/woman.png'),
    },
    {
      name: 'Lisa',
      native: '🇩🇪',
      learning: '🇪🇸',
      avatar: require('../assets/images/girl.png'),
    },
  ];

  return (
    <View style={tw`mb-8`}>
      <Text style={tw`text-base font-bold mb-2 text-black`}>Language Buddies</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {users.map((user, index) => (
          <UserCard
            key={index}
            avatar={user.avatar}
            name={user.name}
            native={user.native}
            learning={user.learning}
          />
        ))}
      </ScrollView>
    </View>
  );
}
