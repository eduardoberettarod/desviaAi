import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 14,
    color: colors.gray[400]
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray[400],
    padding: 14,
    width: '100%',
    borderRadius: 8
  }
});