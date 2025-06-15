import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: "#45363A",
              },
              headerTintColor: "white",
            }}
          />
          <Stack.Screen
            name="nuevocliente"
            options={{
              title: "Formulario datos personales",
              headerStyle: {
                backgroundColor: "#45363A",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="nuevamascota"
            options={{
              title: "Formulario datos mascota",
              headerStyle: {
                backgroundColor: "#45363A",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="formpago"
            options={{
              title: "Información de pago",
              headerStyle: {
                backgroundColor: "#45363A",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="detallespago"
            options={{
              title: "Pago",
              headerStyle: {
                backgroundColor: "#45363A",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="redsyswv"
            options={{
              title: "Pago",
              headerStyle: {
                backgroundColor: "#45363A",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="ventajas"
            options={{
              title: "Ventajas para socios",
              headerStyle: {
                backgroundColor: "#45363A",
              },
              headerTintColor: "white",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
