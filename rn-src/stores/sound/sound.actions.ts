import type { StateCreator } from 'zustand';
import type { SoundState } from './sound.state';
import { audioManager } from '@/services/audio';

export interface SoundActions {
  // Playback actions
  play: () => void;
  pause: () => void;
  toggle: () => void;
  lock: () => void;
  unlock: () => void;
  
  // Sound management actions
  selectSound: (id: string) => Promise<void>;
  unselectSound: (id: string) => Promise<void>;
  toggleSound: (id: string) => Promise<void>;
  updateVolume: (id: string, volume: number) => Promise<void>;
  setGlobalVolume: (volume: number) => Promise<void>;
  
  // Favorites
  toggleFavorite: (id: string) => void;
  
  // Utility actions
  unselectAll: () => void;
  saveHistory: () => void;
  restoreHistory: () => void;
}

export const createActions: StateCreator<
  SoundState & SoundActions,
  [],
  [],
  SoundActions
> = (set, get) => ({
  async play() {
    set({ isPlaying: true });
    
    const { sounds } = get();
    const selectedSounds = Object.keys(sounds).filter(id => sounds[id]?.isSelected);
    
    // Start playing all selected sounds
    for (const soundId of selectedSounds) {
      try {
        // Get the sound data to find the asset path
        const soundData = await import('@/data/sounds').then(module => {
          return module.sounds.categories
            .flatMap(cat => cat.sounds)
            .find(s => s.id === soundId);
        });
        
        if (soundData) {
          // Create/get the sound instance and play it
          const soundInstance = await audioManager.getSound(soundId, soundData.src);
          if (soundInstance && soundInstance.isLoaded) {
            await audioManager.play(soundId);
          }
        }
      } catch (error) {
        console.error(`Error playing sound ${soundId}:`, error);
      }
    }
  },

  async pause() {
    set({ isPlaying: false });
    await audioManager.pauseAll();
  },

  toggle() {
    const { isPlaying } = get();
    if (isPlaying) {
      get().pause();
    } else {
      get().play();
    }
  },

  lock() {
    set({ locked: true });
  },

  unlock() {
    set({ locked: false });
  },

  async selectSound(id: string) {
    set((state) => ({
      sounds: {
        ...state.sounds,
        [id]: {
          ...state.sounds[id],
          isSelected: true,
        },
      },
    }));

    try {
      // Auto-load and start playing the sound when selected
      const soundData = await import('@/data/sounds').then(module => {
        return module.sounds.categories
          .flatMap(cat => cat.sounds)
          .find(s => s.id === id);
      });
      
      if (soundData) {
        const soundInstance = await audioManager.getSound(id, soundData.src);
        if (soundInstance && soundInstance.isLoaded) {
          const { isPlaying } = get();
          if (isPlaying) {
            await audioManager.play(id);
          }
        }
      }
    } catch (error) {
      console.error(`Error loading/playing sound ${id}:`, error);
    }
  },

  async unselectSound(id: string) {
    set((state) => ({
      sounds: {
        ...state.sounds,
        [id]: {
          ...state.sounds[id],
          isSelected: false,
        },
      },
    }));

    // Stop the sound when unselected
    try {
      await audioManager.stop(id);
    } catch (error) {
      console.error(`Error stopping sound ${id}:`, error);
    }
  },

  async toggleSound(id: string) {
    const { sounds } = get();
    if (sounds[id]?.isSelected) {
      await get().unselectSound(id);
    } else {
      await get().selectSound(id);
    }
  },

  async updateVolume(id: string, volume: number) {
    set((state) => ({
      sounds: {
        ...state.sounds,
        [id]: {
          ...state.sounds[id],
          volume,
        },
      },
    }));
    
    await audioManager.setVolume(id, volume);
  },

  async setGlobalVolume(volume: number) {
    set({ globalVolume: volume });
    await audioManager.setGlobalVolume(volume);
  },

  toggleFavorite(id: string) {
    set((state) => ({
      sounds: {
        ...state.sounds,
        [id]: {
          ...state.sounds[id],
          isFavorite: !state.sounds[id]?.isFavorite,
        },
      },
    }));
  },

  unselectAll() {
    set((state) => {
      const updatedSounds = { ...state.sounds };
      Object.keys(updatedSounds).forEach(id => {
        updatedSounds[id] = {
          ...updatedSounds[id],
          isSelected: false,
        };
      });
      return { sounds: updatedSounds };
    });
  },

  saveHistory() {
    const { sounds } = get();
    set({ history: { ...sounds } });
  },

  restoreHistory() {
    const { history } = get();
    if (history) {
      set({ sounds: { ...history } });
    }
  },
});