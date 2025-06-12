import { Link, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


export default function LoginInicio() {
  const router = useRouter();
  const [numeroSocio, setNumeroSocio] = useState("");
  const [telefono, setTelefono] = useState("");

  const handleLogin = () => {
    router.replace("home");
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.panel}>
        <View style={styles.logoContainer} />

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

      {/* Botones inferiores */}
      <View style={styles.bottomButtonsContainer}>
        <Link href="/nuevocliente" style={[styles.bottomButton, styles.leftButton]}>
          <Pressable>
            <Text style={styles.bottomButtonText}>Hazte Socio</Text>
          </Pressable>
        </Link>
        <Link href="/nCliente/handleNuevoCliente" style={[styles.bottomButton, styles.rightButton]}>
          <Pressable>
            <Text style={styles.bottomButtonText}>Ventajas</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  panel: {
    backgroundColor: "#45363A",
    padding: 24,
    borderRadius: 12,
    width: "80%",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
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
    color: "#45363A",
    fontWeight: "bold",
    fontSize: 16,
  },
  bottomButtonsContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    paddingBottom: 20,
    backgroundColor: "#f0f0f0",
    paddingTop: 16,
  },

  bottomButton: {
    paddingVertical: 18, // más alto
    paddingHorizontal: 36, // más ancho
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    minWidth: 150,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomButtonText: {
    color: "#45363A", // color solicitado
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },

  leftButton: {
    backgroundColor: "#80ccec",
  },
  rightButton: {
    backgroundColor: "#f07c3c",
  },
});
