import { TouchableOpacity, TouchableOpacityProps, Text, Alert } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './style';
import { colors } from '@/theme/colors';


export default function Banner() {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() =>
        Alert.alert("Escolha", "Como deseja enviar a foto?", [
          { text: "Cancelar", style: "cancel" },
          { text: "Abrir câmera", onPress: () => {} },
          { text: "Abrir galeria", onPress: () => {} },
        ])
      }
    >
      <MaterialIcons name="camera-alt" size={36} color={colors.gray[500]} />
      <Text style={styles.label}>Toque para enviar uma foto ou escolher uma da galeria.</Text>
    </TouchableOpacity>
  )
}