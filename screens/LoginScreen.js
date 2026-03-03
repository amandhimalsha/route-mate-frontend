import { Button, StyleSheet, Text, View } from "react-native";

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>RouteMate 🚗💚</Text>
      <Text style={styles.subtitle}>Login Screen</Text>

      <Button
        title="Go to Register"
        onPress={() => navigation.navigate("Register")}
      />

      <Button
        title="Login (Demo)"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#22c55e",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#e2e8f0",
    marginBottom: 20,
  },
});