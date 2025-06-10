import { useRouter } from 'expo-router';
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function LoginInicio() {
  const router = useRouter();

  const [numeroSocio, setNumeroSocio] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleLogin = () => {
    // Aquí pones tu lógica de autenticación, por ejemplo:
    // validar campos, enviar a backend, guardar token, etc.

    // ✅ Una vez autenticado, reemplaza la ruta con las tabs
    router.replace('home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.panel}>
        <TextInput
          style={styles.input}
          placeholder="Número de socio"
          placeholderTextColor="#ccc"
          keyboardType="numeric"
          value={numeroSocio}
          onChangeText={setNumeroSocio}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#ccc"
          keyboardType="phone-pad"
          value={telefono}
          onChangeText={setTelefono}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  panel: {
    backgroundColor: "#6B4F3B",
    padding: 24,
    borderRadius: 12,
    width: "80%",
  },
  input: {
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 15,
    color: "white",
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#6B4F3B",
    fontWeight: "bold",
    fontSize: 16,
  },
});
