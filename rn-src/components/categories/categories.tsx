import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { Category } from './category/category';
import { Header } from '@/components/header/header';
import { Buttons } from '@/components/buttons/buttons';

import type { Categories as CategoriesType } from '@/data/types';

interface CategoriesProps {
  categories: CategoriesType;
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <Buttons />
      {categories.map((category) => (
        <Category 
          key={category.id}
          functional={category.id !== 'favorites'} 
          {...category} 
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingBottom: 20,
  },
});