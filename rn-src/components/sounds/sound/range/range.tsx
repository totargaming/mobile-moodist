import React from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

import { useSoundStore } from '@/stores/sound';

interface RangeProps {
  id: string;
  label: string;
}

export function Range({ id, label }: RangeProps) {
  const updateVolume = useSoundStore(state => state.updateVolume);
  const volume = useSoundStore(state => state.sounds[id]?.volume || 0.5);
  const isSelected = useSoundStore(state => state.sounds[id]?.isSelected || false);
  const locked = useSoundStore(state => state.locked);

  const handleVolumeChange = async (value: number) => {
    if (!locked && isSelected) {
      await updateVolume(id, value);
    }
  };

  return (
    <View style={styles.container}>
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={1}
        value={volume}
        onValueChange={handleVolumeChange}
        disabled={!isSelected || locked}
        minimumTrackTintColor={isSelected ? '#ffffff' : '#71717a'}
        maximumTrackTintColor="rgba(113, 113, 122, 0.3)"
        thumbStyle={styles.thumb}
        trackStyle={styles.track}
        step={0.01} // Smooth slider movement (100 steps)
        accessibilityLabel={`${label} sound volume`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 20,
    justifyContent: 'center',
  },
  slider: {
    width: '100%',
    height: 20,
  },
  thumb: {
    width: 16,
    height: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  track: {
    height: 3,
    borderRadius: 1.5,
  },
});