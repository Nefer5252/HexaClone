import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#7b4cff',
        tabBarStyle: { height: 60 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => <Ionicons name="sparkles" size={24} color={color} />,
          headerTitle: 'Create',
        }}
      />
      <Tabs.Screen
        name="art"
        options={{
          title: 'AI Art',
          tabBarIcon: ({ color }) => <Ionicons name="image" size={24} color={color} />,
          headerTitle: 'AI Art',
        }}
      />
      <Tabs.Screen
        name="templates"
        options={{
          title: 'Templates',
          tabBarIcon: ({ color }) => <Ionicons name="leaf" size={24} color={color} />,
          headerTitle: 'Templates',
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color }) => <Ionicons name="grid" size={24} color={color} />,
          headerTitle: 'Library',
        }}
      />
    </Tabs>
  );
}
