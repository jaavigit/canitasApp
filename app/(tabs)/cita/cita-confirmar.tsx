import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BORDER_COLOR = "#6B4F3B";

const CitaConfirmar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [fechaHora] = useState("11 de Junio de 2025 a las 14:20");
  const [consulta] = useState("Madrid - Vallecas - CC La Gavia");
  const [servicio] = useState("Vacunación");
  const [notas] = useState("Vacuna para la rabia");

  const router = useRouter();

  const handleConfirm = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    router.replace('/cita');
    router.push("/home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.introText}>
        Por favor, confirma que tus datos son correctos
      </Text>

      <AntDesign
        name="warning"
        size={50}
        color={BORDER_COLOR}
        style={styles.icon}
      />

      <View style={styles.item}>
        <Text style={styles.titulo}>Fecha y hora</Text>
        <Text style={styles.contenido}>{fechaHora}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.titulo}>Consulta</Text>
        <Text style={styles.contenido}>{consulta}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.titulo}>Servicio</Text>
        <Text style={styles.contenido}>{servicio}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.titulo}>Notas</Text>
        <Text style={styles.contenido}>{notas}</Text>
      </View>

      <TouchableOpacity style={styles.botonConfirmar} onPress={handleConfirm}>
        <Text style={styles.textoBoton}>Confirmar cita</Text>
      </TouchableOpacity>

      {/* Modal de confirmación */}
      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <AntDesign name="checkcircle" size={60} color="#4BB543" />
            <Text style={styles.modalText}>
              Se ha agendado la cita correctamente
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.modalButtonText}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
  introText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
    marginBottom: 10,
    textAlign: "center",
  },
  icon: {
    alignSelf: "center",
    marginBottom: 30,
  },
  item: {
    marginBottom: 20,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "700",
    color: BORDER_COLOR,
    marginBottom: 4,
  },
  contenido: {
    fontSize: 16,
    color: "#000",
  },
  botonConfirmar: {
    backgroundColor: BORDER_COLOR,
    padding: 15,
    borderRadius: 6,
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  textoBoton: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 12,
    alignItems: "center",
    width: "80%",
  },
  modalText: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 30,
    textAlign: "center",
    color: "#333",
  },
  modalButton: {
    backgroundColor: BORDER_COLOR,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  modalButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CitaConfirmar;
