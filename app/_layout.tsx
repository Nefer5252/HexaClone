import { Stack } from 'expo-router';
import Header from '../components/Header';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        header: () => <Header />,  // render our custom header on every screen
        headerShown: true,
      }}
    >
      <Stack.Screen name="(tabs)" />
      {/* add other stack screens here if needed */}
    </Stack>
  );
}