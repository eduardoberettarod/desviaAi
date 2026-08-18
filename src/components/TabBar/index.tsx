import { View } from 'react-native'
import React from 'react'
import { BlurView } from 'expo-blur'
import { usePathname, useRouter } from 'expo-router'
import { styles } from './style';
import TabBarIcon from '@/components/TabBarIcon';
import RegisterButton from '@/components/RegisterButton';

const tabs = [
  { name: 'dashboard', route: '/screen/Dashboard' },
  { name: 'logout', route: '/' },
] as const

export default function TabBar() {
  const pathname = usePathname()
  const router = useRouter()

  const isRegisterPage = pathname === '/screen/Register'
  const activeTab = isRegisterPage
    ? null
    : tabs.find((tab) => tab.route === pathname)?.name ?? 'dashboard'

  return (
    <View style={styles.tabBar}>
      <View style={styles.container}>
        <BlurView style={styles.blur} tint={'dark'} intensity={100}>
          {tabs.map((tab) => (
            <TabBarIcon
              key={tab.name}
              icon={tab.name}
              size={24}
              active={activeTab === tab.name}
              onPress={() => {
                if (tab.name === 'logout') {
                  router.replace('/');
                  return;
                }

                router.push(tab.route);
              }}
            />
          ))}
        </BlurView>
      </View>

      <RegisterButton />
    </View>
  )
}