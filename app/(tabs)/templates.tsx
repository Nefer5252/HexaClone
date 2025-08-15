// app/(tabs)/templates.tsx
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type TemplateItem = { id: string; title: string; image?: any; isPro?: boolean };

const defaultImg = require('../../assets/images/partial-react-logo.png');

function TemplateCard({
  item,
  onPress,
}: {
  item: TemplateItem;
  onPress?: () => void;
}) {
  return (
    <TouchableOpacity
      style={styles.tCard}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <View style={styles.tImageWrap}>
        <Image
          source={item.image ?? defaultImg}
          style={styles.tImage}
          resizeMode="cover"
        />
        {item.isPro && (
          <View style={styles.proBadge}>
            <Text style={styles.proText}>Pro</Text>
          </View>
        )}
      </View>
      <Text style={styles.tTitle} numberOfLines={1}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
}

export default function TemplatesScreen() {
  const [openedItem, setOpenedItem] = useState<TemplateItem | null>(null);
  const sections: { id: string; title: string; items: TemplateItem[] }[] =
    useMemo(
      () => [
        {
          id: 'album',
          title: 'All',
          items: [
            { id: 'a1', title: 'Garden Design', isPro: false },
            { id: 'a2', title: 'Logo', isPro: false },
            { id: 'a3', title: 'Car Design', isPro: false },
            { id: 'a4', title: 'Sticker Design', isPro: true },
          ],
        },
        {
          id: 'signature',
          title: 'Poster',
          items: [
            { id: 's1', title: 'sci-Fi', isPro: true },
            { id: 's2', title: 'National Day', isPro: false },
            { id: 's3', title: 'Nature', isPro: false },
          ],
        },
        {
          id: 'invite',
          title: 'Invitation',
          items: [
            { id: 'i1', title: 'Wedding', isPro: false },
            { id: 'i2', title: 'Funeral', isPro: false },
            { id: 'i3', title: 'Birthday Party', isPro: false },
          ],
        },
        {
          id: 'clothes',
          title: 'Garment',
          items: [
            { id: 'c1', title: 'Hoodie', isPro: false },
            { id: 'c2', title: 'T-Shirt', isPro: false },
            { id: 'c3', title: 'Suit', isPro: false },
          ],
        },
        {
          id: 'car',
          title: 'Car',
          items: [
            { id: 'car1', title: 'Sport', isPro: true },
            { id: 'car2', title: 'Suv', isPro: false },
            { id: 'car3', title: 'Classic', isPro: false },
          ],
        },
        {
          id: 'sticker',
          title: 'Sticker',
          items: [
            { id: 'st1', title: 'Pixel Cat', isPro: false },
            { id: 'st2', title: 'Cartoon Cop', isPro: false },
            { id: 'st3', title: 'Hero', isPro: false },
          ],
        },
        {
          id: 'poster',
          title: 'Signature',
          items: [
            { id: 'p1', title: 'simple', isPro: true },
            { id: 'p2', title: 'fashionable', isPro: false },
            { id: 'p3', title: 'pro', isPro: false },
          ],
        },
      ],
      []
    );

  const renderHItem = ({ item }: ListRenderItemInfo<TemplateItem>) => (
    <TemplateCard item={item} onPress={() => setOpenedItem(item)} />
  );

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

      <ScrollView showsVerticalScrollIndicator={false}>
        {sections.map((sec) => (
          <View key={sec.id} style={styles.section}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>{sec.title}</Text>
              <Text style={styles.seeAll}>See All</Text>
            </View>
            <FlatList
              data={sec.items}
              keyExtractor={(i) => i.id}
              renderItem={renderHItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.hList}
            />
          </View>
        ))}
      </ScrollView>
      <Modal visible={!!openedItem} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setOpenedItem(null)}
          />
          <View style={styles.modalCard}>
            <Image
              source={openedItem?.image ?? defaultImg}
              style={styles.modalImage}
              resizeMode="cover"
            />
            <View style={styles.modalGradient} />
            <View style={styles.modalTexts}>
              <Text style={styles.modalTitle}>{openedItem?.title}</Text>
            </View>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setOpenedItem(null)}
            >
              <Ionicons name="close" size={22} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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

  section: { marginTop: 18 },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: { color: '#fff', fontSize: 28, fontWeight: '800' },
  seeAll: { color: '#cfd3ff', fontWeight: '700' },

  hList: { paddingHorizontal: 16, gap: 12 },
  tCard: { width: 180 },
  tImageWrap: {
    aspectRatio: 1,
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#1b1d2d',
    position: 'relative',
  },
  tImage: { width: '100%', height: '100%' },
  tTitle: { color: '#fff', marginTop: 10, fontWeight: '800' },
  proBadge: {
    position: 'absolute',
    right: 0,
    top: 0,
    backgroundColor: '#f0a33c',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderBottomLeftRadius: 12,
  },
  proText: { color: '#fff', fontWeight: '800' },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  modalCard: {
    width: '100%',
    height: '85%',
    borderRadius: 22,
    overflow: 'hidden',
    backgroundColor: '#1b1d2d',
    position: 'relative',
  },
  modalImage: { position: 'absolute', width: '100%', height: '100%' },
  modalGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  modalTexts: { position: 'absolute', left: 16, right: 16, bottom: 20 },
  modalTitle: { color: '#fff', fontSize: 24, fontWeight: '900' },
  modalClose: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 8,
    borderRadius: 14,
  },
});



