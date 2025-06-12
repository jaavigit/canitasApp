import { useState } from 'react';
import { Alert, FlatList, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function NuevaCita() {

  const [modalVisible, setModalVisible] = useState(false);
  const [servicio, setServicio] = useState('');
  const servicios = [
    {id: 1, name: 'Veterinaria'}, 
    {id: 2, name: 'Estética'}, 
    {id: 3, name: 'Comercial'},
    {id: 4, name: 'Financiera'}
  ];

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={servicios}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => (
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>{item.name}
                  </Text>
                </Pressable>
            )}/>
          </View>
        </View>
      </Modal>

      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>
            {!servicio ? "¿Qué servicio necesitas?" : servicio}
              <MaterialIcons name="keyboard-arrow-down" size={14} color="white" />
          </Text>      
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
