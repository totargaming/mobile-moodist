import { Audio } from 'expo-av';
import { Asset } from 'expo-asset';
import { getSoundAsset } from './soundAssets';

// Audio instance interface similar to Howler
export interface AudioInstance {
  id: string;
  sound: Audio.Sound | null;
  isLoaded: boolean;
  isPlaying: boolean;
  volume: number;
  loop: boolean;
}

class AudioManager {
  private instances: Map<string, AudioInstance> = new Map();
  private globalVolume: number = 1.0;

  constructor() {
    // Configure audio session for background audio
    this.configureAudioSession();
  }

  private async configureAudioSession() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
    } catch (error) {
      console.error('Error configuring audio session:', error);
    }
  }

  // Create a new audio instance
  async createSound(id: string, assetPath: string): Promise<AudioInstance> {
    try {
      console.log(`Loading sound: ${id} from ${assetPath}`);
      
      // Get the proper asset using our mapping
      const asset = getSoundAsset(id);
      if (!asset) {
        throw new Error(`No asset found for sound ID: ${id}`);
      }
      
      // Create the sound instance
      const { sound } = await Audio.Sound.createAsync(
        asset,
        {
          shouldPlay: false,
          isLooping: true,
          volume: 0.5,
        }
      );

      const instance: AudioInstance = {
        id,
        sound,
        isLoaded: true,
        isPlaying: false,
        volume: 0.5,
        loop: true,
      };

      this.instances.set(id, instance);
      return instance;
    } catch (error) {
      console.error(`Error creating sound ${id}:`, error);
      const failedInstance: AudioInstance = {
        id,
        sound: null,
        isLoaded: false,
        isPlaying: false,
        volume: 0.5,
        loop: true,
      };
      this.instances.set(id, failedInstance);
      return failedInstance;
    }
  }

  // Get or create audio instance
  async getSound(id: string, assetPath?: string): Promise<AudioInstance | null> {
    const existing = this.instances.get(id);
    if (existing) {
      return existing;
    }

    if (assetPath) {
      return await this.createSound(id, assetPath);
    }

    return null;
  }

  // Play a sound
  async play(id: string): Promise<void> {
    const instance = this.instances.get(id);
    if (!instance || !instance.sound || !instance.isLoaded) {
      return;
    }

    try {
      await instance.sound.playAsync();
      instance.isPlaying = true;
    } catch (error) {
      console.error(`Error playing sound ${id}:`, error);
    }
  }

  // Pause a sound
  async pause(id: string): Promise<void> {
    const instance = this.instances.get(id);
    if (!instance || !instance.sound || !instance.isLoaded) {
      return;
    }

    try {
      await instance.sound.pauseAsync();
      instance.isPlaying = false;
    } catch (error) {
      console.error(`Error pausing sound ${id}:`, error);
    }
  }

  // Stop a sound
  async stop(id: string): Promise<void> {
    const instance = this.instances.get(id);
    if (!instance || !instance.sound || !instance.isLoaded) {
      return;
    }

    try {
      await instance.sound.stopAsync();
      instance.isPlaying = false;
    } catch (error) {
      console.error(`Error stopping sound ${id}:`, error);
    }
  }

  // Set volume for a specific sound
  async setVolume(id: string, volume: number): Promise<void> {
    const instance = this.instances.get(id);
    if (!instance || !instance.sound || !instance.isLoaded) {
      return;
    }

    try {
      const finalVolume = Math.max(0, Math.min(1, volume * this.globalVolume));
      await instance.sound.setVolumeAsync(finalVolume);
      instance.volume = volume;
    } catch (error) {
      console.error(`Error setting volume for sound ${id}:`, error);
    }
  }

  // Set global volume
  async setGlobalVolume(volume: number): Promise<void> {
    this.globalVolume = Math.max(0, Math.min(1, volume));
    
    // Update all active sounds
    for (const [id, instance] of this.instances) {
      if (instance.isLoaded && instance.sound) {
        await this.setVolume(id, instance.volume);
      }
    }
  }

  // Pause all sounds
  async pauseAll(): Promise<void> {
    const promises = Array.from(this.instances.keys()).map(id => this.pause(id));
    await Promise.all(promises);
  }

  // Stop all sounds
  async stopAll(): Promise<void> {
    const promises = Array.from(this.instances.keys()).map(id => this.stop(id));
    await Promise.all(promises);
  }

  // Cleanup - unload all sounds
  async cleanup(): Promise<void> {
    for (const [id, instance] of this.instances) {
      if (instance.sound) {
        try {
          await instance.sound.unloadAsync();
        } catch (error) {
          console.error(`Error unloading sound ${id}:`, error);
        }
      }
    }
    this.instances.clear();
  }

  // Get all instances (for debugging/status)
  getAllInstances(): AudioInstance[] {
    return Array.from(this.instances.values());
  }

  // Check if any sounds are playing
  isAnyPlaying(): boolean {
    return Array.from(this.instances.values()).some(instance => instance.isPlaying);
  }
}

// Export singleton instance
export const audioManager = new AudioManager();