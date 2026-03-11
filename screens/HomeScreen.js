import { Alert, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    Alert.alert(
      "Not implemented",
      "Logout is temporarily disabled while Firebase is removed."
    );
  };

  const user = null;
  const userName =
    user?.displayName ||
    (user?.email ? user.email.split("@")[0] : "there");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, {userName}</Text>
        <Text style={styles.subGreeting}>Welcome back to RouteMate</Text>
      </View>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <View style={styles.cardIconCircle}>
            <Text style={styles.cardIconText}>🛣️</Text>
          </View>
          <Text style={styles.cardTitle}>Set Up My Commute Route</Text>
          <Text style={styles.cardDescription}>
            Plan your daily rides and usual paths.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <View style={styles.cardIconCircle}>
            <Text style={styles.cardIconText}>🤝</Text>
          </View>
          <Text style={styles.cardTitle}>View Matches</Text>
          <Text style={styles.cardDescription}>
            See riders and drivers that fit your route.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => {}}>
          <View style={styles.cardIconCircle}>
            <Text style={styles.cardIconText}>📩</Text>
          </View>
          <Text style={styles.cardTitle}>Requests</Text>
          <Text style={styles.cardDescription}>
            Manage incoming and outgoing ride requests.
          </Text>
        </TouchableOpacity>

        <Pressable style={styles.card} onPress={() => navigation.navigate("Profile")}>
          <View style={styles.cardIconCircle}>
            <Text style={styles.cardIconText}>👤</Text>
          </View>
          <Text style={styles.cardTitle}>Profile</Text>
          <Text style={styles.cardDescription}>
            Update your details, role, and preferences.
          </Text>
        </Pressable>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  header: {
    marginBottom: 24,
  },
  greeting: {
    fontSize: 26,
    fontWeight: "700",
    color: "#e5e7eb",
  },
  subGreeting: {
    marginTop: 4,
    fontSize: 14,
    color: "#9ca3af",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#020617",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 5,
  },
  cardIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#022c22",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  cardIconText: {
    fontSize: 20,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#e5e7eb",
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12,
    color: "#9ca3af",
  },
  logoutButton: {
    marginTop: 8,
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#374151",
  },
  logoutText: {
    color: "#9ca3af",
    fontSize: 13,
  },
});