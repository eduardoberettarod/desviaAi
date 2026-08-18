import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { styles } from './style';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '@/theme/colors';

type TabBarIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap
  size?: number
  active?: boolean
}

export default function TabBarIcon({ icon, size = 24, active = false, style, ...rest }: TabBarIconProps) {
  return (
    <TouchableOpacity
      style={[styles.container, active ? styles.activeButton : styles.inactiveButton, style]}
      {...rest}
      activeOpacity={0.8}
    >
      <MaterialIcons
        name={icon}
        size={size}
        color={active ? colors.black : colors.white}
      />
    </TouchableOpacity>
  )
}