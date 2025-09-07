import React from 'react';
// TODO: Replace with react-native-vector-icons when installed
// For now using placeholder icons
import { Text } from 'react-native';

import type { Category } from '../types';
import { getAssetPath } from '@/helpers/path';

// Placeholder icon components - will be replaced with vector icons
const PlaceholderIcon = ({ name }: { name: string }) => <Text style={{ fontSize: 16 }}>{name}</Text>;

export const transport: Category = {
  icon: <PlaceholderIcon name="🚗" />,
  id: 'transport',
  sounds: [
    {
      icon: <PlaceholderIcon name="🚂" />,
      id: 'train',
      label: 'Train',
      src: getAssetPath('/sounds/transport/train.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🚂" />,
      id: 'inside-a-train',
      label: 'Inside a Train',
      src: getAssetPath('/sounds/transport/inside-a-train.mp3'),
    },
    {
      icon: <PlaceholderIcon name="✈️" />,
      id: 'airplane',
      label: 'Airplane',
      src: getAssetPath('/sounds/transport/airplane.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🔱" />,
      id: 'submarine',
      label: 'Submarine',
      src: getAssetPath('/sounds/transport/submarine.mp3'),
    },
    {
      icon: <PlaceholderIcon name="⛵" />,
      id: 'sailboat',
      label: 'Sailboat',
      src: getAssetPath('/sounds/transport/sailboat.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🚣" />,
      id: 'rowing-boat',
      label: 'Rowing Boat',
      src: getAssetPath('/sounds/transport/rowing-boat.mp3'),
    },
  ],
  title: 'Transport',
};