import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="cita-fecha" options={{ title: "Fecha de la cita" }} />
      <Stack.Screen
        name="cita-confirmar"
        options={{ title: "Confirmar cita" }}
      />
    </Stack>
  );
}
