import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 12,
    backgroundColor: colors.obsidian,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.gray[700],
  },
  image: {
    backgroundColor: colors.indigo[300],
    height: 250,
    borderRadius: 12,
    alignItems: 'flex-end',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  status: {
    margin: 16,
    paddingVertical: 4,
    paddingHorizontal: 12,
    fontSize: 12,
    textTransform: 'uppercase'
  },
  footer: {
    flexDirection: 'column',
    gap: 6,
    marginTop: 8
  },
  local: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8
  },
  userText: {
    color: colors.white,
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  date: {
    color: colors.gray[500],
    fontSize: 11
  },
  title: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 700,
  },
  location: {
    color: colors.white,

  },
  pinLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6
  },
  low: {
    backgroundColor: colors.sky[600],
    borderRadius: 8
  },
  medium: {
    backgroundColor: colors.green[600],
    borderRadius: 8
  },
  high: {
    backgroundColor: colors.red[500],
    borderRadius: 8
  },
  road: {
    color: colors.gray[500],
    marginBottom: 6
  }
});