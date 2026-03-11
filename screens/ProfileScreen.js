import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen({ navigation }) {
  const user = null;
  const [role, setRole] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [seatsAvailable, setSeatsAvailable] = useState("");

  useEffect(() => {
    // Profile loading will be re-implemented when auth/data is added back.
  }, []);

  const handleSave = () => {
    // Firestore logic to be implemented later
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Account</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.readOnlyValue}>
            {user?.email ?? "Not signed in"}
          </Text>

          <Text style={styles.label}>Role</Text>
          <Text style={styles.readOnlyValue}>
            {role === "driver" ? "Driver" : "Rider"}
          </Text>

          <Text style={[styles.sectionTitle, styles.sectionTitleSpaced]}>
            Edit profile
          </Text>

          <Text style={styles.label}>Display Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor="#64748b"
            value={displayName}
            onChangeText={setDisplayName}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+1 234 567 8900"
            placeholderTextColor="#64748b"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          {role === "driver" && (
            <>
              <Text style={[styles.sectionTitle, styles.sectionTitleSpaced]}>
                Driver details
              </Text>

              <Text style={styles.label}>Vehicle Model</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. Toyota Camry 2020"
                placeholderTextColor="#64748b"
                value={vehicleModel}
                onChangeText={setVehicleModel}
              />

              <Text style={styles.label}>Seats Available</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. 3"
                placeholderTextColor="#64748b"
                value={seatsAvailable}
                onChangeText={setSeatsAvailable}
                keyboardType="number-pad"
              />
            </>
          )}
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleSave}>
          <Text style={styles.primaryButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: "#020617",
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#e5e7eb",
    marginBottom: 16,
  },
  sectionTitleSpaced: {
    marginTop: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#9ca3af",
    marginBottom: 6,
  },
  readOnlyValue: {
    fontSize: 16,
    color: "#e5e7eb",
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: "#0f172a",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#1f2937",
  },
  input: {
    backgroundColor: "#0f172a",
    borderWidth: 1,
    borderColor: "#1f2937",
    color: "#f9fafb",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: "#22c55e",
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#22c55e",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  primaryButtonText: {
    color: "#022c22",
    fontSize: 16,
    fontWeight: "700",
  },
});
