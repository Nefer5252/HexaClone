import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TemplatesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Templates Screen</Text>
    </View>
  );
}

export const screenOptions = {
  headerShown: true,
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  text: { color: 'white', fontSize: 20 },
});
