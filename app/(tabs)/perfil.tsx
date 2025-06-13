import { StyleSheet } from 'react-native';

import { Stack } from 'expo-router';
import { View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}> 
          <Stack.Screen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: "#f3f3f3"
  },
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
