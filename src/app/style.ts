import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18
  },
  header: {
    alignItems: 'center',
  },
  form: {
    backgroundColor: colors.obsidian,
    padding: 24,
    gap: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray[700]
  },
});