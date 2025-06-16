import { AntDesign, Entypo } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  Image,
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import ImageCarousel from "../../../components/ImageCarouselContainer";

export default function Index() {
  const insets = useSafeAreaInsets();

  const openSocialApp = async (url, fallbackUrl) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Linking.openURL(fallbackUrl);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={[
          styles.container,
          { paddingTop: insets.top + 20, paddingBottom: insets.bottom },
        ]}
      >
        <View style={styles.header}>
          <Image
            source={require("../../../assets/images/CanitasLogo.png")}
            style={styles.logo}
            resizeMode="cover"
          />

          <View style={styles.infoContainer}>
            <Text style={styles.welcomeText}>¡Bienvenido Javier Moncayo!</Text>
            <Text style={styles.subText}>
              Clínica asociada: Sevilla - Luis Montoto
            </Text>
            <Text style={styles.subText}>
              Dirección: C. Luis Montoto, 162, 41005 Sevilla
            </Text>
            <Text style={styles.subText}>Teléfono: 918 310 010</Text>
          </View>
        </View>

          <ImageCarousel
            images={[
              require("../../../assets/images/homeImg1.jpg"),
              require("../../../assets/images/homeImg2.png"),
            ]}
            interval={4000}
          />

        <View style={styles.socialContainer}>
          <Text style={styles.redesTexto}>¡Estamos en redes!</Text>
          <View style={styles.iconRow}>
            <Pressable
              onPress={() =>
                openSocialApp(
                  "fb://page/canitasveterinaria",
                  "https://www.facebook.com/canitasveterinaria"
                )
              }
            >
              <Entypo name="facebook" size={32} color="white" />
            </Pressable>

            <Pressable
              onPress={() =>
                openSocialApp(
                  "instagram://user?username=canitasveterinaria",
                  "https://www.instagram.com/canitasveterinaria"
                )
              }
            >
              <AntDesign name="instagram" size={32} color="white" />
            </Pressable>

            <Pressable
              onPress={() =>
                openSocialApp(
                  "linkedin://company/canitas-es",
                  "https://www.linkedin.com/company/canitas-es/about/"
                )
              }
            >
              <Entypo name="linkedin" size={32} color="white" />
            </Pressable>

            <Pressable
              onPress={() =>
                openSocialApp(
                  "tiktok://user",
                  "https://www.tiktok.com/@canitasveterinaria"
                )
              }
            >
              <FontAwesome5 name="tiktok" size={32} color="white" />
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const shadowStyle = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 6,
};

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
    alignItems: "center",
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: "#88b3de",
    borderRadius: 16,
    padding: 20,
    alignItems: "flex-start",
    ...shadowStyle,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 4,
  },
  carouselContainer: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 8,
    ...shadowStyle,
  },
  logo: {
    marginLeft: 33,
    marginBottom: 30,
  },
  socialContainer: {
    backgroundColor: "#b0a4cc",
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    alignItems: "center",
    ...shadowStyle,
  },
  redesTexto: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    marginBottom: 12,
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    gap: 20,
  },
});
