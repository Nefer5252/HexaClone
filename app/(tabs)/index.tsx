import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Qualifications</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  text: { color: 'white', fontSize: 20 },
});

export const screenOptions = {
  headerShown: false, // Üst bar layout’taki üst barı kullanmak için kapatıyoruz
};
