import React from 'react';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

import type { Category } from '../types';
import { getAssetPath } from '@/helpers/path';

export const animals: Category = {
  icon: <FontAwesome5 name="dog" size={16} color="#71717a" />,
  id: 'animals',
  sounds: [
    {
      icon: <FontAwesome5 name="dove" size={16} color="#71717a" />,
      id: 'birds',
      label: 'Birds',
      src: getAssetPath('/sounds/animals/birds.mp3'),
    },
    {
      icon: <FontAwesome5 name="dove" size={16} color="#71717a" />,
      id: 'seagulls',
      label: 'Seagulls',
      src: getAssetPath('/sounds/animals/seagulls.mp3'),
    },
    {
      icon: <MaterialIcons name="bug-report" size={16} color="#71717a" />,
      id: 'crickets',
      label: 'Crickets',
      src: getAssetPath('/sounds/animals/crickets.mp3'),
    },
    {
      icon: <FontAwesome5 name="wolf-pack-battalion" size={16} color="#71717a" />,
      id: 'wolf',
      label: 'Wolf',
      src: getAssetPath('/sounds/animals/wolf.mp3'),
    },
    {
      icon: <FontAwesome5 name="crow" size={16} color="#71717a" />,
      id: 'owl',
      label: 'Owl',
      src: getAssetPath('/sounds/animals/owl.mp3'),
    },
    {
      icon: <FontAwesome5 name="frog" size={16} color="#71717a" />,
      id: 'frog',
      label: 'Frog',
      src: getAssetPath('/sounds/animals/frog.mp3'),
    },
    {
      icon: <FontAwesome5 name="dog" size={16} color="#71717a" />,
      id: 'dog-barking',
      label: 'Dog Barking',
      src: getAssetPath('/sounds/animals/dog-barking.mp3'),
    },
    {
      icon: <FontAwesome5 name="horse" size={16} color="#71717a" />,
      id: 'horse-gallop',
      label: 'Horse Gallop',
      src: getAssetPath('/sounds/animals/horse-gallop.mp3'),
    },
    {
      icon: <FontAwesome5 name="cat" size={16} color="#71717a" />,
      id: 'cat-purring',
      label: 'Cat Purring',
      src: getAssetPath('/sounds/animals/cat-purring.mp3'),
    },
    {
      icon: <FontAwesome5 name="crow" size={16} color="#71717a" />,
      id: 'crows',
      label: 'Crows',
      src: getAssetPath('/sounds/animals/crows.mp3'),
    },
    {
      icon: <MaterialIcons name="pool" size={16} color="#71717a" />,
      id: 'whale',
      label: 'Whale',
      src: getAssetPath('/sounds/animals/whale.mp3'),
    },
    {
      icon: <MaterialIcons name="hive" size={16} color="#71717a" />,
      id: 'beehive',
      label: 'Beehive',
      src: getAssetPath('/sounds/animals/beehive.mp3'),
    },
    {
      icon: <FontAwesome5 name="dove" size={16} color="#71717a" />,
      id: 'woodpecker',
      label: 'Woodpecker',
      src: getAssetPath('/sounds/animals/woodpecker.mp3'),
    },
    {
      icon: <MaterialIcons name="agriculture" size={16} color="#71717a" />,
      id: 'chickens',
      label: 'Chickens',
      src: getAssetPath('/sounds/animals/chickens.mp3'),
    },
    {
      icon: <MaterialIcons name="agriculture" size={16} color="#71717a" />,
      id: 'cows',
      label: 'Cows',
      src: getAssetPath('/sounds/animals/cows.mp3'),
    },
    {
      icon: <MaterialIcons name="agriculture" size={16} color="#71717a" />,
      id: 'sheep',
      label: 'Sheep',
      src: getAssetPath('/sounds/animals/sheep.mp3'),
    },
  ],
  title: 'Animals',
};