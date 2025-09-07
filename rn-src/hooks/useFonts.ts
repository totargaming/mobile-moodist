import { useFonts as useExpoFonts } from 'expo-font';
import {
  Inter_400Regular,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import {
  InterTight_600SemiBold,
  InterTight_700Bold,
} from '@expo-google-fonts/inter-tight';
import {
  Fraunces_600SemiBold,
} from '@expo-google-fonts/fraunces';

export function useFonts() {
  const [fontsLoaded] = useExpoFonts({
    // Inter fonts (body text)
    'Inter-Regular': Inter_400Regular,
    'Inter-Medium': Inter_500Medium,
    
    // Inter Tight fonts (headings)
    'InterTight-SemiBold': InterTight_600SemiBold,
    'InterTight-Bold': InterTight_700Bold,
    
    // Fraunces font (display text)
    'Fraunces-SemiBold': Fraunces_600SemiBold,
  });

  return fontsLoaded;
}

// Font family names for use in styles
export const fontFamilies = {
  body: 'Inter-Regular',
  bodyMedium: 'Inter-Medium',
  heading: 'InterTight-SemiBold',
  headingBold: 'InterTight-Bold',
  display: 'Fraunces-SemiBold',
} as const;