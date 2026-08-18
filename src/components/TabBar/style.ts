import { StyleSheet } from 'react-native'
import { colors } from '@/theme/colors'

export const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.gray[700],
    borderRadius: 100,
  },
  blur: {
    padding: 12,
    flexDirection: 'row',
    gap: 12,
  },
  tabBar: {
    position: 'absolute',
    bottom: 80,
    left: '50%',
    transform: [{ translateX: '-50%' }],
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24
  }
});