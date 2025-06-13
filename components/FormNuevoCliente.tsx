import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FormNuevoCliente = () => {
  // Datos personales
  const [telefono, setTelefono] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [numero, setNumero] = useState("");
  const [piso, setPiso] = useState("");
  const [codigoPostal, setCodigoPostal] = useState("");
  const [provincia, setProvincia] = useState("");
  const [poblacion, setPoblacion] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#45363A" }}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Datos Personales</Text>

        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#999"
          value={telefono}
          onChangeText={setTelefono}
        />
        <TextInput
          style={styles.input}
          placeholder="Domicilio"
          placeholderTextColor="#999"
          value={domicilio}
          onChangeText={setDomicilio}
        />
        <TextInput
          style={styles.input}
          placeholder="Número"
          placeholderTextColor="#999"
          value={numero}
          onChangeText={setNumero}
        />
        <TextInput
          style={styles.input}
          placeholder="Piso"
          placeholderTextColor="#999"
          value={piso}
          onChangeText={setPiso}
        />
        <TextInput
          style={styles.input}
          placeholder="Código Postal"
          placeholderTextColor="#999"
          value={codigoPostal}
          onChangeText={setCodigoPostal}
        />
        <TextInput
          style={styles.input}
          placeholder="Provincia"
          placeholderTextColor="#999"
          value={provincia}
          onChangeText={setProvincia}
        />
        <TextInput
          style={styles.input}
          placeholder="Población"
          placeholderTextColor="#999"
          value={poblacion}
          onChangeText={setPoblacion}
        />

        <Link href="/nuevamascota" asChild>
          <Pressable style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Continuar</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f3f3f3",
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#45363A",
  },
  input: {
    borderWidth: 1,
    borderColor: "#45363A",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    color: "#45363A",
  },
  searchButton: {
    backgroundColor: "#88b3de",
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default FormNuevoCliente;
