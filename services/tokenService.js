import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "auth_token";

export async function saveToken(token) {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, token ?? "");
  } catch {
    // Ignore storage errors for now
  }
}

export async function getToken() {
  try {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return token;
  } catch {
    return null;
  }
}

export async function removeToken() {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch {
    // Ignore storage errors for now
  }
}

