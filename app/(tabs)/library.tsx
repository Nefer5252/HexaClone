import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Library Screen</Text>
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
