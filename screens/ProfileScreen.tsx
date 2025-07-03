import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from '../navigation/AuthNavigator';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export default function ProfileScreen() {
  const navigation = useNavigation<NavigationProp>();
  const [avatar, setAvatar] = useState<string | null>(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState('English');

  const languages = ['English', 'Spanish', 'French', 'German'];

  const handlePickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission Denied', 'We need access to your photos!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [1, 1],
      allowsEditing: true,
      quality: 0.5,
    });

    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Log Out',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.removeItem('user');
          navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
        },
      },
    ]);
  };

  return (
    <View style={tw`flex-1 bg-white px-8 pt-16`}>
      <View style={tw`flex-row items-center justify-between`}>
        <Text style={tw`text-xl font-bold`}>My Profile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={tw`px-8 pt-6 pb-10`}>
        <View style={tw`items-center mb-6`}>
          <TouchableOpacity onPress={handlePickImage}>
            <Image
              source={avatar ? { uri: avatar } : require('../assets/images/boy.png')}
              style={tw`w-28 h-28 rounded-full`}
            />
            <Text style={tw`text-[#00c7ee] text-sm mt-2 text-center`}>Change Photo</Text>
          </TouchableOpacity>

          <Text style={tw`text-xl font-bold mt-4`}>John Doe</Text>
          <Text style={tw`text-gray-500 text-sm`}>johndoe@example.com</Text>
          <Text style={tw`text-gray-600 mt-2`}>Learning: {targetLanguage}</Text>
        </View>

        <View style={tw`bg-gray-100 rounded-xl overflow-hidden`}>
          <TouchableOpacity
            style={tw`py-4 px-4 border-b border-gray-200`}
            onPress={() => setModalVisible(true)}
          >
            <Text style={tw`text-base text-gray-800`}>Edit Target Language</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`py-4 px-4 border-b border-gray-200`}>
            <Text style={tw`text-base text-gray-800`}>Change Password</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleLogout} style={tw`py-4 px-4`}>
            <Text style={tw`text-base text-red-500 font-semibold`}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={tw`flex-1 bg-black bg-opacity-30 justify-center items-center px-8`}>
          <View style={tw`bg-white rounded-xl w-full p-6`}>
            <Text style={tw`text-lg font-bold mb-4`}>Select Target Language</Text>
            {languages.map((lang) => (
              <TouchableOpacity
                key={lang}
                onPress={() => {
                  setTargetLanguage(lang);
                  setModalVisible(false);
                }}
                style={tw`py-2`}
              >
                <Text style={tw`text-base ${targetLanguage === lang ? 'text-[#00c7ee] font-bold' : 'text-gray-700'}`}>{lang}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={tw`mt-4 py-2 bg-gray-200 rounded-full`}
            >
              <Text style={tw`text-center text-gray-700`}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
