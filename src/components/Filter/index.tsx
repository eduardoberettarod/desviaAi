import { Pressable, View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from './style';

type FilterType = 'normal' | 'high' | 'low';

type Props = {
  left: string,
  middle: string,
  right: string
}

export default function Filter({ left, middle, right }: Props) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('normal');

  const handleFilter = (filter: FilterType) => {
    setSelectedFilter(filter);
  };

  return (
    <View style={styles.container}>

      <Pressable
        style={[
          styles.left,
          selectedFilter === 'normal' && styles.selected
        ]}
        onPress={() => handleFilter('normal')}
      >
        <Text style={[
          styles.normal,
          selectedFilter === 'normal' && styles.selectedText
        ]}>{left}</Text>
      </Pressable>

      <Pressable
        style={[
          styles.middle,
          selectedFilter === 'high' && styles.selected
        ]}
        onPress={() => handleFilter('high')}
      >
        <Text style={[
          styles.high,
          selectedFilter === 'high' && styles.selectedText
        ]}>{middle}</Text>
      </Pressable>

      <Pressable
        style={[
          styles.right,
          selectedFilter === 'low' && styles.selected
        ]}
        onPress={() => handleFilter('low')}
      >
        <Text style={[
          styles.low,
          selectedFilter === 'low' && styles.selectedText
        ]}>{right}</Text>
      </Pressable>

    </View>
  )
}