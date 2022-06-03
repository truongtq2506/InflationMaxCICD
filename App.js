/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from "react";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Crashes from "appcenter-crashes";
import Analytics from "appcenter-analytics";
import { Colors } from "react-native/Libraries/NewAppScreen";

const App: () => Node = () => {
  const initState = {
    inflationRate: 0.0,
    riskFreeRate: 0.0,
    amount: 0.0,
    timeInYears: 1,
    afterInflation: 0.0,
    atRiskFree: 0.0,
    atRiskFreeAfterInflation: 0.0,
    difference: 0,
  };
  const [state, setState] = useState(initState);
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
  const calculateInflationImpact = (value, inflationRate, time) => {
    return value / Math.pow(1 + inflationRate, time);
  };


  const calculate = () => {
    const afterInflation = calculateInflationImpact(state.amount, state.inflationRate / 100, state.timeInYears);
    const atRiskFree = state.amount * Math.pow(1 + state.riskFreeRate / 100, state.timeInYears);
    const atRiskFreeAfterInflation = calculateInflationImpact(atRiskFree, state.inflationRate / 100, state.timeInYears);
    const difference = atRiskFreeAfterInflation - afterInflation;

    setState({
      ...state,
      afterInflation,
      atRiskFree,
      atRiskFreeAfterInflation,
      difference,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TextInput placeholder="Current inflation rate"
                 style={styles.textBox} keyboardType="decimal-pad"
                 onChangeText={(inflationRate) => setState({ ...state, inflationRate })} />
      <TextInput placeholder="Current risk free rate"
                 style={styles.textBox} keyboardType="decimal-pad"
                 onChangeText={(riskFreeRate) => setState({ ...state, riskFreeRate })} />
      <TextInput placeholder="Amount you want to save"
                 style={styles.textBox} keyboardType="decimal-pad"
                 onChangeText={(amount) => setState({ ...state, amount })} />
      <TextInput placeholder="For how long (in years) will you save?"
                 style={styles.textBox} keyboardType="decimal-pad"
                 onChangeText={(timeInYears) => setState({ ...state, timeInYears })} />

      <Text style={styles.label}>{state.timeInYears} years from now you will still have ${state.amount} but it
        will only be worth ${state.afterInflation}.</Text>
      <Text style={styles.label}>But if you invest it at a risk free rate you will have ${state.atRiskFree}.</Text>
      <Text style={styles.label}>Which will be worth ${state.atRiskFreeAfterInflation} after inflation.</Text>
      <Text style={styles.label}>A difference of: ${state.difference}.</Text>
      <TouchableOpacity
        onPress={() => {
          calculate();
          Analytics.trackEvent("calculate_inflation", { Internet: "5G", GPS: "On" });
        }}
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
        <Text>Calculate Inflation</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  label: {
    marginTop: 10,
  },
  textBox: {
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 10,
    width: 200,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: "absolute",
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
    color: Colors.dark,
  },
  highlight: {
    fontWeight: "700",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: "600",
    padding: 4,
    paddingRight: 12,
    textAlign: "right",
  },
});

export default App;
