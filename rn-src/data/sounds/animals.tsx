import { Text } from 'react-native';

import type { Category } from '../types';
import { getAssetPath } from '@/helpers/path';

// Placeholder icon components - will be replaced with vector icons
const PlaceholderIcon = ({ name }: { name: string }) => <Text style={{ fontSize: 16 }}>{name}</Text>;

export const animals: Category = {
  icon: <PlaceholderIcon name="🐕" />,
  id: 'animals',
  sounds: [
    {
      icon: <PlaceholderIcon name="🐦" />,
      id: 'birds',
      label: 'Birds',
      src: getAssetPath('/sounds/animals/birds.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🕊️" />,
      id: 'seagulls',
      label: 'Seagulls',
      src: getAssetPath('/sounds/animals/seagulls.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🦗" />,
      id: 'crickets',
      label: 'Crickets',
      src: getAssetPath('/sounds/animals/crickets.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🐺" />,
      id: 'wolf',
      label: 'Wolf',
      src: getAssetPath('/sounds/animals/wolf.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🦉" />,
      id: 'owl',
      label: 'Owl',
      src: getAssetPath('/sounds/animals/owl.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🐸" />,
      id: 'frog',
      label: 'Frog',
      src: getAssetPath('/sounds/animals/frog.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🐕" />,
      id: 'dog-barking',
      label: 'Dog Barking',
      src: getAssetPath('/sounds/animals/dog-barking.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🐎" />,
      id: 'horse-gallop',
      label: 'Horse Gallop',
      src: getAssetPath('/sounds/animals/horse-gallop.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🐱" />,
      id: 'cat-purring',
      label: 'Cat Purring',
      src: getAssetPath('/sounds/animals/cat-purring.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🦅" />,
      id: 'crows',
      label: 'Crows',
      src: getAssetPath('/sounds/animals/crows.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🐋" />,
      id: 'whale',
      label: 'Whale',
      src: getAssetPath('/sounds/animals/whale.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🐝" />,
      id: 'beehive',
      label: 'Beehive',
      src: getAssetPath('/sounds/animals/beehive.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🐦" />,
      id: 'woodpecker',
      label: 'Woodpecker',
      src: getAssetPath('/sounds/animals/woodpecker.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🐔" />,
      id: 'chickens',
      label: 'Chickens',
      src: getAssetPath('/sounds/animals/chickens.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🐄" />,
      id: 'cows',
      label: 'Cows',
      src: getAssetPath('/sounds/animals/cows.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🐑" />,
      id: 'sheep',
      label: 'Sheep',
      src: getAssetPath('/sounds/animals/sheep.mp3'),
    },
  ],
  title: 'Animals',
};