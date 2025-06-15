import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const options: string[] = [
  "Vacunas",
  "Gestión de cuentas",
  "Atención al cliente",
  "Préstamos",
  "Compras",
  "Diario",
  "Peluqueria",
  "Operación",
  "Otro",
];

const NuevaCita: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [reason, setReason] = useState<string>("");

  const handleSelect = (option: string) => {
    setSelectedService(option);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Su clínica asignada es:</Text>
      <Text style={styles.clinic}>Madrid - Vallecas - CC La Gavia</Text>

      {/* Selector estilo botón */}
      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>
          {selectedService || "¿Qué servicio necesitas?"}
        </Text>
        <AntDesign name="down" size={16} color="#45363A" />
      </TouchableOpacity>

      {/* Modal con scroll y cierre al hacer clic fuera */}
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <Pressable style={styles.modalContent} onPress={() => {}}>
            <ScrollView>
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.option}
                  onPress={() => handleSelect(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>

      {/* Textarea */}
      <TextInput
        style={styles.textarea}
        multiline
        numberOfLines={4}
        placeholder="Por favor, detalle el motivo de la cita"
        placeholderTextColor="#999"
        value={reason}
        onChangeText={setReason}
      />

      <Link href="/cita/cita-fecha" asChild>
        <Pressable style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Buscar ahora</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const BORDER_COLOR = "#45363A";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "flex-start",
    paddingTop: 60,
    backgroundColor: "#f3f3f3"
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 10,
  },
  clinic: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },
  dropdownButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
    marginBottom: 20,
  },
  dropdownText: {
    color: "#000",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    backgroundColor: "#fff",
    maxHeight: "50%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderColor: BORDER_COLOR,
    borderWidth: 1,
    padding: 10,
  },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: BORDER_COLOR,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  textarea: {
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 6,
    padding: 12,
    textAlignVertical: "top",
    fontSize: 16,
    marginBottom: 20,
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

export default NuevaCita;
