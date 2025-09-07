import React, { useCallback } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

import { useSoundStore } from '@/stores/sound';

export function UnselectButton() {
  const noSelected = useSoundStore(state => state.noSelected());
  const restoreHistory = useSoundStore(state => state.restoreHistory);
  const hasHistory = useSoundStore(state => !!state.history);
  const unselectAll = useSoundStore(state => state.unselectAll);
  const locked = useSoundStore(state => state.locked);

  const handleToggle = useCallback(() => {
    if (locked) return;
    if (hasHistory) restoreHistory();
    else if (!noSelected) unselectAll();
  }, [hasHistory, noSelected, unselectAll, restoreHistory, locked]);

  // Only show button if there are selected sounds or history
  if (noSelected && !hasHistory) {
    return null;
  }

  return (
    <TouchableOpacity
      style={[styles.unselectButton, (noSelected && !hasHistory) && styles.disabled]}
      onPress={handleToggle}
      disabled={noSelected && !hasHistory}
      accessibilityRole="button"
      accessibilityLabel={
        hasHistory
          ? 'Restore Unselected Sounds'
          : 'Unselect All Sounds'
      }
    >
      <Text style={styles.buttonText}>
        {hasHistory ? '↶' : '🗑'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  unselectButton: {
    width: 44,
    height: 44,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 22,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabled: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderColor: 'rgba(255, 255, 255, 0.1)',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
});