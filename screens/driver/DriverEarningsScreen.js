import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../../theme/colors";
import { mockDriverEarnings } from "../../data/mockEarnings";

export default function DriverEarningsScreen() {
  const { summary, dailyBreakdown } = mockDriverEarnings;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Earnings</Text>

      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Total earnings</Text>
          <Text style={styles.summaryValue}>${summary.totalEarnings.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Trips completed</Text>
          <Text style={styles.summaryValue}>{summary.tripsCompleted}</Text>
        </View>
      </View>

      <View style={styles.summaryRow}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Avg per ride</Text>
          <Text style={styles.summaryValue}>${summary.avgPerRide.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>This week</Text>
          <Text style={styles.summaryValue}>${summary.thisWeek.toFixed(2)}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Last 7 days</Text>

      <View style={styles.chartCard}>
        <FlatList
          data={dailyBreakdown}
          keyExtractor={(item) => item.day}
          horizontal
          contentContainerStyle={styles.chartContent}
          renderItem={({ item }) => {
            const height = Math.max(16, (item.amount / 100) * 80);
            return (
              <View style={styles.barItem}>
                <View style={[styles.bar, { height }]} />
                <Text style={styles.barLabel}>{item.day}</Text>
              </View>
            );
          }}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textOnDark,
    marginBottom: 16,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginHorizontal: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  summaryLabel: {
    fontSize: 12,
    color: colors.mutedTextOnDark,
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textOnDark,
  },
  sectionTitle: {
    marginTop: 12,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "600",
    color: colors.textOnDark,
  },
  chartCard: {
    backgroundColor: colors.cardBackground,
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 14,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  chartContent: {
    paddingVertical: 4,
  },
  barItem: {
    alignItems: "center",
    marginHorizontal: 6,
  },
  bar: {
    width: 18,
    borderRadius: 9,
    backgroundColor: colors.primary,
    marginBottom: 6,
  },
  barLabel: {
    fontSize: 11,
    color: colors.mutedTextOnDark,
  },
});

