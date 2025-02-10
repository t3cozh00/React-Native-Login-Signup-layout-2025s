import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { router } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";

const LoginView = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headingText}>Login</Text>
        <Text style={styles.subHeading}>Please sign in to continue.</Text>
        <View style={{ marginTop: 40 }}>
          <View
            style={[styles.inputContainer, emailFocused && styles.inputFocused]}
          >
            <Ionicons
              name="mail-outline"
              size={24}
              color="black"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.loginInput}
              placeholder="EMAIL"
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            ></TextInput>
          </View>
          <View
            style={[
              styles.inputContainer,
              passwordFocused && styles.inputFocused,
            ]}
          >
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="black"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.loginInput}
              placeholder="PASSWORD"
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            ></TextInput>
            <TouchableOpacity
              onPress={() => console.log("Forgot password tapped")}
            >
              <Text style={styles.forgotText}>FORGOT</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => console.log("Login button pressed")}
        >
          <Text style={styles.loginButtonText}>LOGIN</Text>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>
          Don't have an account?
          <Pressable onPress={() => router.push("/SignupView")}>
            <Text style={styles.signupText}>Sign up</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default LoginView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 40,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  headingText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subHeading: {
    fontSize: 18,
    color: "gray",
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  inputFocused: {
    borderBlockColor: "eaf6ed",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  inputIcon: {
    marginRight: 10,
  },
  loginInput: {
    flex: 1,
    height: 35,
    fontSize: 16,
  },
  forgotText: {
    color: "#5fb075",
    fontSize: 16,
    fontWeight: "bold",
  },

  loginButton: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    backgroundColor: "#5fb075",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "flex-end",
  },

  loginButtonText: {
    flex: 1,
    flexDirection: "row",
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },

  bottomContainer: {
    alignItems: "center",
    marginBottom: 20,
  },

  bottomText: {
    fontSize: 16,
    color: "gray",
  },
  signupText: {
    color: "#5fb075",
    fontWeight: "bold",
    marginLeft: 5,
  },
});
