import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Hexa</Text>
      <View style={styles.rightSection}>
        <TouchableOpacity style={styles.badge}>
          <Text style={styles.badgeText}>Pro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.coins}>
          <Ionicons name="wallet" size={16} color="white" />
          <Text style={styles.coinsText}>50</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="settings-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#0a0a0a',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold',
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#f7a13b',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  badgeText: {
    color: 'white',
    fontWeight: '600',
  },
  coins: {
    backgroundColor: '#7b4cff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginRight: 8,
  },
  coinsText: {
    color: 'white',
    marginLeft: 4,
    fontWeight: '600',
  },
  icon: {
    padding: 4,
  },
});
