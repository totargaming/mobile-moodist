import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import merge from 'deepmerge';
import { v4 as uuid } from 'uuid';

interface PresetStore {
  addPreset: (label: string, sounds: Record<string, number>) => void;
  changeName: (id: string, newName: string) => void;
  deletePreset: (id: string) => void;
  presets: Array<{
    id: string;
    label: string;
    sounds: Record<string, number>;
  }>;
}

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

export const usePresetStore = create<PresetStore>()(
  persist(
    (set, get) => ({
      addPreset(label: string, sounds: Record<string, number>) {
        set({ presets: [{ id: uuid(), label, sounds }, ...get().presets] });
      },

      changeName(id: string, newName: string) {
        const presets = get().presets.map(preset => {
          if (preset.id === id) return { ...preset, label: newName };
          return preset;
        });

        set({ presets });
      },

      deletePreset(id: string) {
        set({ presets: get().presets.filter(preset => preset.id !== id) });
      },

      presets: [],
    }),
    {
      name: 'moodist-presets',
      storage: createJSONStorage(() => asyncStorageAdapter),
      partialize: (state) => ({ presets: state.presets }),
      merge: (persisted, current) =>
        merge(current, persisted as Partial<PresetStore>),
      
      // Migration function for version compatibility
      migrate: (persistedState: unknown, version: number) => {
        let persisted = persistedState as Partial<PresetStore>;

        // In version 0, presets didn't have an ID
        if (version < 1) {
          persisted = {
            ...persisted,
            presets: (persisted.presets || []).map(preset => {
              if ((preset as any).id) return preset;
              return { ...preset, id: uuid() };
            }),
          } as PresetStore;
        }

        return persisted as PresetStore;
      },
      version: 1,
      skipHydration: true,
    },
  ),
);