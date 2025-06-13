import { AntDesign, Entypo } from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import ImageCarousel from '../../../components/ImageCarouselContainer';

export default function Index() {
  const insets = useSafeAreaInsets();

  const openSocialApp = async (url) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      console.warn("No se pudo abrir la URL:", url);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, { paddingTop: insets.top + 20, paddingBottom: insets.bottom }]}>
        <View style={styles.header}>
          <Image
            source={require('../../../assets/images/CanitasLogo.png')}
            style={styles.logo}
            resizeMode="cover"
          />
          <Text style={styles.welcomeText}>¡Bienvenido Javier Moncayo!</Text>
          <Text style={styles.subText}>Clínica asociada: Sevilla - Luis Montoto</Text>
          <Text style={styles.subText}>Dirección: C. Luis Montoto, 162, 41005 Sevilla</Text>
          <Text style={styles.subText}>Teléfono: 918 310 010</Text>
        </View>

        <View style={styles.carouselContainer}>
          <ImageCarousel
            images={[
              require('../../../assets/images/homeImg1.jpg'),
              require('../../../assets/images/homeImg2.png'),
              require('../../../assets/images/homeImg3.png')
            ]}
            interval={4000}
          />
        </View>

        <View style={styles.socialContainer}>
          <Text style={styles.redesTexto}>¡Síguenos en redes!</Text>
          <View style={styles.iconRow}>
            <Pressable onPress={() => openSocialApp("fb://canitasveterinaria")}>
              <Entypo name="facebook" size={32} color="white" />
            </Pressable>
            <Pressable onPress={() => openSocialApp("instagram://user?username=canitasveterinaria")}>
              <AntDesign name="instagram" size={32} color="white" />
            </Pressable>
            <Pressable onPress={() => openSocialApp("https://www.linkedin.com/company/canitas-es/about/")}>
              <Entypo name="linkedin" size={32} color="white" />
            </Pressable>
            <Pressable onPress={() => openSocialApp("tiktok://user")}>
              <FontAwesome5 name="tiktok" size={32} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f3f3f3",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#88b3de',
  },
  subText: {
    fontSize: 18,
    color: '#666',
    marginTop: 4,
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  logo: {
    marginLeft: 33,
    marginBottom: 30,
  },
  socialContainer: {
    backgroundColor: '#b0a4cc',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    alignItems: 'center',
  },
  redesTexto: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    gap: 20,
  },
});
