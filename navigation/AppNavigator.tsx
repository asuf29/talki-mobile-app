import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Onboarding/WelcomeScreen';
import LanguageSelectScreen from '../screens/Onboarding/LanguageSelectScreen';
import LearningGoalScreen from '../screens/Onboarding/LearningGoalScreen';
import AllSetScreen from '../screens/Onboarding/AllSetScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import AIPartnerScreen from '../screens/AIPartnerScreen';
import TabNavigator from './TabNavigator';

export type AppStackParamList = {
  Welcome: undefined;
  LanguageSelect: undefined;
  LearningGoal: undefined;
  AllSet: undefined; 
  Home: undefined;
  ChatRoom: undefined;
  AIPartner: undefined;
  Tabs: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="LanguageSelect" component={LanguageSelectScreen} />
      <Stack.Screen name="LearningGoal" component={LearningGoalScreen} />
      <Stack.Screen name="AllSet" component={AllSetScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
      <Stack.Screen name="AIPartner" component={AIPartnerScreen} /> 
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
}
