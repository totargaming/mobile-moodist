import React, { useMemo, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Categories } from '@/components/categories/categories';
import { Container } from '@/components/container';

import { useSoundStore } from '@/stores/sound';
import { usePresetStore } from '@/stores/preset';
import { useNoteStore } from '@/stores/note';
import { sounds } from '@/data/sounds';

import type { Sound } from '@/data/types';

// Placeholder heart icon component
const HeartIcon = () => <Text style={{ fontSize: 16 }}>♥</Text>;

export function App() {
  const categories = useMemo(() => sounds.categories, []);
  
  const favorites = useSoundStore(state => state.getFavorites());
  
  const favoriteSounds = useMemo(() => {
    const favoriteSounds = categories
      .map(category => category.sounds)
      .flat()
      .filter(sound => favorites.includes(sound.id));

    // Reorder based on the order of favorites
    return favorites.map(favorite =>
      favoriteSounds.find(sound => sound.id === favorite),
    ).filter(Boolean) as Array<Sound>;
  }, [favorites, categories]);

  const allCategories = useMemo(() => {
    const favoritesCategory = [];

    if (favoriteSounds.length) {
      favoritesCategory.push({
        icon: <HeartIcon />,
        id: 'favorites',
        sounds: favoriteSounds,
        title: 'Favorites',
      });
    }

    return [...favoritesCategory, ...categories];
  }, [favoriteSounds, categories]);

  return (
    <View style={styles.container}>
      <Container>
        <Categories categories={allCategories} />
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09090b',
  },
});