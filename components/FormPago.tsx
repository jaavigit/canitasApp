import { Link } from "expo-router";
import React, { useState } from "react";
import {
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FormPago = () => {
  const [modalidad, setModalidad] = useState<"mensual" | "anual" | null>(null);
  const [periodo, setPeriodo] = useState<string>("");

  const periodos = ["Entre 1 y 5", "Entre 10 y 15", "Entre 20 y 25"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#45363A" }}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Datos de Pago</Text>

        <Text style={styles.label}>Modalidad de Pago</Text>
        <View style={styles.radioGroup}>
          {["mensual", "anual"].map((tipo) => (
            <TouchableOpacity
              key={tipo}
              style={[
                styles.radioButton,
                modalidad === tipo && styles.radioButtonSelected,
              ]}
              onPress={() => setModalidad(tipo as "mensual" | "anual")}
            >
              <Text
                style={[
                  styles.radioText,
                  modalidad === tipo && styles.radioTextSelected,
                ]}
              >
                {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Período de Pago</Text>
        <View style={styles.radioGroup}>
          {periodos.map((p) => (
            <TouchableOpacity
              key={p}
              style={[
                styles.radioButton,
                periodo === p && styles.radioButtonSelected,
              ]}
              onPress={() => setPeriodo(p)}
            >
              <Text
                style={[
                  styles.radioText,
                  periodo === p && styles.radioTextSelected,
                ]}
              >
                {p}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

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
  label: {
    color: "#45363A",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 12,
  },
  radioGroup: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  radioButton: {
    borderWidth: 1,
    borderColor: "#45363A",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 10,
    marginBottom: 10,
  },
  radioButtonSelected: {
    backgroundColor: "#88b3de",
  },
  radioText: {
    color: "#45363A",
  },
  radioTextSelected: {
    color: "#fff",
    fontWeight: "bold",
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

export default FormPago;
