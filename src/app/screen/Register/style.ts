import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18
  },
  title: {
    color: colors.white,
    fontSize: 30,
    fontWeight: 500
  },
  header: {
    flexDirection: 'column',
    gap: 12
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray[400]
  },
  content: {
    marginTop: 36
  },
  label: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: colors.white
  },
  form: {
    top: 24,
    backgroundColor: colors.obsidian,
    padding: 24,
    gap: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray[700],
  },
});