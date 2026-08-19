import { View, Text, Pressable, Alert, ScrollView } from 'react-native'
import React from 'react'
import { styles } from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Banner from '@/components/Banner';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { colors } from '@/theme/colors';
import Filter from '@/components/Filter';

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

        <View style={{
          flexDirection: 'column',
          gap: 6,
          marginBottom: 12
        }}>
          <Input
            placeholder={'Ex: Buraco profundo na via'}
            placeholderTextColor={colors.gray[700]}
            label={'TÍTULO DA OCORRÊNCIA'}
          />
        </View>

        <View style={{ gap: 10 }}>
          <Text style={styles.label}>Evidência Visual</Text>
          <Banner />
        </View>

        <View style={{ gap: 10, marginTop: 12 }}>
          <Text style={styles.label}>Nivel de Periculosidade</Text>
          <Filter
            left={'Baixo'}
            middle={'Médio'}
            right={'Grave'}
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Localização do problema</Text>
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

        <View style={{ gap: 10, marginTop: 36 }}>
          <Text style={styles.label}>Tipo de via</Text>
          <Filter
            left={'Rua'}
            middle={'Calçada'}
            right={'Estrada'}
          />
        </View>

        <View style={{ marginTop: 12 }}>

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