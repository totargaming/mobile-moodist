import React from 'react';
// TODO: Replace with react-native-vector-icons when installed
// For now using placeholder icons
import { Text } from 'react-native';

import type { Category } from '../types';
import { getAssetPath } from '@/helpers/path';

// Placeholder icon components - will be replaced with vector icons
const PlaceholderIcon = ({ name }: { name: string }) => <Text style={{ fontSize: 16 }}>{name}</Text>;

export const places: Category = {
  icon: <PlaceholderIcon name="📍" />,
  id: 'places',
  sounds: [
    {
      icon: <PlaceholderIcon name="☕" />,
      id: 'cafe',
      label: 'Cafe',
      src: getAssetPath('/sounds/places/cafe.mp3'),
    },
    {
      icon: <PlaceholderIcon name="✈️" />,
      id: 'airport',
      label: 'Airport',
      src: getAssetPath('/sounds/places/airport.mp3'),
    },
    {
      icon: <PlaceholderIcon name="⛪" />,
      id: 'church',
      label: 'Church',
      src: getAssetPath('/sounds/places/church.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🛕" />,
      id: 'temple',
      label: 'Temple',
      src: getAssetPath('/sounds/places/temple.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🚧" />,
      id: 'construction-site',
      label: 'Construction Site',
      src: getAssetPath('/sounds/places/construction-site.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🤿" />,
      id: 'underwater',
      label: 'Underwater',
      src: getAssetPath('/sounds/places/underwater.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🍺" />,
      id: 'crowded-bar',
      label: 'Crowded Bar',
      src: getAssetPath('/sounds/places/crowded-bar.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🏘️" />,
      id: 'night-village',
      label: 'Night Village',
      src: getAssetPath('/sounds/places/night-village.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🚇" />,
      id: 'subway-station',
      label: 'Subway Station',
      src: getAssetPath('/sounds/places/subway-station.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🏢" />,
      id: 'office',
      label: 'Office',
      src: getAssetPath('/sounds/places/office.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🛒" />,
      id: 'supermarket',
      label: 'Supermarket',
      src: getAssetPath('/sounds/places/supermarket.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🎠" />,
      id: 'carousel',
      label: 'Carousel',
      src: getAssetPath('/sounds/places/carousel.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🧪" />,
      id: 'laboratory',
      label: 'Laboratory',
      src: getAssetPath('/sounds/places/laboratory.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🧺" />,
      id: 'laundry-room',
      label: 'Laundry Room',
      src: getAssetPath('/sounds/places/laundry-room.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🍽️" />,
      id: 'restaurant',
      label: 'Restaurant',
      src: getAssetPath('/sounds/places/restaurant.mp3'),
    },
    {
      icon: <PlaceholderIcon name="📚" />,
      id: 'library',
      label: 'Library',
      src: getAssetPath('/sounds/places/library.mp3'),
    },
  ],
  title: 'Places',
};