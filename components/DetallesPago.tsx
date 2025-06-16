import { Entypo, FontAwesome5, MaterialIcons } from "@expo/vector-icons";
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

const DetallesPago = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={{ flex: 1, backgroundColor: "#45363A" }}>
      <View style={styles.container}>
        {/* Cuadro resumen */}
        <View style={styles.resumenBox}>
          <View style={styles.centeredContent}>
            {/* Promoción activa */}
            <View style={styles.promoRow}>
              <FontAwesome5 name="tags" size={18} color="#88b3de" />
              <Text style={styles.promoText}>¡Promoción Activa!</Text>
            </View>

            <Text style={styles.paymentTitle}>
              Hoy pagarás: <Text style={styles.boldText}>31€</Text>
            </Text>
            <Text style={styles.paymentNote}>
              (30€ inscripción + 1€ promoción)
            </Text>

            <Text style={styles.paymentTitle}>
              Julio: <Text style={styles.boldText}>12.21€</Text>
            </Text>
            <Text style={styles.paymentNote}>Parte proporcional</Text>

            <View style={styles.infoRow}>
              <MaterialIcons name="calendar-today" size={18} color="#45363A" />
              <Text style={styles.paymentTitle}>
                A partir de Agosto:{" "}
                <Text style={styles.boldText}>22.9€ mensuales</Text>
              </Text>
            </View>
          </View>

          {/* Info duración */}
          <View style={styles.infoRow}>
            <Entypo name="info-with-circle" size={18} color="#f5c542" />
            <Text style={styles.infoText}>
              *Duración: 12 meses con renovación automática anual
            </Text>
          </View>

          {/* Checkbox y términos */}
          <View style={styles.termsRow}>
            <TouchableOpacity
              onPress={() => setAcceptedTerms(!acceptedTerms)}
              style={[styles.checkbox, acceptedTerms && styles.checkboxChecked]}
            >
              {acceptedTerms && <Text style={styles.checkmark}>✓</Text>}
            </TouchableOpacity>
            <Text style={styles.termsText}>
              He leído y acepto los{" "}
              <Text
                style={styles.linkText}
                onPress={() => alert("Abrir términos")}
              >
                Términos y Condiciones del Servicio
              </Text>
            </Text>
          </View>
        </View>

        <Link href="/redsyswv" asChild>
          <Pressable disabled={!acceptedTerms} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Continuar</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f3f3f3",
    flex: 1,
  },
  resumenBox: {
    borderWidth: 2,
    borderColor: "#88b3de",
    borderRadius: 12,
    padding: 16,
    marginBottom: 100,
  },
  centeredContent: {
    marginBottom: 50,
    alignItems: "center",
  },
  promoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginLeft: -30,
    gap: 8,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 8,
  },
  promoText: {
    color: "#45363A",
    fontSize: 22,
    marginLeft: 8,
    fontWeight: "bold",
  },
  paymentTitle: {
    color: "#45363A",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 2,
  },
  paymentNote: {
    color: "#666",
    fontSize: 14,
    textAlign: "center",
    marginBottom: 8,
  },
  boldText: {
    fontWeight: "bold",
    color: "#88b3de",
  },
  infoText: {
    color: "#45363A",
    fontSize: 14,
    marginLeft: 8,
    flex: 1,
    flexWrap: "wrap",
  },
  termsRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginTop: 20,
    gap: 10,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: "#45363A",
    borderRadius: 4,
    marginTop: 4,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxChecked: {
    backgroundColor: "#88b3de",
  },
  checkmark: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  termsText: {
    color: "#45363A",
    fontSize: 14,
    flex: 1,
    flexWrap: "wrap",
  },
  linkText: {
    color: "#88b3de",
    textDecorationLine: "underline",
  },
  searchButton: {
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#88b3de",
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DetallesPago;
