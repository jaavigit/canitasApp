import { Stack } from 'expo-router';

export default function PerfilLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Perfil' , headerShown: false}} />
    </Stack>
  );
}
