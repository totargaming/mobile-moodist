import React from 'react';
import { View, StyleSheet, ViewStyle, Dimensions } from 'react-native';

interface ContainerProps {
  children: React.ReactNode;
  style?: ViewStyle;
  tight?: boolean;
  wide?: boolean;
}

const SCREEN_WIDTH = Dimensions.get('window').width;

export function Container({ children, style, tight, wide }: ContainerProps) {
  // Match webapp's container logic
  let maxWidth = 600; // Default max-width: 600px
  
  if (tight) maxWidth = 450; // max-width: 450px
  if (wide) maxWidth = 760;   // max-width: 760px
  
  // Calculate 90% of screen width, but constrain to maxWidth
  const containerWidth = Math.min(SCREEN_WIDTH * 0.9, maxWidth);
  
  return (
    <View style={[styles.container]}>
      <View style={[
        styles.innerContainer, 
        { width: containerWidth },
        style
      ]}>
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Center the inner container
    paddingVertical: 20,
  },
  innerContainer: {
    flex: 1, // This is crucial - content needs to expand
    // This mimics webapp's width: 90%; max-width: 600px; margin: 0 auto
  },
});