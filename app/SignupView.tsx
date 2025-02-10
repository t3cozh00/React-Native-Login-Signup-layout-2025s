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
import React from "react";

const SignupView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.headingText}>Create Account</Text>

        <View style={{ marginTop: 40 }}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-outline"
              size={24}
              color="black"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.signupInput}
              placeholder="FULL NAME"
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={24}
              color="black"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.signupInput}
              placeholder="EMAIL"
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="black"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.signupInput}
              placeholder="PASSWORD"
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={24}
              color="black"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.signupInput}
              placeholder="COMFIRM PASSWORD"
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => console.log("Login button pressed")}
        >
          <Text style={styles.signupButtonText}>SIGN UP</Text>
          <Ionicons name="arrow-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>
          Already have an account?
          <Pressable onPress={() => router.push("/LoginView")}>
            <Text style={styles.signupText}>Sign in</Text>
          </Pressable>
        </Text>
      </View>
    </View>
  );
};

export default SignupView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
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

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  inputIcon: {
    marginRight: 10,
  },
  signupInput: {
    flex: 1,
    height: 35,
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
