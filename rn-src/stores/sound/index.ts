import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import merge from 'deepmerge';

import { type SoundState, createState } from './sound.state';
import { type SoundActions, createActions } from './sound.actions';

// AsyncStorage adapter for zustand
const asyncStorageAdapter = {
  getItem: async (key: string) => {
    try {
      const item = await AsyncStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error('Error reading from AsyncStorage:', error);
      return null;
    }
  },
  setItem: async (key: string, value: any) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error writing to AsyncStorage:', error);
    }
  },
  removeItem: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing from AsyncStorage:', error);
    }
  },
};

export const useSoundStore = create<SoundState & SoundActions>()(
  persist(
    (...a) => ({
      ...createState(...a),
      ...createActions(...a),
    }),
    {
      name: 'moodist-sounds',
      storage: createJSONStorage(() => asyncStorageAdapter),
      partialize: (state) => ({
        globalVolume: state.globalVolume,
        sounds: state.sounds,
      }),
      merge: (persisted, current) =>
        merge(current, persisted as any),
      skipHydration: true,
    },
  ),
);