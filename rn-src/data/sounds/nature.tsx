import React from 'react';
// TODO: Replace with react-native-vector-icons when installed
// For now using placeholder icons
import { Text } from 'react-native';

import type { Category } from '../types';
import { getAssetPath } from '@/helpers/path';

// Placeholder icon components - will be replaced with vector icons
const PlaceholderIcon = ({ name }: { name: string }) => <Text style={{ fontSize: 16 }}>{name}</Text>;

export const nature: Category = {
  icon: <PlaceholderIcon name="🌲" />,
  id: 'nature',
  sounds: [
    {
      icon: <PlaceholderIcon name="🌊" />,
      id: 'river',
      label: 'River',
      src: getAssetPath('/sounds/nature/river.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🌊" />,
      id: 'waves',
      label: 'Waves',
      src: getAssetPath('/sounds/nature/waves.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🔥" />,
      id: 'campfire',
      label: 'Campfire',
      src: getAssetPath('/sounds/nature/campfire.mp3'),
    },
    {
      icon: <PlaceholderIcon name="💨" />,
      id: 'wind',
      label: 'Wind',
      src: getAssetPath('/sounds/nature/wind.mp3'),
    },
    {
      icon: <PlaceholderIcon name="💨" />,
      id: 'howling-wind',
      label: 'Howling Wind',
      src: getAssetPath('/sounds/nature/howling-wind.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🌲" />,
      id: 'wind-in-trees',
      label: 'Wind in Trees',
      src: getAssetPath('/sounds/nature/wind-in-trees.mp3'),
    },
    {
      icon: <PlaceholderIcon name="💧" />,
      id: 'waterfall',
      label: 'Waterfall',
      src: getAssetPath('/sounds/nature/waterfall.mp3'),
    },
    {
      icon: <PlaceholderIcon name="❄️" />,
      id: 'walk-in-snow',
      label: 'Walk in Snow',
      src: getAssetPath('/sounds/nature/walk-in-snow.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🍂" />,
      id: 'walk-on-leaves',
      label: 'Walk on Leaves',
      src: getAssetPath('/sounds/nature/walk-on-leaves.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🪨" />,
      id: 'walk-on-gravel',
      label: 'Walk on Gravel',
      src: getAssetPath('/sounds/nature/walk-on-gravel.mp3'),
    },
    {
      icon: <PlaceholderIcon name="💧" />,
      id: 'droplets',
      label: 'Droplets',
      src: getAssetPath('/sounds/nature/droplets.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🌴" />,
      id: 'jungle',
      label: 'Jungle',
      src: getAssetPath('/sounds/nature/jungle.mp3'),
    },
  ],
  title: 'Nature',
};