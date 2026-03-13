import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/colors";

const MOCK_DRIVERS = [
  {
    id: "1",
    name: "Alex Johnson",
    vehicle: "Toyota Prius • Hybrid",
    distance: "0.8 km away",
  },
  {
    id: "2",
    name: "Maria Lopez",
    vehicle: "Honda Civic • Sedan",
    distance: "1.5 km away",
  },
  {
    id: "3",
    name: "Sam Chen",
    vehicle: "Tesla Model 3 • EV",
    distance: "2.2 km away",
  },
];

export default function RouteSearchScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find a Route</Text>
        <Text style={styles.headerSubtitle}>
          Set your trip details to see nearby drivers.
        </Text>
      </View>

      {/* Search card */}
      <View style={styles.searchCard}>
        <View style={styles.inputRow}>
          <Ionicons
            name="location-outline"
            size={18}
            color={colors.primary}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Start location"
            placeholderTextColor={colors.placeholderText}
            style={styles.input}
          />
        </View>

        <View style={styles.inputRow}>
          <Ionicons
            name="flag-outline"
            size={18}
            color={colors.accent}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Destination"
            placeholderTextColor={colors.placeholderText}
            style={styles.input}
          />
        </View>

        <View style={styles.inputRow}>
          <Ionicons
            name="time-outline"
            size={18}
            color={colors.secondary}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Time window (e.g. 8:00–8:30 AM)"
            placeholderTextColor={colors.placeholderText}
            style={styles.input}
          />
        </View>

        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search routes</Text>
        </TouchableOpacity>
      </View>

      {/* Results header */}
      <Text style={styles.resultsTitle}>Available drivers</Text>

      {/* Driver cards */}
      <FlatList
        data={MOCK_DRIVERS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.driverCard}>
            <View style={styles.driverRow}>
              <View style={styles.avatar}>
                <Text style={styles.avatarInitial}>
                  {item.name.charAt(0).toUpperCase()}
                </Text>
              </View>
              <View style={styles.driverInfo}>
                <Text style={styles.driverName}>{item.name}</Text>
                <Text style={styles.driverVehicle}>{item.vehicle}</Text>
                <View style={styles.distanceRow}>
                  <Ionicons
                    name="navigate-outline"
                    size={14}
                    color={colors.secondary}
                    style={{ marginRight: 4 }}
                  />
                  <Text style={styles.driverDistance}>{item.distance}</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity style={styles.requestButton}>
              <Text style={styles.requestButtonText}>Request ride</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  headerSubtitle: {
    marginTop: 4,
    fontSize: 14,
    color: colors.textSecondary,
  },
  searchCard: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 4,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: 999,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 14,
    color: colors.textPrimary,
  },
  searchButton: {
    marginTop: 8,
    backgroundColor: colors.primary,
    borderRadius: 999,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  searchButtonText: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
  },
  resultsTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: 8,
  },
  listContent: {
    paddingBottom: 24,
  },
  driverCard: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  driverRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  avatarInitial: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "700",
  },
  driverInfo: {
    flex: 1,
  },
  driverName: {
    fontSize: 15,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  driverVehicle: {
    marginTop: 2,
    fontSize: 13,
    color: colors.textSecondary,
  },
  distanceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  driverDistance: {
    fontSize: 12,
    color: colors.secondary,
  },
  requestButton: {
    marginTop: 4,
    alignSelf: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: colors.secondary,
  },
  requestButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "600",
  },
});

