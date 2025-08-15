// app/(tabs)/art.tsx
import { Ionicons } from '@expo/vector-icons';
import React, { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  ListRenderItemInfo,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type DiscoverItem = {
  id: string;
  title: string;
  tag: string;
  image?: any;
  variant?: 'wide' | 'square';
};

const defaultImg = require('../../assets/images/partial-react-logo.png');

function DiscoverCard({ item }: { item: DiscoverItem }) {
  const isWide = item.variant === 'wide';
  return (
    <View style={[styles.card, isWide ? styles.cardWide : undefined]}>
      <View
        style={[
          styles.imageWrap,
          isWide ? styles.imageWide : styles.imageSquare,
        ]}
      >
        <Image
          source={item.image ?? defaultImg}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.tryBadge}>
          <Ionicons name="refresh" size={14} color="#fff" />
          <Text style={styles.tryText}>Try</Text>
        </View>
      </View>
      <Text style={styles.cardTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.cardTag}>{item.tag}</Text>
    </View>
  );
}

export default function ArtScreen() {
  const [promptText, setPromptText] = useState('');
  const [imageText, setImageText] = useState('');
  const [aspect, setAspect] = useState<'9:16' | '16:9' | '1:1'>('9:16');
  const wideItems: DiscoverItem[] = useMemo(
    () => [
      {
        id: 'w1',
        title: 'Aykut listening to music',
        tag: 'Anime',
        variant: 'wide',
      },
      {
        id: 'w2',
        title: 'An eerie scene with dark shadows',
        tag: 'Creepy',
        variant: 'wide',
      },
    ],
    []
  );

  const items: DiscoverItem[] = useMemo(
    () => [
      {
        id: '1',
        title: 'A fantasy scene with mythical forest and unicorn',
        tag: 'Fantasy',
      },
      {
        id: '2',
        title: 'A cyberpunk scene with neon lights',
        tag: 'Cyberpunk',
      },
      {
        id: '3',
        title: 'An anime-style scene with dynamic action',
        tag: 'Anime',
      },
      {
        id: '4',
        title: 'A realistic scene with detailed forest',
        tag: 'Realism',
      },
      {
        id: '5',
        title: 'A painterly portrait with soft lighting',
        tag: 'Portrait',
      },
      {
        id: '6',
        title: 'A dreamy landscape with misty mountains',
        tag: 'Landscape',
      },
      { id: '7', title: 'A sci-fi spaceship over alien planet', tag: 'Sci-fi' },
      { id: '8', title: 'A minimalist abstract composition', tag: 'Abstract' },
    ],
    []
  );

  const renderItem = ({ item }: ListRenderItemInfo<DiscoverItem>) => (
    <DiscoverCard item={item} />
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

      {/* Scrollable content with Create section on top */}
      <FlatList
        data={items}
        keyExtractor={(i) => i.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.column}
        contentContainerStyle={styles.listContent}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={
          <View>
            {/* Prompt / Create Section */}
            <View style={styles.createSection}>
              <View style={styles.createHeaderRow}>
                <Text style={styles.createTitle}>Enter Your Prompt</Text>
                <View style={styles.surpriseRow}>
                  <Ionicons name="sparkles" size={16} color="#cfd3ff" />
                  <Text style={styles.surpriseText}>Surprise me</Text>
                </View>
              </View>
              <View style={styles.promptBox}>
                <TextInput
                  style={styles.promptInput}
                  placeholder="ederson-singo-davidson-kim min jae-jakobs-lemina-torreira-ilkay-sane-barış-osimhen"
                  placeholderTextColor="#c7cbe3"
                  multiline
                  value={promptText}
                  onChangeText={(t) => setPromptText(t.slice(0, 500))}
                />
                <TouchableOpacity
                  style={styles.addImageButton}
                  activeOpacity={0.8}
                >
                  <Ionicons name="image" size={16} color="#fff" />
                  <Text style={styles.addImageText}>Add Image</Text>
                </TouchableOpacity>
                <Text style={styles.charCount}>{promptText.length}/500</Text>
              </View>

              <View style={styles.aspectRowWrap}>
                <Text style={styles.aspectLabel}>Aspect Ratio:</Text>
                <View style={styles.aspectRow}>
                  <TouchableOpacity
                    onPress={() => setAspect('9:16')}
                    style={[
                      styles.chip,
                      aspect === '9:16' && styles.chipActive,
                    ]}
                  >
                    <Text
                      style={
                        aspect === '9:16'
                          ? styles.chipActiveText
                          : styles.chipText
                      }
                    >
                      9:16
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setAspect('16:9')}
                    style={[
                      styles.chip,
                      aspect === '16:9' && styles.chipActive,
                    ]}
                  >
                    <Text
                      style={
                        aspect === '16:9'
                          ? styles.chipActiveText
                          : styles.chipText
                      }
                    >
                      16:9
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setAspect('1:1')}
                    style={[styles.chip, aspect === '1:1' && styles.chipActive]}
                  >
                    <Text
                      style={
                        aspect === '1:1'
                          ? styles.chipActiveText
                          : styles.chipText
                      }
                    >
                      1:1
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.styleHeaderRow}>
                <Text style={styles.styleTitle}>Select Style</Text>
                <Text style={styles.seeAll}>See all</Text>
              </View>

              <FlatList
                horizontal
                data={[
                  { id: 'none', label: 'No style' },
                  { id: 'anime', label: 'Anime' },
                  { id: 'fantasy', label: 'Fantasy' },
                  { id: 'scifi', label: 'Sci-fi' },
                  { id: 'realism', label: 'Cyberpunk' },
                  
                ]}
                keyExtractor={(i) => i.id}
                contentContainerStyle={styles.styleList}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View style={styles.styleItem}>
                    <View style={styles.styleThumb}>
                      <Image
                        source={defaultImg}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </View>
                    <Text style={styles.styleLabel}>{item.label}</Text>
                  </View>
                )}
              />

              {/* CTA */}
              <TouchableOpacity style={styles.cta} activeOpacity={0.9}>
                <Text style={styles.ctaText}>Oluşturun</Text>
                <Ionicons name="wallet" size={16} color="#fff" />
                <Text style={styles.ctaText}>50</Text>
              </TouchableOpacity>
            </View>

            {/* Explore */}
            <Text style={styles.sectionTitle}>Keşfet</Text>
            <View style={styles.wideRow}>
              {wideItems.map((wi) => (
                <DiscoverCard key={wi.id} item={wi} />
              ))}
            </View>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />
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

  cta: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#6e52ff',
    borderRadius: 24,
    paddingVertical: 14,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  ctaText: { color: '#fff', fontWeight: '800', fontSize: 18 },

  sectionTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 16,
    marginHorizontal: 16,
  },

  wideRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginTop: 12,
  },

  column: { paddingHorizontal: 16, justifyContent: 'space-between' },
  listContent: { paddingTop: 12, paddingBottom: 24 },

  card: { width: '48%' },
  cardWide: { width: '48%' },
  imageWrap: {
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#1b1d2d',
    position: 'relative',
  },
  imageSquare: { aspectRatio: 1 },
  imageWide: { aspectRatio: 1.6 },
  image: { width: '100%', height: '100%' },
  tryBadge: {
    position: 'absolute',
    right: 8,
    top: 8,
    backgroundColor: 'rgba(0,0,0,0.45)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  tryText: { color: '#fff', fontWeight: '700' },
  cardTitle: { color: '#fff', fontWeight: '800', fontSize: 16, marginTop: 10 },
  cardTag: { color: '#b8bccf', marginTop: 4 },
  // Create section styles
  createSection: { marginTop: 8 },
  createHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  createTitle: { color: '#fff', fontSize: 24, fontWeight: '800' },
  surpriseRow: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  surpriseText: { color: '#cfd3ff', fontWeight: '700' },
  promptBox: {
    marginTop: 12,
    marginHorizontal: 16,
    backgroundColor: '#141626',
    borderRadius: 18,
    padding: 16,
  },
  promptInput: { color: '#fff', minHeight: 90, textAlignVertical: 'top' },
  addImageButton: {
    marginTop: 14,
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  addImageText: { color: '#fff', fontWeight: '700' },
  charCount: { color: '#c7cbe3', alignSelf: 'flex-end', marginTop: 12 },
  aspectRowWrap: { paddingHorizontal: 16, marginTop: 14 },
  aspectLabel: { color: '#fff', fontWeight: '800', marginBottom: 8 },
  aspectRow: { flexDirection: 'row', gap: 12 },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#1b1d2d',
  },
  chipText: { color: '#c7cbe3', fontWeight: '700' },
  chipActive: {
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.25)',
  },
  chipActiveText: { color: '#fff', fontWeight: '800' },
  styleHeaderRow: {
    paddingHorizontal: 16,
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  styleTitle: { color: '#fff', fontSize: 22, fontWeight: '800' },
  seeAll: { color: '#cfd3ff', fontWeight: '700' },
  styleList: { paddingHorizontal: 16, gap: 12, paddingTop: 12 },
  styleItem: { marginRight: 12, alignItems: 'center' },
  styleThumb: {
    width: 86,
    height: 86,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#1b1d2d',
  },
  styleLabel: { color: '#c7cbe3', marginTop: 8 },
});
