import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

type Props = {
  goal: string;
};

export default function DailyGoal({ goal }: Props) {
  return (
    <View style={tw`mb-6 p-4 bg-[#e0f7f6] rounded-xl`}>
      <Text style={tw`text-base text-black font-medium`}>🎯 Today’s Goal</Text>
      <Text style={tw`text-lg font-semibold text-[#00c7ee] mt-1`}>{goal}</Text>
    </View>
  );
}
