import type { StateCreator } from 'zustand';
import type { SoundActions } from './sound.actions';

import { sounds } from '@/data/sounds';

export interface SoundState {
  getFavorites: () => Array<string>;
  globalVolume: number;
  history: {
    [id: string]: {
      isFavorite: boolean;
      isSelected: boolean;
      volume: number;
    };
  } | null;
  isPlaying: boolean;
  locked: boolean;
  noSelected: () => boolean;
  sounds: {
    [id: string]: {
      isFavorite: boolean;
      isSelected: boolean;
      volume: number;
    };
  };
}

export const createState: StateCreator<
  SoundState & SoundActions,
  [],
  [],
  SoundState
> = (set, get) => {
  const state: SoundState = {
    getFavorites() {
      const { sounds } = get();
      const ids = Object.keys(sounds);
      const favorites = ids.filter(id => sounds[id].isFavorite);

      return favorites;
    },
    globalVolume: 1,
    history: null,
    isPlaying: false,
    locked: false,
    noSelected() {
      const { sounds } = get();
      const keys = Object.keys(sounds);

      return keys.every(key => !sounds[key].isSelected);
    },
    sounds: {},
  };

  // Initialize sounds data
  const { categories } = sounds;
  categories.forEach(category => {
    const { sounds: categorySounds } = category;
    categorySounds.forEach(sound => {
      state.sounds[sound.id] = {
        isFavorite: false,
        isSelected: false,
        volume: 0.5,
      };
    });
  });

  return state;
};