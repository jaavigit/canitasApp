import React, { useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import SelectModalField from './SelectModalField';

const FormNuevoCliente = () => {
  // Datos personales
  const [telefono, setTelefono] = useState('');
  const [domicilio, setDomicilio] = useState('');
  const [numero, setNumero] = useState('');
  const [piso, setPiso] = useState('');
  const [codigoPostal, setCodigoPostal] = useState('');
  const [provincia, setProvincia] = useState('');
  const [poblacion, setPoblacion] = useState('');

  // Datos de la mascota
  const [nombreMascota, setNombreMascota] = useState('');
  const [especie, setEspecie] = useState<'canina' | 'felina' | 'otros' | null>(null);
  const [raza, setRaza] = useState('');
  const [sexo, setSexo] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [clinica, setClinica] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sectionTitle}>Datos Personales</Text>

      <TextInput style={styles.input} placeholder="Teléfono" value={telefono} onChangeText={setTelefono} />
      <TextInput style={styles.input} placeholder="Domicilio" value={domicilio} onChangeText={setDomicilio} />
      <TextInput style={styles.input} placeholder="Número" value={numero} onChangeText={setNumero} />
      <TextInput style={styles.input} placeholder="Piso" value={piso} onChangeText={setPiso} />
      <TextInput style={styles.input} placeholder="Código Postal" value={codigoPostal} onChangeText={setCodigoPostal} />
      <TextInput style={styles.input} placeholder="Provincia" value={provincia} onChangeText={setProvincia} />
      <TextInput style={styles.input} placeholder="Población" value={poblacion} onChangeText={setPoblacion} />

      <Text style={styles.sectionTitle}>Datos de tu Mascota</Text>

      <TextInput style={styles.input} placeholder="Nombre de la mascota" value={nombreMascota} onChangeText={setNombreMascota} />

      <Text style={styles.label}>Especie</Text>
      <View style={styles.radioContainer}>
        {['canina', 'felina', 'otros'].map((option) => (
          <TouchableOpacity key={option} onPress={() => setEspecie(option as any)} style={styles.radioItem}>
            <View style={[styles.radioCircle, especie === option && styles.selected]} />
            <Text>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <SelectModalField
        title="Raza"
        options={['Labrador', 'Persa', 'Mestizo']}
        selectedValue={raza}
        onSelect={setRaza}
      />

      <SelectModalField
        title="Sexo"
        options={['Macho', 'Hembra']}
        selectedValue={sexo}
        onSelect={setSexo}
      />

      <TextInput
        style={styles.input}
        placeholder="Fecha de nacimiento (dd/mm/aaaa)"
        value={fechaNacimiento}
        onChangeText={setFechaNacimiento}
      />

      <SelectModalField
        title="Clínica"
        options={['Madrid - Vallecas - CC La Gavia', 'Barcelona - Sants', 'Valencia - Ruzafa']}
        selectedValue={clinica}
        onSelect={setClinica}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 24, marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  label: { fontWeight: 'bold', marginBottom: 8 },
  radioContainer: { flexDirection: 'row', marginBottom: 16 },
  radioItem: { flexDirection: 'row', alignItems: 'center', marginRight: 16 },
  radioCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#333',
    marginRight: 8,
  },
  selected: {
    backgroundColor: '#333',
  },
});

export default FormNuevoCliente;
