import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import PassengerHomeScreen from "../screens/PassengerHomeScreen";
import RouteSearchScreen from "../screens/RouteSearchScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { colors } from "../theme/colors";

const Tab = createBottomTabNavigator();

function PlaceholderScreen({ label }) {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderText}>{label}</Text>
    </View>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.divider,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = "home-outline";

          if (route.name === "Home") {
            iconName = "home-outline";
          } else if (route.name === "Search") {
            iconName = "search-outline";
          } else if (route.name === "Trips") {
            iconName = "car-outline";
          } else if (route.name === "Notifications") {
            iconName = "notifications-outline";
          } else if (route.name === "Profile") {
            iconName = "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={PassengerHomeScreen} />
      <Tab.Screen name="Search" component={RouteSearchScreen} />
      <Tab.Screen
        name="Trips"
        children={() => <PlaceholderScreen label="Trips (coming soon)" />}
      />
      <Tab.Screen
        name="Notifications"
        children={() => (
          <PlaceholderScreen label="Notifications (coming soon)" />
        )}
      />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholderText: {
    color: colors.textOnDark,
    fontSize: 16,
  },
});

