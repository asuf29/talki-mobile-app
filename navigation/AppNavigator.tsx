import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Onboarding/WelcomeScreen';
import LanguageSelectScreen from '../screens/Onboarding/LanguageSelectScreen';
import LearningGoalScreen from '../screens/Onboarding/LearningGoalScreen';
import HomeScreen from '../screens/Home/HomeScreen';

export type AppStackParamList = {
  Welcome: undefined;
  LanguageSelect: undefined;
  LearningGoal: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="LanguageSelect" component={LanguageSelectScreen} />
      <Stack.Screen name="LearningGoal" component={LearningGoalScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}
