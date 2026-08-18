import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './style'
import { FontAwesome6 } from '@expo/vector-icons';

import Input from '@/components/Input';
import { colors } from '@/theme/colors';


export default function Index() {

  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: insets.top + 10 }]}>

      <View style={styles.header}>
        <FontAwesome6 name="location-dot" size={64} color="black" />
      </View>

      <View style={styles.form}>
        <Input
          label={'Email'}
          placeholder={'seu@email.com'}
          placeholderTextColor={colors.gray[700]}
          />
        <Input
          label={'Senha'}
          placeholder={'********'}
          placeholderTextColor={colors.gray[700]}
        />
      </View>

    </View>
  )
}