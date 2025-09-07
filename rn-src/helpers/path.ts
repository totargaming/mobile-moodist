// React Native asset path helper
// In React Native/Expo, assets are resolved from the assets/ directory

export function getAssetPath(relativePath: string): string {
  // Remove leading slash for consistency  
  const cleanPath = relativePath.replace(/^\/+/, '');
  
  // For Expo, assets are resolved from the assets/ directory
  // Convert web paths like '/sounds/nature/river.mp3' to 'assets/sounds/nature/river.mp3'
  return `assets/${cleanPath}`;
}

// Helper to get sound asset URI for expo-av
export function getSoundAssetUri(soundPath: string): string {
  // expo-av can load assets from the bundle using Asset
  const cleanPath = soundPath.replace(/^\/+/, '');
  return cleanPath; // expo-av will resolve this from assets/
}