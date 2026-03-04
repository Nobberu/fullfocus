import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import SquircleWrapper from "../../components/SquircleWrapper";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <SquircleWrapper style={styles.quickButton} cornerSmoothing={0.6}>
        <LinearGradient
          colors={["#0D1513", "#0B2C24", "#79837E"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0, 0.6, 1]}
          style={styles.gradient}
        >
          <View>
            <Text style={styles.Header}>Pomodoro</Text>
            <Text style={styles.Desc}>
              Work for 25 minutes, take a 5-minute break. After 4 cycles, take
              15-30 break.
            </Text>
          </View>
          <Text style={styles.startText}>Start</Text>
        </LinearGradient>
      </SquircleWrapper>

      <Text style={styles.HeaderLight}>
        This is the starting of the fullfocus app. (Medium)
      </Text>
      <Text style={styles.lightText}>
        This is the starting of the fullfocus app. (Light)
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fafafa",
  },
  quickButton: {
    height: 130,
    borderRadius: 35,
    marginTop: 10,
    overflow: "hidden",
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 26,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  Header: {
    fontFamily: "InterMedium",
    color: "#fff",
    fontSize: 34,
    lineHeight: 34,
    marginBottom: 6,
    letterSpacing: -1.87,
    textAlignVertical: "center",
  },
  HeaderLight: {
    fontFamily: "InterMedium",
    color: "#000",
    fontSize: 34,
    marginTop: 20,
  },
  Desc: {
    fontFamily: "InterMedium",
    color: "#fff",
    fontSize: 12,
    lineHeight: 15.6,
    letterSpacing: -0.66,
    width: 200,
  },
  startText: {
    fontFamily: "InterMedium",
    color: "#fff",
    fontSize: 16,
  },
  lightText: {
    fontFamily: "InterLight",
    color: "#000",
    fontSize: 32,
    marginBottom: 10,
  },
});
