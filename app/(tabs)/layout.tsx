import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,  // Üst bar görünsün
        tabBarActiveTintColor: '#7b4cff', // Alt tab aktif renk
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Create',
          tabBarIcon: ({ color }) => <Ionicons name="sparkles" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="art"
        options={{
          title: 'AI Art',
          tabBarIcon: ({ color }) => <Ionicons name="image" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="templates"
        options={{
          title: 'Templates',
          tabBarButton: () => null,  // Alt tab bar'dan gizle
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          tabBarButton: () => null,  // Alt tab bar'dan gizle
        }}
      />
    </Tabs>
  );
}
