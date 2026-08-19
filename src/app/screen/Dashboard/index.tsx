import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Card from '@/components/Card';

export default function Dashboard() {

  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>

      <View style={styles.header}>
        <Text style={styles.title}>Publicações Recentes</Text>
        <Text style={styles.subtitle}>Acompanhe os relatos da comunidade na sua região.</Text>
      </View>
      
      <View>
        <Card />
      </View>

    </View>
  )
}