import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,               // Üst bar burada açık olacak
        tabBarActiveTintColor: '#7b4cff' // Alt tab bar renk
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => <Ionicons name="sparkles" size={24} color={color} />,
          headerTitle: 'Hexa Create Screen',
        }}
      />
      <Tabs.Screen
        name="art"
        options={{
          title: 'AI Art',
          tabBarIcon: ({ color }) => <Ionicons name="image" size={24} color={color} />,
          headerTitle: 'Hexa AI Art Screen',
        }}
      />
      <Tabs.Screen
        name="templates"
        options={{
          title: 'Templates',
          tabBarIcon: ({ color }) => <Ionicons name="leaf" size={24} color={color} />,
          headerTitle: 'Hexa Templates Screen',
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <Ionicons name="grid" size={24} color={color} />,
          headerTitle: 'Hexa Library Screen',
        }}
      />
    </Tabs>
  );
}
