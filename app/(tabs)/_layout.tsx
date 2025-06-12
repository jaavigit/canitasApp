import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useColorScheme } from "@/hooks/useColorScheme";
import Fontisto from "@expo/vector-icons/Fontisto";

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
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cita"
        options={{
          title: "Nueva cita",
          tabBarIcon: ({ color }) => (
            <Fontisto name="date" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
