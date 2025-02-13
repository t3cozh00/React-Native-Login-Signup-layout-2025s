import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";

const SignupView = () => {
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>
          <Link href="/">
            <Ionicons name="arrow-back" size={30} color="gray" />
          </Link>

          <Text style={styles.headingText}>Create Account</Text>

          <View style={{ marginTop: 40 }}>
            <View
              style={[
                styles.inputContainer,
                nameFocused && styles.inputFocused,
              ]}
            >
              <Ionicons
                name="person-outline"
                size={24}
                color="black"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.signupInput}
                placeholder="FULL NAME"
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
              ></TextInput>
            </View>
            <View
              style={[
                styles.inputContainer,
                emailFocused && styles.inputFocused,
              ]}
            >
              <Ionicons
                name="mail-outline"
                size={24}
                color="black"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.signupInput}
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
                style={styles.signupInput}
                placeholder="PASSWORD"
                onFocus={() => setPasswordFocused(true)}
                onBlur={() => setPasswordFocused(false)}
              ></TextInput>
            </View>
            <View
              style={[
                styles.inputContainer,
                confirmPasswordFocused && styles.inputFocused,
              ]}
            >
              <Ionicons
                name="lock-closed-outline"
                size={24}
                color="black"
                style={styles.inputIcon}
              />
              <TextInput
                style={styles.signupInput}
                placeholder="COMFIRM PASSWORD"
                onFocus={() => setConfirmPasswordFocused(true)}
                onBlur={() => setConfirmPasswordFocused(false)}
              ></TextInput>
            </View>
          </View>

          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => console.log("Sign up button pressed")}
          >
            <Text style={styles.signupButtonText}>SIGN UP</Text>
            <Ionicons name="arrow-forward" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>
          Already have an account?
          <Link href="/">
            <Text style={styles.signupText}>Sign in</Text>
          </Link>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignupView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 30,
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  headingText: {
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#a0a0a3",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },

  inputFocused: {
    borderColor: "#0a0a0a",
    shadowColor: "#0a0a0a",
  },

  inputIcon: {
    marginRight: 10,
  },
  signupInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },

  signupButton: {
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

  signupButtonText: {
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
