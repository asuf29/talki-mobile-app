import React from 'react';
import { View, ScrollView } from 'react-native';
import tw from 'twrnc';
import GreetingHeader from '../../components/GreetingHeader';
import DailyGoal from '../../components/DailyGoal';
import UserSuggestions from '../../components/UserSuggestions';

export default function HomeScreen() {
  return (
    <ScrollView style={tw`flex-1 bg-white px-8 pt-16`}>
      <GreetingHeader name="Asu" />
      <DailyGoal goal="Send 10 English messages" />
      <UserSuggestions />
    </ScrollView>
  );
}
