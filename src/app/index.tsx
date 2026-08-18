import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './style';
import { FontAwesome6 } from '@expo/vector-icons';

import Input from '@/components/Input';
import { colors } from '@/theme/colors';
import Button from '@/components/Button';
import Separator from '@/components/Separator';
import { router } from 'expo-router';


export default function Index() {

  const insets = useSafeAreaInsets()

  return (
    <View style={[styles.container, { paddingTop: insets.top + 30 }]}>

      <View style={styles.header}>
        <FontAwesome6 name="location-dot" size={64} color={colors.white} />
        <Text style={styles.title}>DesviaAi</Text>
        <Text style={styles.subtitle}>Cidadania em movimento.</Text>
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

        <View style={styles.footer}>

          <View style={{ flexDirection: 'row', gap: 8, marginTop: 36 }}>
            <Button
              title={'Criar conta'}
              borderColor={colors.gray[300]}
              colorText={colors.gray[300]}
              style={{ flex: 1 }}
            />
            <Button
              title={'Entrar'}
              color={colors.white}
              borderColor={colors.white}
              style={{ flex: 1 }}
              onPress={() => router.push('./screen/Dashboard')}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 24,
              paddingHorizontal: 4
            }}
          >
            <Separator color={colors.gray[700]} style={{ flex: 1, marginRight: 12 }} />

            <Text style={{ color: colors.gray[300], fontSize: 12, fontWeight: '700' }}>OU</Text>
            
            <Separator color={colors.gray[700]} style={{ flex: 1, marginLeft: 12 }} />
          </View>

          <Button
            title={'Login Google'}
            borderColor={colors.white}
            colorText={colors.white}
            haveIcon
            icon={'google'}
            style={{ width: '100%', marginTop: 24 }}
          />

        </View>


      </View>

    </View>
  )
}