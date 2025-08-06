
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        options={{
          title: 'Create',
          tabBarIcon: ({ color, size }) => (
            /* replaced “sparkles” with valid “auto-awesome” */
            <MaterialIcons name="auto-awesome" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Art"
        options={{
          title: 'AI Art',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="image" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Templates"
        options={{
          title: 'Templates',
          tabBarIcon: ({ color, size }) => (
            /* replaced “compass” with valid “explore” */
            <MaterialIcons name="explore" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Library"
        options={{
          title: 'Library',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="grid-view" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
