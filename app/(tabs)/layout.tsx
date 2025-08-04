import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true, // Üst bar görünsün
        tabBarActiveTintColor: '#7b4cff', // Alt tab aktif renk
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Create',
          headerTitle: 'Create Screen',
          tabBarIcon: ({ color }) => <Ionicons name="sparkles" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="art"
        options={{
          title: 'AI Art',
          headerTitle: 'AI Art Screen',
          tabBarIcon: ({ color }) => <Ionicons name="image" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="templates"
        options={{
          title: 'Templates',
          headerTitle: 'Templates Screen',
          tabBarIcon: ({ color }) => <Ionicons name="leaf" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="library"
        options={{
          title: 'Library',
          headerTitle: 'Library Screen',
          tabBarIcon: ({ color }) => <Ionicons name="grid" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
