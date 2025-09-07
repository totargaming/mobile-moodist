import React, { useCallback, useEffect } from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

import { useSoundStore } from '@/stores/sound';

export function PlayButton() {
  const isPlaying = useSoundStore(state => state.isPlaying);
  const pause = useSoundStore(state => state.pause);
  const toggle = useSoundStore(state => state.toggle);
  const noSelected = useSoundStore(state => state.noSelected());
  const locked = useSoundStore(state => state.locked);

  const handleToggle = useCallback(() => {
    if (locked) return;

    if (noSelected) {
      Alert.alert('No Sounds Selected', 'Please first select a sound to play.');
      return;
    }

    toggle();
  }, [toggle, noSelected, locked]);

  useEffect(() => {
    if (isPlaying && noSelected) pause();
  }, [isPlaying, pause, noSelected]);

  return (
    <TouchableOpacity
      style={[styles.playButton, noSelected && styles.disabled]}
      onPress={handleToggle}
      disabled={noSelected}
      accessibilityRole="button"
      accessibilityLabel={isPlaying ? 'Pause sounds' : 'Play sounds'}
    >
      <Text style={[styles.buttonText, noSelected && styles.disabledText]}>
        {isPlaying ? '⏸ Pause' : '▶️ Play'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  playButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  disabledText: {
    color: 'rgba(255, 255, 255, 0.4)',
  },
});