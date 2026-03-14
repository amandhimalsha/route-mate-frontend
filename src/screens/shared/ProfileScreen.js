import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../theme/colors";
import { useAuth } from "../../hooks/useAuth";

export default function ProfileScreen() {
  const { currentUser } = useAuth();
  const [role, setRole] = useState(currentUser?.role ?? "passenger");
  const [displayName, setDisplayName] = useState(currentUser?.name ?? "");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [seatsAvailable, setSeatsAvailable] = useState("");

  useEffect(() => {
    if (currentUser?.role) {
      setRole(currentUser.role);
    }
  }, [currentUser]);

  const handleSave = () => {
    // TEMPORARY PROFILE SAVE
    // This is a no-op for now. When backend/profile storage is ready,
    // replace this with a call to a user/profile service.
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
            {currentUser?.email ?? "Not signed in"}
          </Text>

          <Text style={styles.label}>Role</Text>
          <Text style={styles.readOnlyValue}>
            {role === "driver" ? "Driver" : "Passenger"}
          </Text>

          <Text style={[styles.sectionTitle, styles.sectionTitleSpaced]}>
            Edit profile
          </Text>

          <Text style={styles.label}>Display Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor={colors.placeholderText}
            value={displayName}
            onChangeText={setDisplayName}
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+1 234 567 8900"
            placeholderTextColor={colors.placeholderText}
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
                placeholderTextColor={colors.placeholderText}
                value={vehicleModel}
                onChangeText={setVehicleModel}
              />

              <Text style={styles.label}>Seats Available</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. 3"
                placeholderTextColor={colors.placeholderText}
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
    backgroundColor: colors.darkBackground,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 24,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: colors.cardBackground,
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
    color: colors.textOnDark,
    marginBottom: 16,
  },
  sectionTitleSpaced: {
    marginTop: 24,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.mutedTextOnDark,
    marginBottom: 6,
  },
  readOnlyValue: {
    fontSize: 16,
    color: colors.textOnDark,
    marginBottom: 16,
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: colors.darkBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.inputBorder,
  },
  input: {
    backgroundColor: colors.darkBackground,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    color: colors.textOnDark,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  primaryButton: {
    backgroundColor: colors.success,
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.success,
    shadowOpacity: 0.4,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
  },
  primaryButtonText: {
    color: colors.successTextOnDark,
    fontSize: 16,
    fontWeight: "700",
  },
});

