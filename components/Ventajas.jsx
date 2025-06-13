import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const screenWidth = Dimensions.get('window').width;

export default function Ventajas() {
  return (
    <SafeAreaView edges={['left', 'right', 'bottom']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/ventajas.png')}
            style={styles.imagenVentajas}
            resizeMode="cover"
          />
          <Image
            source={require('../assets/images/detallesVentajas.png')}
            style={styles.imagenDetalle}
            resizeMode="contain"
          />
          <Image
            source={require('../assets/images/compromisoVentajas.png')}
            style={styles.imagenCompromiso}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#45363A',
  },
  scrollContainer: {
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  imagenVentajas: {
    marginTop: -10,
    width: screenWidth,
    height: 570,
  },
  imagenDetalle: {
    width: screenWidth,
    height: 300,
    marginTop: -10,
  },
  imagenCompromiso: {
    marginTop: -18,
    width: screenWidth,
    height: 138,
  },
});
