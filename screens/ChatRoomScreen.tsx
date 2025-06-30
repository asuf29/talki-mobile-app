import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Speech from 'expo-speech';

type Message = {
  id: string;
  text: string;
  sender: 'me' | 'other';
};

export default function ChatRoomScreen({ route }: any) {
  const { title } = route.params;
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', text: 'Hello everyone!', sender: 'other' },
    { id: '2', text: 'Hi! 👋', sender: 'me' },
  ]);

  const handleSend = () => {
    if (message.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), text: message, sender: 'me' },
      ]);
      setMessage('');
    }
  };

  const handleTranslate = (text: string) => {
    console.log(`Translating: ${text}`);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`p-4 border-b border-gray-200 bg-white mt-10`}>
        <Text style={tw`text-xl font-bold text-black`}>{title}</Text>
      </View>

      <FlatList
        data={[...messages].reverse()} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={tw.style(
              `px-4 py-2 mx-3 my-1 max-w-[75%] rounded-2xl`,
              item.sender === 'me'
                ? 'bg-[#00c7ee] self-end'
                : 'bg-gray-100 self-start'
            )}
          >
            <Text
              style={tw.style(
                `text-sm`,
                item.sender === 'me' ? 'text-white' : 'text-black'
              )}
            >
              {item.text}
            </Text>
            <View style={tw`flex-row gap-2 mt-2`}>
              <TouchableOpacity onPress={() => handleTranslate(item.text)}>
                <Ionicons name="language-outline" size={16} color="#999" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Speech.speak(item.text)}>
                <Ionicons name="volume-high-outline" size={16} color="#999" />
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={tw`pb-4 pt-2`}
        inverted
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
      >
        <View style={tw`flex-row items-center p-3 border-t border-gray-200 bg-white mb-6`}>
          <TextInput
            style={tw`flex-1 border border-gray-300 p-3 rounded-full mr-2`}
            placeholder="Type a message..."
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity
            style={tw`bg-[#00c7ee] px-4 py-3 rounded-full`}
            onPress={handleSend}
            activeOpacity={0.8}
          >
            <Text style={tw`text-white font-semibold text-sm`}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
