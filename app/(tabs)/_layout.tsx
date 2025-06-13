import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useColorScheme } from "@/hooks/useColorScheme";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: "#45363A", // Marrón oscuro, como tu login
          borderTopWidth: 0,
          position: Platform.OS === "ios" ? "absolute" : "relative",
        },
        tabBarActiveTintColor: "white", // Color de texto e icono activos
        tabBarInactiveTintColor: "#D8D8D8", // Color de texto e icono inactivos
        tabBarLabelStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={26} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cita"
        options={{
          title: "Cita",
          tabBarIcon: ({ color }) => (
            <AntDesign name="pluscircleo" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-o" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
