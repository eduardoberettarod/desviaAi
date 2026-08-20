import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { styles } from './style';
import Separator from '@/components/Separator';
import { colors } from '@/theme/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type StatusType = "low" | "medium" | "high"

type Props = TouchableOpacityProps & {
  status: StatusType
}

export default function Card({ status, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.header}>
        <View style={styles.user}>
          <MaterialCommunityIcons name="account" size={16} color={colors.white} />
          <Text style={styles.userText}>Eduardo Beretta</Text>
        </View>
        <Text style={styles.date}>18/08/2026</Text>
      </View>
      <View style={styles.image}>
        <Text style={[styles.status,
        status === 'low' && styles.low,
        status === 'medium' && styles.medium,
        status === 'high' && styles.high,
        ]}>
          {status === 'medium' && 'médio'}
          {status === 'high' && 'alto'}
          {status === 'low' && 'baixo'}
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.title}>Buracos Grandes Fique Alerta</Text>
        <Text style={styles.road}>Rua</Text>
        <Separator color={colors.gray[700]} />

        <View style={styles.local}>

          <View style={styles.pinLocation}>
            <MaterialCommunityIcons name="map-marker" size={14} color={colors.red[600]} />
            <Text style={styles.location}>Localização do meu buraco</Text>
          </View>

          <MaterialCommunityIcons name={'chevron-right'} size={18} color={colors.gray[500]} />
        </View>

      </View>
    </TouchableOpacity>
  )
}