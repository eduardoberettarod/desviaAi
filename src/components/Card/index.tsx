import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style';
import Separator from '@/components/Separator';
import { colors } from '@/theme/colors';

export default function Card() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Eduardo Beretta</Text>
        <Text>18/08/2026</Text>
      </View>
      <View style={styles.image}>
        <Text>Grave</Text>
      </View>
      <View>
        <Text>Buracos Grandes Fique Alerta</Text>
        <Separator color={colors.gray[500]} />
        <Text>Localização do meu buraco</Text>
      </View>
    </View>
  )
}