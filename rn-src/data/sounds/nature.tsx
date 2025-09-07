import React from 'react';
import { MaterialIcons, Ionicons, FontAwesome, Feather } from '@expo/vector-icons';

import type { Category } from '../types';
import { getAssetPath } from '@/helpers/path';

export const nature: Category = {
  icon: <MaterialIcons name="nature" size={16} color="#71717a" />,
  id: 'nature',
  sounds: [
    {
      icon: <MaterialIcons name="waves" size={16} color="#71717a" />,
      id: 'river',
      label: 'River',
      src: getAssetPath('/sounds/nature/river.mp3'),
    },
    {
      icon: <MaterialIcons name="water" size={16} color="#71717a" />,
      id: 'waves',
      label: 'Waves',
      src: getAssetPath('/sounds/nature/waves.mp3'),
    },
    {
      icon: <Ionicons name="flame" size={16} color="#71717a" />,
      id: 'campfire',
      label: 'Campfire',
      src: getAssetPath('/sounds/nature/campfire.mp3'),
    },
    {
      icon: <Feather name="wind" size={16} color="#71717a" />,
      id: 'wind',
      label: 'Wind',
      src: getAssetPath('/sounds/nature/wind.mp3'),
    },
    {
      icon: <Feather name="wind" size={16} color="#71717a" />,
      id: 'howling-wind',
      label: 'Howling Wind',
      src: getAssetPath('/sounds/nature/howling-wind.mp3'),
    },
    {
      icon: <MaterialIcons name="park" size={16} color="#71717a" />,
      id: 'wind-in-trees',
      label: 'Wind in Trees',
      src: getAssetPath('/sounds/nature/wind-in-trees.mp3'),
    },
    {
      icon: <MaterialIcons name="water-drop" size={16} color="#71717a" />,
      id: 'waterfall',
      label: 'Waterfall',
      src: getAssetPath('/sounds/nature/waterfall.mp3'),
    },
    {
      icon: <Ionicons name="snow" size={16} color="#71717a" />,
      id: 'walk-in-snow',
      label: 'Walk in Snow',
      src: getAssetPath('/sounds/nature/walk-in-snow.mp3'),
    },
    {
      icon: <Ionicons name="leaf" size={16} color="#71717a" />,
      id: 'walk-on-leaves',
      label: 'Walk on Leaves',
      src: getAssetPath('/sounds/nature/walk-on-leaves.mp3'),
    },
    {
      icon: <MaterialIcons name="terrain" size={16} color="#71717a" />,
      id: 'walk-on-gravel',
      label: 'Walk on Gravel',
      src: getAssetPath('/sounds/nature/walk-on-gravel.mp3'),
    },
    {
      icon: <Ionicons name="water" size={16} color="#71717a" />,
      id: 'droplets',
      label: 'Droplets',
      src: getAssetPath('/sounds/nature/droplets.mp3'),
    },
    {
      icon: <MaterialIcons name="forest" size={16} color="#71717a" />,
      id: 'jungle',
      label: 'Jungle',
      src: getAssetPath('/sounds/nature/jungle.mp3'),
    },
  ],
  title: 'Nature',
};