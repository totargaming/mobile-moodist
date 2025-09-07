import React from 'react';
import { Text } from 'react-native';

import type { Category } from '../types';
import { getAssetPath } from '@/helpers/path';

// Placeholder icon components - will be replaced with vector icons
const PlaceholderIcon = ({ name }: { name: string }) => <Text style={{ fontSize: 16 }}>{name}</Text>;

export const rain: Category = {
  icon: <PlaceholderIcon name="🌧️" />,
  id: 'rain',
  sounds: [
    {
      icon: <PlaceholderIcon name="🌧️" />,
      id: 'light-rain',
      label: 'Light Rain',
      src: getAssetPath('/sounds/rain/light-rain.mp3'),
    },
    {
      icon: <PlaceholderIcon name="⛈️" />,
      id: 'heavy-rain',
      label: 'Heavy Rain',
      src: getAssetPath('/sounds/rain/heavy-rain.mp3'),
    },
    {
      icon: <PlaceholderIcon name="⚡" />,
      id: 'thunder',
      label: 'Thunder',
      src: getAssetPath('/sounds/rain/thunder.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🪟" />,
      id: 'rain-on-window',
      label: 'Rain on Window',
      src: getAssetPath('/sounds/rain/rain-on-window.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🚗" />,
      id: 'rain-on-car-roof',
      label: 'Rain on Car Roof',
      src: getAssetPath('/sounds/rain/rain-on-car-roof.mp3'),
    },
    {
      icon: <PlaceholderIcon name="☂️" />,
      id: 'rain-on-umbrella',
      label: 'Rain on Umbrella',
      src: getAssetPath('/sounds/rain/rain-on-umbrella.mp3'),
    },
    {
      icon: <PlaceholderIcon name="⛺" />,
      id: 'rain-on-tent',
      label: 'Rain on Tent',
      src: getAssetPath('/sounds/rain/rain-on-tent.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🍃" />,
      id: 'rain-on-leaves',
      label: 'Rain on Leaves',
      src: getAssetPath('/sounds/rain/rain-on-leaves.mp3'),
    },
  ],
  title: 'Rain',
};