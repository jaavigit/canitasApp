import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import DateTimePicker, { Event as DateTimePickerEvent } from "@react-native-community/datetimepicker";
import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface Fecha {
  fecha: string;
  horas: string[];
}

interface Clinica {
  id: number;
  nombre: string;
  fechas: Fecha[];
}

const clinicas: Clinica[] = [
  {
    id: 1,
    nombre: "Madrid - Vallecas - CC La Gavia",
    fechas: [
      { fecha: "2025-06-13", horas: ["09:00", "11:00", "15:00"] },
      { fecha: "2025-06-14", horas: ["10:00", "13:00"] },
    ],
  },
  {
    id: 2,
    nombre: "Barcelona - Eixample",
    fechas: [
      { fecha: "2025-06-15", horas: ["10:00", "13:00", "14:30"] },
      { fecha: "2025-06-13", horas: ["10:00", "13:00"] },
    ],
  },
  {
    id: 3,
    nombre: "Valencia - Centro",
    fechas: [
      { fecha: "2025-06-17", horas: [] },
      { fecha: "2025-06-18", horas: ["08:00", "09:30"] },
    ],
  },
  {
    id: 4,
    nombre: "Sevilla - Triana",
    fechas: [
      {
        fecha: "2025-06-11",
        horas: ["08:00", "09:30", "11:00", "12:30", "15:00", "17:00"],
      },
    ],
  },
];

const CLINICA_POR_DEFECTO = "Madrid - Vallecas - CC La Gavia - consulta";

const meses = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const diasSemana = [
  "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado",
];

function formatearFecha(date: Date): string {
  const diaSemana = diasSemana[date.getDay()];
  const dia = date.getDate().toString().padStart(2, "0");
  const mes = meses[date.getMonth()];
  const anio = date.getFullYear();
  return `${diaSemana}, ${dia} de ${mes} de ${anio}`;
}

function formatDateISO(date: Date): string {
  return date.toISOString().split("T")[0];
}

const BORDER_COLOR = "#45363A";

const CitaFecha: React.FC = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [clinicaSeleccionada, setClinicaSeleccionada] = useState<Clinica | null>(
    clinicas.find((c) => c.nombre.startsWith("Madrid - Vallecas - CC La Gavia")) || null
  );
  const [horaSeleccionada, setHoraSeleccionada] = useState<string | null>(null);

  const abrirDatePicker = () => setShowDatePicker(true);
  const cerrarDatePicker = () => setShowDatePicker(false);

  const onChangeDate = (
    event: DateTimePickerEvent,
    selectedDate?: Date | undefined
  ) => {
    cerrarDatePicker();
    if (event.type !== "dismissed" && selectedDate) {
      setFechaSeleccionada(selectedDate);
    }
  };

  const handleSelectClinica = (clinica: Clinica) => {
    setClinicaSeleccionada(clinica);
    setModalVisible(false);
  };

  const getHorasDisponibles = (): string[] => {
    if (!clinicaSeleccionada) return [];
    const fechaStr = formatDateISO(fechaSeleccionada);
    const fechaObj = clinicaSeleccionada.fechas.find((f) => f.fecha === fechaStr);
    return fechaObj ? fechaObj.horas : [];
  };

  const horasDisponibles = getHorasDisponibles();

  const renderHoras = () => {
    if (horasDisponibles.length === 0) {
      return (
        <View style={styles.noHorasContainer}>
          <MaterialIcons name="warning" size={60} color={"#f1c813"} />
          <Text style={styles.noHorasText}>
            No hay citas disponibles en la fecha seleccionada
          </Text>
        </View>
      );
    }

    const filas: (string | null)[][] = [];
    for (let i = 0; i < horasDisponibles.length; i += 3) {
      const fila = horasDisponibles.slice(i, i + 3);
      while (fila.length < 3) fila.push('');
      filas.push(fila);
    }

    return filas.map((fila, index) => (
      <View style={styles.filaHoras} key={index}>
        {fila.map((hora, i) =>
          hora ? (
            <TouchableOpacity
              key={hora}
              onPress={() => setHoraSeleccionada(hora)}
              style={[styles.cajaHora, horaSeleccionada === hora && styles.cajaHoraSeleccionada]}
            >
              <Text
                style={[styles.textoHora, horaSeleccionada === hora && styles.textoHoraSeleccionada]}
              >
                {hora}
              </Text>
            </TouchableOpacity>
          ) : (
            <View key={`empty-${i}`} style={[styles.cajaHora, { opacity: 0 }]} />
          )
        )}
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.fechaTexto}>{formatearFecha(fechaSeleccionada)}</Text>
      <Text style={styles.clinicaTexto}>{clinicaSeleccionada?.nombre || CLINICA_POR_DEFECTO}</Text>

      <TouchableOpacity style={styles.botonCalendario} onPress={abrirDatePicker}>
        <AntDesign name="calendar" size={24} color="#fff" />
        <Text style={styles.textoBotonCalendario}>Seleccionar fecha</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={fechaSeleccionada}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <TouchableOpacity
        style={styles.dropdownButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.dropdownText}>{clinicaSeleccionada?.nombre || "Seleccionar otra clínica"}</Text>
        <AntDesign name="down" size={16} color={BORDER_COLOR} />
      </TouchableOpacity>

      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <Pressable style={styles.modalContent} onPress={() => {}}>
            <ScrollView>
              {clinicas.map((clinica) => (
                <TouchableOpacity
                  key={clinica.id}
                  style={styles.option}
                  onPress={() => handleSelectClinica(clinica)}
                >
                  <Text style={styles.optionText}>{clinica.nombre}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </Pressable>
        </Pressable>
      </Modal>

      <ScrollView style={styles.contenedorHoras}>{renderHoras()}</ScrollView>

      <Link href="/cita/cita-confirmar" asChild>
        <Pressable style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Continuar</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f3f3f3",
  },
  fechaTexto: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  clinicaTexto: {
    fontSize: 16,
    marginBottom: 20,
    color: "#000",
  },
  botonCalendario: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#88b3de",
    padding: 12,
    borderRadius: 6,
    marginBottom: 20,
    justifyContent: "center",
  },
  textoBotonCalendario: {
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
    fontSize: 16,
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
    fontSize: 16,
    color: "#000",
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
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: BORDER_COLOR,
  },
  optionText: {
    fontSize: 16,
    color: "#000",
  },
  contenedorHoras: {
    flex: 1,
  },
  filaHoras: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  cajaHora: {
    flex: 1 / 3,
    borderWidth: 1,
    borderColor: "#88b3de",
    borderRadius: 6,
    paddingVertical: 10,
    marginHorizontal: 5,
    alignItems: "center",
  },
  textoHora: {
    fontSize: 16,
    color: "#000",
  },
  cajaHoraSeleccionada: {
    backgroundColor: "#88b3de",
    borderColor: BORDER_COLOR,
  },
  textoHoraSeleccionada: {
    color: "white",
    fontWeight: "bold",
  },
  noHorasContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  noHorasText: {
    marginTop: 10,
    fontSize: 16,
    color: BORDER_COLOR,
    textAlign: "center",
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

export default CitaFecha;
