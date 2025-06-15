import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

const RedsysPaymentScreen = () => {
  // ⚠️ Simulación de datos que normalmente vienen del backend
  const signatureVersion = "HMAC_SHA256_V1";
  const merchantParams = "eyJEc19BbW91bnQiOiIxMDAwIiwiR...etc"; // ⚠️ Base64 generado
  const signature = "aZ2vdsR5OCpDWlFZKWRwZVNfh+o=";

  const htmlContent = `
    <html>
      <body onload="document.forms[0].submit();">
        <form action="https://sis.redsys.es/sis/realizarPago" method="POST">
          <input type="hidden" name="Ds_SignatureVersion" value="${signatureVersion}" />
          <input type="hidden" name="Ds_MerchantParameters" value="${merchantParams}" />
          <input type="hidden" name="Ds_Signature" value="${signature}" />
        </form>
      </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        javaScriptEnabled
        domStorageEnabled
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RedsysPaymentScreen;
