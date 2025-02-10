import { ScrollView } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginView from "./LoginView";
import SignupView from "./SignupView";

const index = () => {
  return (
    <ScrollView>
      <LoginView />
    </ScrollView>
  );
};

export default index;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
// });
