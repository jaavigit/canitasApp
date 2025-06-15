import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
    Modal,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const PerfilOpciones = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();

  const opciones = [
    {
      label: "Historial de citas",
      icon: <FontAwesome5 name="calendar-check" size={20} color="#45363A" />,
    },
    {
      label: "Datos personales",
      icon: <MaterialIcons name="person" size={22} color="#45363A" />,
    },
    {
      label: "Pagos pendientes",
      icon: <FontAwesome5 name="money-bill-wave" size={20} color="#45363A" />,
    },
    {
      label: "Preferencia de idioma",
      icon: <Ionicons name="language" size={22} color="#45363A" />,
    },
  ];

  const confirmarLogout = () => {
    setModalVisible(false);
    router.replace("/"); // Cambia por la ruta real de login si aplica
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {opciones.map((opcion, index) => (
          <TouchableOpacity key={index} style={styles.option}>
            <View style={styles.icon}>{opcion.icon}</View>
            <Text style={styles.label}>{opcion.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Botón para abrir el modal */}
      <Pressable style={styles.logoutButton} onPress={() => setModalVisible(true)}>
        <Ionicons
          name="log-out-outline"
          size={20}
          color="#fff"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </Pressable>

      {/* Modal de confirmación */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Ionicons name="log-out-outline" size={60} color="#D9534F" />
            <Text style={styles.modalTitle}>
              ¿Está seguro que quiere cerrar la sesión?
            </Text>
            <View style={styles.modalButtons}>
              <Pressable
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancelar</Text>
              </Pressable>
              <Pressable
                style={[styles.modalButton, styles.confirmButton]}
                onPress={confirmarLogout}
              >
                <Text style={styles.confirmText}>Cerrar sesión</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    padding: 20,
    justifyContent: "space-between",
  },
  scroll: {
    marginTop: 40,
    paddingBottom: 80,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 1,
  },
  icon: {
    marginRight: 12,
  },
  label: {
    fontSize: 16,
    color: "#45363A",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D9534F",
    padding: 15,
    borderRadius: 8,
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 30,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#ccc",
  },
  confirmButton: {
    backgroundColor: "#D9534F",
  },
  cancelText: {
    color: "#000",
    fontWeight: "bold",
  },
  confirmText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PerfilOpciones;
