// app/(tabs)/_layout.tsx
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
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
          headerTitle: 'Hexa',
          tabBarIcon: ({ color }) => <Ionicons name="sparkles" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="art"
        options={{
          title: 'AI Art',
          headerTitle: 'AI Art',
          tabBarIcon: ({ color }) => <Ionicons name="image" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="templates"
        options={{
          title: 'Templates',
          headerTitle: 'Templates',
          tabBarIcon: ({ color }) => <Ionicons name="leaf" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          headerTitle: 'Library',
          tabBarIcon: ({ color }) => <Ionicons name="grid" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
