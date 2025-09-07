import React from 'react';
import { Text } from 'react-native';

import type { Category } from '../types';
import { getAssetPath } from '@/helpers/path';

// Placeholder icon components - will be replaced with vector icons
const PlaceholderIcon = ({ name }: { name: string }) => <Text style={{ fontSize: 16 }}>{name}</Text>;

export const urban: Category = {
  icon: <PlaceholderIcon name="🏙️" />,
  id: 'urban',
  sounds: [
    {
      icon: <PlaceholderIcon name="🛣️" />,
      id: 'highway',
      label: 'Highway',
      src: getAssetPath('/sounds/urban/highway.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🛤️" />,
      id: 'road',
      label: 'Road',
      src: getAssetPath('/sounds/urban/road.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🚨" />,
      id: 'ambulance-siren',
      label: 'Ambulance Siren',
      src: getAssetPath('/sounds/urban/ambulance-siren.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🌆" />,
      id: 'busy-street',
      label: 'Busy Street',
      src: getAssetPath('/sounds/urban/busy-street.mp3'),
    },
    {
      icon: <PlaceholderIcon name="👥" />,
      id: 'crowd',
      label: 'Crowd',
      src: getAssetPath('/sounds/urban/crowd.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🚗" />,
      id: 'traffic',
      label: 'Traffic',
      src: getAssetPath('/sounds/urban/traffic.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🎆" />,
      id: 'fireworks',
      label: 'Fireworks',
      src: getAssetPath('/sounds/urban/fireworks.mp3'),
    },
  ],
  title: 'Urban',
};