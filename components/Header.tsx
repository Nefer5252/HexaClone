import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Header() {
  const router = useRouter();
  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      {/* Status bar area */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>23:09</Text>
        <View style={styles.dynamicIsland}>
          <MaterialIcons name="videocam" size={16} color="#fff" />
        </View>
        <View style={styles.statusIcons}>
          <MaterialIcons name="wifi" size={16} color="#fff" />
          <MaterialIcons name="battery-full" size={16} color="#fff" style={styles.iconSpacing} />
        </View>
      </View>
      {/* App header */}
      <View style={styles.header}>
        <View style={styles.leftGroup}>
          <Image source={require('../app/assets/logo.png')} style={styles.logo} />
          <Text style={styles.title}>Hexa</Text>
        </View>
        <View style={styles.rightGroup}>
          <View style={[styles.badge, styles.proBadge]}>
            <Text style={styles.badgeText}>Pro</Text>
          </View>
          <View style={[styles.badge, styles.coinBadge]}>
            <Text style={styles.badgeText}>50</Text>
          </View>
         <TouchableOpacity onPress={() => router.push('settings')} style={styles.settingsButton}>
  <MaterialIcons name="settings" size={24} color="#fff" />
</TouchableOpacity>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#000',
  },
  statusBar: {
    height: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  statusText: {
    color: '#fff',
    fontSize: 12,
  },
  dynamicIsland: {
    flex: 1,
    height: 24,
    marginHorizontal: 12,
    backgroundColor: '#222',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statusIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginLeft: 4,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#111',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
  },
  proBadge: {
    backgroundColor: '#C47CF0',
  },
  coinBadge: {
    backgroundColor: '#5E2CE7',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  settingsButton: {
    padding: 4,
  },
});



