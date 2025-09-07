import React from 'react';
// TODO: Replace with react-native-vector-icons when installed
// For now using placeholder icons
import { Text } from 'react-native';

import type { Category } from '../types';
import { getAssetPath } from '@/helpers/path';

// Placeholder icon components - will be replaced with vector icons
const PlaceholderIcon = ({ name }: { name: string }) => <Text style={{ fontSize: 16 }}>{name}</Text>;

export const things: Category = {
  icon: <PlaceholderIcon name="🎛️" />,
  id: 'things',
  sounds: [
    {
      icon: <PlaceholderIcon name="⌨️" />,
      id: 'keyboard',
      label: 'Keyboard',
      src: getAssetPath('/sounds/things/keyboard.mp3'),
    },
    {
      icon: <PlaceholderIcon name="⌨️" />,
      id: 'typewriter',
      label: 'Typewriter',
      src: getAssetPath('/sounds/things/typewriter.mp3'),
    },
    {
      icon: <PlaceholderIcon name="📄" />,
      id: 'paper',
      label: 'Paper',
      src: getAssetPath('/sounds/things/paper.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🕐" />,
      id: 'clock',
      label: 'Clock',
      src: getAssetPath('/sounds/things/clock.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🎐" />,
      id: 'wind-chimes',
      label: 'Wind Chimes',
      src: getAssetPath('/sounds/things/wind-chimes.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🥣" />,
      id: 'singing-bowl',
      label: 'Singing Bowl',
      src: getAssetPath('/sounds/things/singing-bowl.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🌪️" />,
      id: 'ceiling-fan',
      label: 'Ceiling Fan',
      src: getAssetPath('/sounds/things/ceiling-fan.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🧺" />,
      id: 'dryer',
      label: 'Dryer',
      src: getAssetPath('/sounds/things/dryer.mp3'),
    },
    {
      icon: <PlaceholderIcon name="📽️" />,
      id: 'slide-projector',
      label: 'Slide Projector',
      src: getAssetPath('/sounds/things/slide-projector.mp3'),
    },
    {
      icon: <PlaceholderIcon name="💧" />,
      id: 'boiling-water',
      label: 'Boiling Water',
      src: getAssetPath('/sounds/things/boiling-water.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🫧" />,
      id: 'bubbles',
      label: 'Bubbles',
      src: getAssetPath('/sounds/things/bubbles.mp3'),
    },
    {
      icon: <PlaceholderIcon name="📻" />,
      id: 'tuning-radio',
      label: 'Tuning Radio',
      src: getAssetPath('/sounds/things/tuning-radio.mp3'),
    },
    {
      icon: <PlaceholderIcon name="📡" />,
      id: 'morse-code',
      label: 'Morse Code',
      src: getAssetPath('/sounds/things/morse-code.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🧺" />,
      id: 'washing-machine',
      label: 'Washing Machine',
      src: getAssetPath('/sounds/things/washing-machine.mp3'),
    },
    {
      icon: <PlaceholderIcon name="💿" />,
      id: 'vinyl-effect',
      label: 'Vinyl Effect',
      src: getAssetPath('/sounds/things/vinyl-effect.mp3'),
    },
    {
      icon: <PlaceholderIcon name="🚗" />,
      id: 'windshield-wipers',
      label: 'Windshield Wipers',
      src: getAssetPath('/sounds/things/windshield-wipers.mp3'),
    },
  ],
  title: 'Things',
};