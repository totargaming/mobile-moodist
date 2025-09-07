import React, { useState, useMemo, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { Sound } from './sound/sound';

import type { Sounds } from '@/data/types';

interface SoundsProps {
  functional: boolean;
  id: string;
  sounds: Sounds;
}

export function Sounds({ functional, id, sounds }: SoundsProps) {
  const [showAll, setShowAll] = useState(false);
  
  const [hiddenSelections, setHiddenSelections] = useState<{
    [key: string]: boolean;
  }>({});

  const hasHiddenSelection = useMemo(() => {
    const keys = Object.keys(hiddenSelections);
    return keys.some(key => hiddenSelections[key]);
  }, [hiddenSelections]);

  const selectHidden = useCallback((key: string) => {
    setHiddenSelections(prev => ({
      ...prev,
      [key]: true,
    }));
  }, []);

  const unselectHidden = useCallback((key: string) => {
    setHiddenSelections(prev => ({
      ...prev,
      [key]: false,
    }));
  }, []);

  const toggleMore = () => {
    setShowAll(prev => !prev);
  };

  const visibleSounds = showAll ? sounds : sounds.slice(0, 6);
  
  return (
    <View>
      <View style={styles.soundsGrid}>
        {visibleSounds.map((sound) => (
          <Sound
            key={sound.id}
            {...sound}
            functional={functional}
            selectHidden={selectHidden}
            unselectHidden={unselectHidden}
          />
        ))}
        
        {/* Add empty cells if needed for grid alignment */}
        {visibleSounds.length % 2 !== 0 && <View style={styles.emptyCell} />}
      </View>

      {sounds.length > 6 && (
        <TouchableOpacity
          style={[
            styles.showMoreButton,
            hasHiddenSelection && !showAll && styles.activeButton
          ]}
          onPress={toggleMore}
        >
          <Text style={styles.buttonText}>
            {showAll ? 'Show Less' : 'Show More'}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  soundsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 12,
  },
  emptyCell: {
    flex: 1,
    minWidth: '48%',
  },
  showMoreButton: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: 8,
  },
  activeButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});