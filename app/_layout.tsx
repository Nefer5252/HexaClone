import { Stack } from 'expo-router';
import Header from '../components/Header';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,  // our custom top bar
        headerShown: true,
      }}
    >
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
