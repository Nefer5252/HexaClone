// app/+not-found.tsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Oops! Sayfa bulunamadı.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' },
  text:      { color: '#fff', fontSize: 18 },
});
