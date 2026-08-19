import { colors } from '@/theme/colors';
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 12,
    overflow: 'hidden'
  },

  left: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  
  middle: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: colors.gray[700],
    borderRightWidth: 1,
    borderRightColor: colors.gray[700],
    alignItems: 'center',
    padding: 12,
  },
  
  right: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },

  normal: {
    color: colors.gray[400],
    textTransform: 'uppercase',
    fontSize: 12
  },
  
  high: {
    color: colors.gray[400],
    textTransform: 'uppercase',
    fontSize: 12
  },
  
  low: {
    color: colors.gray[400],
    textTransform: 'uppercase',
    fontSize: 12
  },

  selected: {
    backgroundColor: colors.white,
  },

  selectedText: {
    color: colors.black,
  },
});