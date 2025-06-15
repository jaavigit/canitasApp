import SelectModalField from "@/components/SelectModalField"; // ajusta la ruta si es necesario
import { Link } from "expo-router";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FormNuevaMascota = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [especie, setEspecie] = useState<"Canina" | "Felina" | "Otros" | null>(
    null
  );
  const [raza, setRaza] = useState("");
  const [sexo, setSexo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [clinica, setClinica] = useState("");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#45363A" }}>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Datos de la Mascota</Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre de la mascota"
          placeholderTextColor="#999"
          value={nombreMascota}
          onChangeText={setNombreMascota}
        />

        <TextInput
          style={styles.input}
          placeholder="Fecha de nacimiento (dd/mm/aaaa)"
          placeholderTextColor="#999"
          value={fechaNacimiento}
          onChangeText={setFechaNacimiento}
        />

        <SelectModalField
          title="Especie"
          options={["canina", "felina", "otros"]}
          selectedValue={especie ?? ""}
          onSelect={(value) =>
            setEspecie(value as "Canina" | "Felina" | "Otros")
          }
        />

        <SelectModalField
          title="Raza"
          options={["Labrador", "Persa", "Mestizo", "Otro"]}
          selectedValue={raza}
          onSelect={setRaza}
        />

        <SelectModalField
          title="Sexo"
          options={["Macho", "Hembra"]}
          selectedValue={sexo}
          onSelect={setSexo}
        />

        <SelectModalField
          title="Clínica"
          options={[
            "Madrid - Vallecas - CC La Gavia",
            "Barcelona - Eixample",
            "Valencia - Centro",
          ]}
          selectedValue={clinica}
          onSelect={setClinica}
        />

        <Link href="/detallespago" asChild>
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

export default FormNuevaMascota;
