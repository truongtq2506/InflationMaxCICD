/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from "react";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Crashes from "appcenter-crashes";

const App: () => Node = () => {
  useEffect(() => {
    const checkPreviousSession = async () => {
      const didCrash = await Crashes.hasCrashedInLastSession();
      if (didCrash) {
        const report = await Crashes.lastSessionCrashReport();
        alert("Sorry about that crash, we're working on a solution");
      }
    };
    checkPreviousSession();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => Crashes.generateTestCrash()}
        style={{
          padding: 10,
          paddingHorizontal: 30,
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 6,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Crash</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
