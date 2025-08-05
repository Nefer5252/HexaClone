// app/(tabs)/templates.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TemplatesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hexa Templates Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' },
  text:      { color: '#fff', fontSize: 20 },
});
