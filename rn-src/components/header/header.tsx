import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { fontFamilies } from '@/hooks/useFonts';

export function Header() {
  return (
    <View style={styles.header}>
      {/* Logo from webapp assets */}
      <View style={styles.logoContainer}>
        <Image 
          source={require('../../../expo-assets/logo-light.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      
      <Text style={styles.title}>Ambient Sounds</Text>
      <Text style={styles.subtitle}>For Focus and Calm</Text>
      <Text style={styles.description}>Free and Open-Source.</Text>
      
      <View style={styles.soundCount}>
        <Text style={styles.soundCountIcon}>🎵</Text>
        <Text style={styles.soundCountText}>84 Sounds</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 24,
    opacity: 0.8,
  },
  logo: {
    width: 48,
    height: 48,
  },
  title: {
    fontSize: 28,
    fontFamily: fontFamilies.headingBold,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: fontFamilies.heading,
    color: '#a1a1aa',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    fontFamily: fontFamilies.body,
    color: '#71717a',
    textAlign: 'center',
    marginBottom: 24,
  },
  soundCount: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(39, 39, 42, 0.8)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(161, 161, 170, 0.3)',
  },
  soundCountIcon: {
    fontSize: 14,
    marginRight: 8,
  },
  soundCountText: {
    fontSize: 14,
    fontFamily: fontFamilies.bodyMedium,
    color: '#d4d4d8',
  },
});