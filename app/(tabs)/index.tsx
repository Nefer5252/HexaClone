// app/(tabs)/index.tsx
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type CardItem = {
  id: string;
  titleTop: string; // küçük, gri üst başlık
  title: string; // büyük başlık, satır kırılabilir
  image?: any; // boş bırakılabilir
  badgeNew?: boolean;
};

const defaultCardImage = require('../../assets/images/partial-react-logo.png');

const Card = ({ item, onPress }: { item: CardItem; onPress?: () => void }) => (
  <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.card}>
    <Image
      source={item.image ?? defaultCardImage}
      style={styles.cardImage}
      resizeMode="cover"
    />
    <View style={styles.cardGradient} />
    <View style={styles.cardTexts}>
      {!!item.titleTop && (
        <Text style={styles.cardTitleTop}>{item.titleTop}</Text>
      )}
      <Text style={styles.cardTitle}>{item.title}</Text>
    </View>
    {item.badgeNew && (
      <View style={styles.newBadge}>
        <Ionicons name="sparkles" size={14} color="#fff" />
        <Text style={styles.newBadgeText}>Yeni</Text>
      </View>
    )}
  </TouchableOpacity>
);

export default function CreateScreen() {
  const [openedCard, setOpenedCard] = useState<CardItem | null>(null);
  const cards: CardItem[] = useMemo(
    () => [
      {
        id: 'hero-logo',
        titleTop: 'AI Logo',
        title: 'Create Your Own Personal Logo',
        badgeNew: true,
      },
      {
        id: 'hero-sticker',
        titleTop: 'AI Sticker Tasarımı',
        title: 'Create Your Own Sticker Design',
        badgeNew: true,
      },
      {
        id: 'poster',
        titleTop: 'Yapay Zeka Posteri',
        title: 'Create Your Own Product Photo & Video',
        badgeNew: true,
      },
      {
        id: 'post',
        titleTop: 'Yapay Zeka Gönderisi',
        title: 'Create Your Own Album Cover',
        badgeNew: true,
      },
      {
        id: 'room',
        titleTop: 'Yapay Zeka Oda Tasarımı',
        title: 'Create Your Own Garden Design ',
        badgeNew: true,
      },
      {
        id: 'book',
        titleTop: 'Yapay Zeka Kitap Kapağı',
        title: 'Create Your Own Car Design',
        badgeNew: true,
      },
      {
        id: 'avatar',
        titleTop: 'Yapay Zeka Küçük Görseli',
        title: 'Create Stunning Al Art',
        badgeNew: true,
      },
      {
        id: 'wall',
        titleTop: 'AI Duvar Kağıdı',
        title: 'Create Your Own Tattoo',
        badgeNew: true,
      },
      {
        id: 'invite',
        titleTop: 'Yapay Zeka Davetiyesi',
        title: 'Create Your Own Card',
        badgeNew: true,
      },
      {
        id: 'coloring',
        titleTop: 'Yapay Zeka Boyama Kitabı',
        title: 'Create Your Own Signature',
        badgeNew: true,
      },
      {
        id: 'car',
        titleTop: 'AI Araba Tasarımı',
        title: 'Create Your Own Clothes',
        badgeNew: true,
      },
      {
        id: 'tattoo',
        titleTop: 'AI Dövme',
        title: 'Create Your Own Tattoo',
        badgeNew: true,
      },
      {
        id: 'card',
        titleTop: 'Yapay Zeka Kartı',
        title: 'Create Your Own Card',
        badgeNew: true,
      },
      {
        id: 'signature',
        titleTop: 'AI İmza',
        title: 'Create Your Own Signature',
        badgeNew: true,
      },
      {
        id: 'mockup',
        titleTop: 'AI Maket',
        title: 'Create Your Own Mockup',
        badgeNew: true,
      },
      {
        id: 'clothes',
        titleTop: 'AI Giysi',
        title: 'Create Your Own Clothes',
        badgeNew: true,
      },
      {
        id: 'sticker',
        titleTop: 'AI Sticker Tasarımı',
        title: 'Create Your Own Sticker',
        badgeNew: true,
      },
      {
        id: 'product',
        titleTop: 'Yapay Zeka Ürün Fotoğrafı',
        title: 'Create Your Own Product',
        badgeNew: true,
      },
      {
        id: 'album',
        titleTop: 'Yapay Zeka Albüm Kapağı',
        title: 'Create Your Own Album Cover',
        badgeNew: true,
      },
      {
        id: 'art',
        titleTop: 'Yapay Zeka Sanatı',
        title: 'Create Stunning Al Art',
        badgeNew: true,
      },
      {
        id: 'garden',
        titleTop: 'AI Bahçe Tasarımı',
        title: 'Create Your Own Garden Design',
        badgeNew: true,
      },
      {
        id: 'logo',
        titleTop: 'AI Logo',
        title: 'Create Your Own Logo',
        badgeNew: true,
      },
    ],
    []
  );

  const renderCard = ({ item }: ListRenderItemInfo<CardItem>) => (
    <Card item={item} onPress={() => setOpenedCard(item)} />
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
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
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        numColumns={2}
        contentContainerStyle={styles.scrollContent}
        columnWrapperStyle={styles.column}
        showsVerticalScrollIndicator={false}
      />
      <Modal visible={!!openedCard} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setOpenedCard(null)}
          />
          <View style={styles.modalCard}>
            <Image
              source={openedCard?.image ?? defaultCardImage}
              style={styles.modalImage}
              resizeMode="cover"
            />
            <View style={styles.modalGradient} />
            <View style={styles.modalTexts}>
              {!!openedCard?.titleTop && (
                <Text style={styles.modalTitleTop}>{openedCard.titleTop}</Text>
              )}
              <Text style={styles.modalTitle}>{openedCard?.title}</Text>
            </View>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setOpenedCard(null)}
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
    paddingTop: 16,
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

  scrollContent: { paddingBottom: 32, paddingTop: 16 },
  column: { paddingHorizontal: 16, justifyContent: 'space-between' },
  heroRow: { display: 'none' },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 12,
  },
  card: {
    width: '48%',
    aspectRatio: 1.05,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#1b1d2d',
    position: 'relative',
    marginBottom: 12,
  },
  cardImage: { position: 'absolute', width: '100%', height: '100%' },
  cardGradient: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  cardTexts: { position: 'absolute', left: 12, right: 12, bottom: 12 },
  cardTitleTop: {
    color: '#e8eaf6',
    fontSize: 12,
    marginBottom: 6,
    fontWeight: '600',
  },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: '800' },
  newBadge: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    backgroundColor: '#6e52ff',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  newBadgeText: { color: '#fff', fontWeight: '700' },
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
  modalTitleTop: {
    color: '#e8eaf6',
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '700',
  },
  modalTitle: { color: '#fff', fontSize: 26, fontWeight: '900' },
  modalClose: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.35)',
    padding: 8,
    borderRadius: 14,
  },
});
