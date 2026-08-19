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
    borderColor: colors.gray[700],
    position: 'relative',
    top: '50%',
    transform: [{translateY: '-50%'}]
  },
  footer: {
    marginTop: 12,
  },
  title: {
    fontSize: 36,
    color: colors.white,
    fontWeight: 700
  },
  subtitle: {
    fontSize: 14,
    color: colors.gray[400],
  }
});