import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import merge from 'deepmerge';

export interface NoteStore {
  // State
  note: string;
  history: string | null;
  
  // Computed properties
  characters: () => number;
  words: () => number;
  
  // Actions
  write: (note: string) => void;
  clear: () => void;
  restore: () => void;
}

// Simple text counter helper
function countText(text: string) {
  return {
    characters: text.length,
    words: text.trim() ? text.trim().split(/\s+/).length : 0,
  };
}

// AsyncStorage adapter
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

export const useNoteStore = create<NoteStore>()(
  persist(
    (set, get) => ({
      note: '',
      history: null,

      characters() {
        return countText(get().note).characters;
      },

      words() {
        return countText(get().note).words;
      },

      write(note: string) {
        set({ history: null, note });
      },

      clear() {
        const currentNote = get().note;
        if (!currentNote) return;

        set({ history: currentNote, note: '' });
      },

      restore() {
        const history = get().history;
        if (!history) return;

        set({ history: null, note: history });
      },
    }),
    {
      name: 'moodist-note',
      storage: createJSONStorage(() => asyncStorageAdapter),
      partialize: (state) => ({ note: state.note }),
      merge: (persisted, current) =>
        merge(current, persisted as Partial<NoteStore>),
      skipHydration: true,
    },
  ),
);