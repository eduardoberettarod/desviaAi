import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18
  },
  header: {
    flexDirection: 'column',
    gap: 12
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 500
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray[400]
  }
});