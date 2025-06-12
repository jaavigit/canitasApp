import { useState } from 'react';
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type Props = {
  title: string;
  options: string[];
  selectedValue: string;
  onSelect: (value: string) => void;
};

const SelectModalField = ({ title, options, selectedValue, onSelect }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity style={styles.field} onPress={() => setModalVisible(true)}>
        <Text style={styles.fieldLabel}>{title}</Text>
        <Text style={styles.fieldValue}>{selectedValue || `Seleccionar ${title}`}</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{title}</Text>
            <FlatList
              data={options}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => handleSelect(item)} style={styles.option}>
                  <Text>{item}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  field: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  fieldLabel: { fontWeight: 'bold', marginBottom: 4 },
  fieldValue: { color: '#555' },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    maxHeight: '60%',
  },
  modalTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  option: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  closeButton: {
    marginTop: 16,
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  closeText: { fontWeight: 'bold' },
});

export default SelectModalField;
