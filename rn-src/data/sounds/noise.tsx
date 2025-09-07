import React from 'react';
// TODO: Replace with react-native-vector-icons when installed
// For now using placeholder icons
import { Text } from 'react-native';

import type { Category } from '../types';
import { getAssetPath } from '@/helpers/path';

// Placeholder icon components - will be replaced with vector icons
const PlaceholderIcon = ({ name }: { name: string }) => <Text style={{ fontSize: 16 }}>{name}</Text>;

export const noise: Category = {
  icon: <PlaceholderIcon name="📶" />,
  id: 'noise',
  sounds: [
    {
      icon: <PlaceholderIcon name="📈" />,
      id: 'white-noise',
      label: 'White Noise',
      src: getAssetPath('/sounds/noise/white-noise.wav'),
    },
    {
      icon: <PlaceholderIcon name="📈" />,
      id: 'pink-noise',
      label: 'Pink Noise',
      src: getAssetPath('/sounds/noise/pink-noise.wav'),
    },
    {
      icon: <PlaceholderIcon name="📈" />,
      id: 'brown-noise',
      label: 'Brown Noise',
      src: getAssetPath('/sounds/noise/brown-noise.wav'),
    },
  ],
  title: 'Noise',
};