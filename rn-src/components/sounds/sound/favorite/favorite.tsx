import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import { useSoundStore } from '@/stores/sound';

interface FavoriteProps {
  id: string;
  label: string;
}

export function Favorite({ id, label }: FavoriteProps) {
  const isFavorite = useSoundStore(state => state.sounds[id]?.isFavorite || false);
  const toggleFavorite = useSoundStore(state => state.toggleFavorite);

  const handleToggle = () => {
    toggleFavorite(id);
    
    // TODO: Implement scroll to favorites category when added as favorite
    // This would require navigation logic in React Native
  };

  return (
    <TouchableOpacity
      style={[styles.favoriteButton, isFavorite && styles.isFavorite]}
      onPress={(e) => {
        e.stopPropagation();
        handleToggle();
      }}
      accessibilityLabel={
        isFavorite
          ? `Remove ${label} Sound from Favorites`
          : `Add ${label} Sound to Favorites`
      }
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Text style={[styles.heart, isFavorite && styles.favoriteHeart]}>
        {isFavorite ? '♥' : '♡'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    zIndex: 10,
  },
  isFavorite: {
    backgroundColor: 'rgba(239, 68, 68, 0.2)',
  },
  heart: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
  },
  favoriteHeart: {
    color: '#ef4444',
  },
});