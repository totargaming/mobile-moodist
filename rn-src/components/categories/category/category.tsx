import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Sounds } from '@/components/sounds/sounds';

import type { Category } from '@/data/types';

interface CategoryProps extends Category {
  functional?: boolean;
}

export function Category({
  functional = true,
  icon,
  id,
  sounds,
  title,
}: CategoryProps) {
  return (
    <View style={styles.category}>
      <View style={styles.iconContainer}>
        <LinearGradient
          colors={['rgba(163, 163, 163, 0)', 'rgba(163, 163, 163, 0.3)']}
          style={styles.tail}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        />
        
        <LinearGradient
          colors={['#fafafa', '#f4f4f5']}
          style={styles.icon}
        >
          <View style={styles.iconContent}>
            {icon}
          </View>
        </LinearGradient>
      </View>

      <Text style={styles.title}>{title}</Text>

      <Sounds functional={functional} id={id} sounds={sounds} />
    </View>
  );
}

const styles = StyleSheet.create({
  category: {
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  tail: {
    width: 1,
    height: 75,
  },
  icon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 1,
    borderColor: '#d4d4d8',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  iconContent: {
    fontSize: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
    marginBottom: 12,
  },
});