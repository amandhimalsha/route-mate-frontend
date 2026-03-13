import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { registerUser } from "../services/authService";
import { colors } from "../theme/colors";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("rider");
  const [displayName] = useState("");
  const [phone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (loading) return;
    if (!email.trim() || !password) {
      Alert.alert("Error", "Please enter email and password.");
      return;
    }

    setLoading(true);
    try {
      await registerUser({
        email: email.trim(),
        password,
        role,
        displayName,
        phone,
      });

      Alert.alert("Success", "Account created!");
      navigation.navigate("Login");
    } catch (error) {
      const message =
        error?.response?.data?.message ??
        error?.message ??
        "Unable to register. Please try again.";
      Alert.alert("Error", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.logoContainer}>
          <View style={styles.logoCircle}>
            <Text style={styles.logoText}>R</Text>
          </View>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>Choose how you want to ride</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#64748b"
            style={styles.input}
            onChangeText={setEmail}
            value={email}
          />

          <TextInput
            placeholder="Password"
            placeholderTextColor="#64748b"
            secureTextEntry
            style={styles.input}
            onChangeText={setPassword}
            value={password}
          />

          <Text style={styles.roleLabel}>Register as</Text>
          <View style={styles.roleContainer}>
            <TouchableOpacity
              style={[
                styles.roleButton,
                role === "rider" && styles.roleButtonSelected,
              ]}
              onPress={() => setRole("rider")}
            >
              <Text
                style={[
                  styles.roleButtonText,
                  role === "rider" && styles.roleButtonTextSelected,
                ]}
              >
                Rider
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.roleButton,
                role === "driver" && styles.roleButtonSelected,
              ]}
              onPress={() => setRole("driver")}
            >
              <Text
                style={[
                  styles.roleButtonText,
                  role === "driver" && styles.roleButtonTextSelected,
                ]}
              >
                Driver
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.primaryButton}
            onPress={handleRegister}
            disabled={loading}
          >
            <Text style={styles.primaryButtonText}>
              {loading ? "Creating..." : "Register"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.secondaryButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.secondaryButtonText}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBackground,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: colors.cardBackground,
    borderRadius: 20,
    paddingVertical: 32,
    paddingHorizontal: 24,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 10 },
    elevation: 6,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 28,
  },
  logoCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.success,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  logoText: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.darkBackground,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textOnDark,
    textAlign: "center",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: colors.mutedTextOnDark,
    textAlign: "center",
  },
  form: {
    marginTop: 4,
  },
  input: {
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    color: colors.textOnDark,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 999,
    marginBottom: 14,
  },
  roleLabel: {
    marginTop: 4,
    marginBottom: 8,
    color: colors.textOnDark,
    fontSize: 14,
    fontWeight: "500",
  },
  roleContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 18,
  },
  roleButton: {
    flex: 1,
    backgroundColor: colors.cardBackground,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    paddingVertical: 10,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  roleButtonSelected: {
    backgroundColor: colors.success,
    borderColor: colors.success,
  },
  roleButtonText: {
    textAlign: "center",
    color: colors.textOnDark,
    fontWeight: "600",
  },
  roleButtonTextSelected: {
    color: colors.successTextOnDark,
  },
  primaryButton: {
    marginTop: 4,
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
  secondaryButton: {
    marginTop: 14,
    paddingVertical: 12,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.success,
  },
  secondaryButtonText: {
    color: colors.textOnDark,
    fontSize: 14,
    fontWeight: "500",
  },
});
