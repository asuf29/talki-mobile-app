import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator, KeyboardAvoidingView, Platform } from 'react-native';
import tw from 'twrnc';

export default function AIPartnerScreen() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      id: Date.now().toString(),
      text: input.trim(),
      sender: 'user',
    };
    setMessages((prev) => [userMessage, ...prev]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`, 
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            {
              role: 'system',
              content:
                'You are a friendly AI language partner. Keep your responses helpful, simple, and conversational.',
            },
            { role: 'user', content: userMessage.text },
          ],
          max_tokens: 150,
          temperature: 0.7,
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        const aiText = data.choices[0].message?.content?.trim() ?? 'Sorry, I could not generate a response.';
        const aiMessage = {
          id: (Date.now() + 1).toString(),
          text: aiText,
          sender: 'ai',
        };
        setMessages((prev) => [aiMessage, ...prev]);
      } else {
        setMessages((prev) => [
          ...prev,
          { id: (Date.now() + 1).toString(), text: 'No response from AI.', sender: 'ai' },
        ]);
      }
    } catch (error) {
      console.error('OpenAI API error:', error);
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), text: 'Error contacting AI service.', sender: 'ai' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={tw`flex-1 bg-white`}
      keyboardVerticalOffset={80}
    >
      <FlatList
        data={messages}
        inverted
        keyExtractor={(item) => item.id}
        contentContainerStyle={tw`pt-4`}
        renderItem={({ item }) => (
          <View
            style={tw.style(
              'px-4 py-2 mx-3 my-1 max-w-[75%] rounded-2xl',
              item.sender === 'user' ? 'bg-[#14b8a6] self-end' : 'bg-gray-200 self-start'
            )}
          >
            <Text style={tw`${item.sender === 'user' ? 'text-white' : 'text-black'}`}>{item.text}</Text>
          </View>
        )}
      />

      <View style={tw`flex-row p-3 border-t border-gray-200 items-center`}>
        <TextInput
          value={input}
          onChangeText={setInput}
          style={tw`flex-1 border border-gray-300 rounded-full px-4 py-2 mr-2`}
          placeholder="Message your AI partner..."
          editable={!loading}
          onSubmitEditing={sendMessage}
          returnKeyType="send"
        />
        {loading ? (
          <ActivityIndicator size="small" color="#14b8a6" />
        ) : (
          <TouchableOpacity
            onPress={sendMessage}
            style={tw`bg-[#14b8a6] px-4 py-2 rounded-full`}
            disabled={loading}
          >
            <Text style={tw`text-white font-semibold`}>Send</Text>
          </TouchableOpacity>
        )}
      </View>
    </KeyboardAvoidingView>
  );
}
