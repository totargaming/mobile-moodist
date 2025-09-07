import React from 'react';
import { View, StyleSheet } from 'react-native';

import { PlayButton } from './play/play';
import { UnselectButton } from './unselect/unselect';

export function Buttons() {
  return (
    <View style={styles.buttons}>
      <PlayButton />
      <UnselectButton />
    </View>
  );
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginBottom: 32,
    marginTop: 20,
  },
});