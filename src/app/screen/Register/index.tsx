import { View, Text, Pressable, Alert, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Banner from '@/components/Banner';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { colors } from '@/theme/colors';

export default function Register() {

  const insets = useSafeAreaInsets()

  const handleGetLocation = () => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        Alert.alert(
          'Localização obtida',
          `Latitude: ${coords.latitude}\nLongitude: ${coords.longitude}`,
        )
      },
      () => Alert.alert('Não foi possível obter sua localização.'),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 },
    )
  }

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingTop: insets.top + 10, paddingBottom: insets.bottom + 120 }]}>

      <View style={styles.header}>
        <Text style={styles.title}>Registrar Buraco</Text>
        <Text style={styles.subtitle}>Forneça os detalhes da infraestrutura danificada para que possamos notificar as autoridades competentes.</Text>
      </View>

      <View style={styles.content}>

        <View style={{ gap: 10 }}>
          <Text style={styles.bannerText}>Evidência Visual</Text>
          <Banner />
        </View>

        <View style={styles.form}>
          <Text style={styles.locationText}>Localização do problema</Text>
          <Input
            label={'Bairro'}
            placeholder={'Bairro'}
            placeholderTextColor={colors.gray[700]}
          />
          <Input
            label={'Rua'}
            placeholder={'Nome da rua'}
            placeholderTextColor={colors.gray[700]}
          />
          <Input
            label={'Número'}
            placeholder={'Número ou ponto de referência'}
            placeholderTextColor={colors.gray[700]}
          />
          <Input
            label={'Complemento'}
            placeholder={'Complemento (opcional)'}
            placeholderTextColor={colors.gray[700]}
          />

          <Button
            title={'Pegar minha localização'}
            borderColor={colors.white}
            color={colors.white}
            style={{ marginTop: 12 }}
          />
        </View>

        <View style={{ marginTop: 36 }}>

          <Input
            label={'Descrição'}
            isTextarea={true}
            placeholder={'Ex: Buraco profundo na faixa da direita, causando riscos de danos aos pneus.'}
            placeholderTextColor={colors.gray[700]}
          />

          <Button
            title={'Salvar Ocorrência'}
            borderColor={colors.white}
            color={colors.white}
            style={{ marginTop: 24 }}
            icon={'send'}
            colorText={colors.black}
          />
        </View>

      </View>


    </ScrollView>
  )
}