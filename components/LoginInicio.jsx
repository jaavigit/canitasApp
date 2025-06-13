import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginInicio() {
  const router = useRouter();
  const [numeroSocio, setNumeroSocio] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleLogin = () => {
    router.replace("home");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#45363A' }}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/CanitasLogo.png')}
            style={styles.logo}
            resizeMode="cover"
          />
        </View>

        <View style={styles.panel}>
          <View style={styles.iconInputWrapper}>
            <FontAwesome name="user-o" size={24} color="white" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Número de socio"
              placeholderTextColor="#ccc"
              keyboardType="numeric"
              value={numeroSocio}
              onChangeText={setNumeroSocio}
            />
          </View>

          <View style={styles.iconInputWrapper}>
            <Feather name="phone-call" size={24} color="white" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Teléfono"
              placeholderTextColor="#ccc"
              keyboardType="phone-pad"
              value={telefono}
              onChangeText={setTelefono}
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomButtonsContainer}>
          <Pressable
            onPress={() => router.push("/nuevocliente")}
            style={[styles.bottomButton, styles.leftButton]}
          >
            <Text style={styles.bottomButtonText}>Hazte Socio</Text>
          </Pressable>

          <Pressable
            onPress={() => router.push("/ventajas")}
            style={[styles.bottomButton, styles.rightButton]}
          >
            <Text style={styles.bottomButtonText}>Ventajas</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center",
  },
  panel: {
    backgroundColor: "#45363A",
    padding: 24,
    borderRadius: 12,
    width: "85%",
    marginBottom: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  iconInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: "white",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#45363A",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },
  bottomButton: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
    minWidth: 140,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomButtonText: {
    color: 'white',
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },
  leftButton: {
    backgroundColor: "#88b3de",
  },
  rightButton: {
    backgroundColor: "#b0a4cc",
  },
  logo: {
    marginLeft: 30,
  },
});
