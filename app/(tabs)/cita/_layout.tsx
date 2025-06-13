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
      <Stack.Screen
        name="cita-fecha"
        options={{
          title: "Fecha cita",
          headerStyle: {
            backgroundColor: "#45363A",
          },
          headerTintColor: "white",
          headerTitleAlign: "center"
        }}
      />
      <Stack.Screen
        name="cita-confirmar"
        options={{
          title: "Confirmar cita",
          headerStyle: {
            backgroundColor: "#45363A",
          },
          headerTintColor: "white",
          headerTitleAlign: "center"
        }}
      />
    </Stack>
  );
}
