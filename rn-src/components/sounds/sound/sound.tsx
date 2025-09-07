import React, { useCallback, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Range } from './range/range';
import { Favorite } from './favorite/favorite';

import { useSoundStore } from '@/stores/sound';
// TODO: Add loading store when needed
// import { useLoadingStore } from '@/stores/loading';

import type { Sound as SoundType } from '@/data/types';

interface SoundProps extends SoundType {
  functional: boolean;
  selectHidden: (key: string) => void;
  unselectHidden: (key: string) => void;
}

export function Sound({ 
  functional, 
  icon, 
  id, 
  label, 
  selectHidden, 
  src, 
  unselectHidden 
}: SoundProps) {
  const isPlaying = useSoundStore(state => state.isPlaying);
  const play = useSoundStore(state => state.play);
  const selectSound = useSoundStore(state => state.selectSound);
  const unselectSound = useSoundStore(state => state.unselectSound);
  const updateVolume = useSoundStore(state => state.updateVolume);
  const isSelected = useSoundStore(state => state.sounds[id]?.isSelected || false);
  const locked = useSoundStore(state => state.locked);
  
  const volume = useSoundStore(state => state.sounds[id]?.volume || 0.5);
  const globalVolume = useSoundStore(state => state.globalVolume);
  
  const adjustedVolume = useMemo(
    () => volume * globalVolume,
    [volume, globalVolume],
  );

  // TODO: Add loading state when audio system is integrated
  const isLoading = false;

  const select = useCallback(async () => {
    if (locked) return;
    try {
      await selectSound(id);
      if (functional) {
        await play();
      }
    } catch (error) {
      console.error(`Error selecting sound ${id}:`, error);
    }
  }, [selectSound, play, id, locked, functional]);

  const unselect = useCallback(async () => {
    if (locked) return;
    try {
      await unselectSound(id);
      await updateVolume(id, 0.5);
    } catch (error) {
      console.error(`Error unselecting sound ${id}:`, error);
    }
  }, [unselectSound, updateVolume, id, locked]);

  const toggle = useCallback(async () => {
    if (locked) return;
    try {
      if (isSelected) {
        await unselect();
      } else {
        await select();
      }
    } catch (error) {
      console.error(`Error toggling sound ${id}:`, error);
    }
  }, [isSelected, select, unselect, locked]);

  const handlePress = useCallback(async () => {
    await toggle();
  }, [toggle]);

  return (
    <TouchableOpacity
      style={[styles.sound, isSelected && styles.selectedSound]}
      onPress={handlePress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={`${label} sound`}
    >
      <Favorite id={id} label={label} />
      
      <View style={styles.iconContainer}>
        {/* Icon border gradient */}
        <LinearGradient
          colors={['#d4d4d8', '#f4f4f5']}
          style={styles.iconBorder}
        />
        
        {/* Icon background */}
        <View style={styles.iconBackground} />
        
        {/* Icon content */}
        <View style={styles.icon}>
          {isLoading ? (
            <Text style={styles.spinner}>⟳</Text>
          ) : (
            <Text style={styles.iconText}>{icon}</Text>
          )}
        </View>
      </View>
      
      <Text style={styles.label}>{label}</Text>
      
      <Range id={id} label={label} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sound: {
    position: 'relative',
    flex: 1,
    minWidth: '48%',
    maxWidth: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(24, 24, 27, 0.5)',
    borderWidth: 1,
    borderColor: '#e5e5e5',
    borderRadius: 12,
    marginBottom: 12,
  },
  selectedSound: {
    borderColor: 'transparent',
    shadowColor: '#27272a',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
    borderWidth: 2,
    borderColor: '#27272a',
  },
  iconContainer: {
    position: 'relative',
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  iconBorder: {
    position: 'absolute',
    top: -1,
    left: -1,
    width: 42,
    height: 42,
    borderRadius: 21,
    zIndex: 0,
  },
  iconBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 40,
    height: 40,
    backgroundColor: '#fafafa',
    borderRadius: 20,
    zIndex: 1,
  },
  icon: {
    position: 'relative',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2,
  },
  iconText: {
    fontSize: 16,
    color: '#71717a',
  },
  spinner: {
    fontSize: 16,
    color: '#71717a',
    // TODO: Add rotation animation
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 16,
  },
});