import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const PerfilOpciones = () => {
  const opciones = [
    { label: "Historial de citas", icon: <FontAwesome5 name="calendar-check" size={20} color="#45363A" /> },
    { label: "Datos personales", icon: <MaterialIcons name="person" size={22} color="#45363A" /> },
    { label: "Preferencia de idioma", icon: <Ionicons name="language" size={22} color="#45363A" /> },
    { label: "Pagos pendientes", icon: <FontAwesome5 name="money-bill-wave" size={20} color="#45363A" /> },
  ];

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

      <TouchableOpacity style={styles.logoutButton} onPress={() => console.log("Cerrar sesión")}>
        <Ionicons name="log-out-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
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
});

export default PerfilOpciones;
