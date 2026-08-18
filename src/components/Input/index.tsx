import { View, TextInput, TextInputProps, Text } from 'react-native'
import React from 'react'
import { styles } from './style';

type Props = TextInputProps & {
  label?: string
}

export default function Input({label, ...rest}: Props) {
  return (
    <View style={styles.container}>
      
      <Text style={styles.label}>{label}</Text>

      <TextInput
        style={styles.input}
        {...rest}
      />
    </View>
  )
}