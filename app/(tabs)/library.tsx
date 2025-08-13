// app/(tabs)/library.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const defaultImg = require('../../assets/images/partial-react-logo.png');

export default function LibraryScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Hexa</Text>
        <View style={styles.headerRight}>
          <View style={styles.badgePro}>
            <Text style={styles.badgeProText}>Pro</Text>
          </View>
          <View style={styles.badgeCoins}>
            <Ionicons name="wallet" size={14} color="#fff" />
            <Text style={styles.badgeCoinsText}>50</Text>
          </View>
          <Ionicons name="settings-outline" size={22} color="#fff" />
        </View>
      </View>

      {/* Title */}
      <Text style={styles.title}>Kütüphane</Text>

      {/* Empty preview skeletons */}
      <View style={styles.skeletonGrid}>
        {[0, 1, 2, 3, 4].map((i) => (
          <View
            key={i}
            style={[
              styles.skeletonCard,
              i < 2 ? styles.skeletonTop : undefined,
            ]}
          >
            <View style={styles.skelImageWrap}>
              <Image
                source={defaultImg}
                style={styles.skelImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.skelBar} />
          </View>
        ))}
      </View>

      {/* Empty state text */}
      <View style={styles.emptyTextWrap}>
        <Text style={styles.emptyTitle}>Henüz Tasarımın Yok</Text>
        <Text style={styles.emptySub}>
          Oluştur düğmesine dokun ve AI Tasarım dünyasına dal. Fikirlerini
          gerçeğe dönüştür
        </Text>
      </View>

      {/* Create button */}
      <TouchableOpacity style={styles.createBtn} activeOpacity={0.9}>
        <Text style={styles.createBtnText}>Oluştur</Text>
        <Ionicons name="sparkles" size={18} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0b0b12' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  logo: { color: '#fff', fontSize: 24, fontWeight: '700' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  badgePro: {
    backgroundColor: '#f0a33c',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  badgeProText: { color: '#fff', fontWeight: '700' },
  badgeCoins: {
    backgroundColor: '#6e52ff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 10,
  },
  badgeCoinsText: { color: '#fff', marginLeft: 6, fontWeight: '700' },

  title: {
    color: '#fff',
    fontSize: 36,
    fontWeight: '900',
    marginHorizontal: 16,
    marginTop: 8,
  },

  skeletonGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  skeletonCard: {
    width: '31%',
    backgroundColor: 'rgba(255,255,255,0.06)',
    borderRadius: 16,
    paddingBottom: 10,
    marginBottom: 16,
  },
  skeletonTop: { width: '46%' },
  skelImageWrap: {
    aspectRatio: 1,
    borderRadius: 12,
    overflow: 'hidden',
    margin: 8,
    backgroundColor: 'rgba(255,255,255,0.04)',
  },
  skelImage: { width: '100%', height: '100%', opacity: 0.05 },
  skelBar: {
    height: 10,
    borderRadius: 6,
    marginHorizontal: 12,
    marginTop: 6,
    backgroundColor: 'rgba(255,255,255,0.08)',
  },

  emptyTextWrap: { marginTop: 40, paddingHorizontal: 16, alignItems: 'center' },
  emptyTitle: { color: '#fff', fontSize: 24, fontWeight: '800' },
  emptySub: {
    color: '#c7cbe3',
    textAlign: 'center',
    marginTop: 12,
    lineHeight: 22,
  },

  createBtn: {
    alignSelf: 'center',
    marginTop: 24,
    paddingHorizontal: 28,
    paddingVertical: 16,
    borderRadius: 30,
    backgroundColor: '#6e52ff',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  createBtnText: { color: '#fff', fontSize: 18, fontWeight: '800' },
});
