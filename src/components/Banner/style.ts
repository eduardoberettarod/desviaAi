import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.gray[500],
    borderStyle: 'dashed',
    padding: 72,
    gap: 4,
    borderRadius: 12
  },
  label: {
    color: colors.gray[500],
    textAlign: 'center',
    fontSize: 14
  }
});