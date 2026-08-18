import { View } from "react-native";
import { Stack } from "expo-router";

import { colors } from "@/theme/colors";
import TabBar from "@/components/TabBar";

export default function Layout() {

  return (
    <View style={{ flex: 1, backgroundColor: colors.onyx }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: colors.onyx },
        }}
      />

      <TabBar />
      
    </View>
  );
}