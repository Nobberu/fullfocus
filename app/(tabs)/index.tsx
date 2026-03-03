// app/(tabs)/index.tsx
import { Image } from "expo-image";
import { Link } from "expo-router";
import React from 'react';
import { StyleSheet, View, Text } from "react-native";

import SquircleWrapper from '../../components/SquircleWrapper'; 

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SquircleWrapper
         style={{
           width: 200,
           height: 200,
           backgroundColor: 'tomato',
           borderRadius: 30, 
         }}
         cornerSmoothing={0.6}
       />
      <View style={styles.featureSection}>
        <Text style={styles.Heading}>Pomodoro</Text>
      </View>
      <Text style={styles.Heading}>
        This is the starting of the fullfocus app. (Medium)
      </Text>
      <Text style={styles.lightText}>
        This is the starting of the fullfocus app. (Light)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  featureSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
  },
  lightText: {
    fontFamily: "InterLight",
    color: "#000",
    fontSize: 32,
    marginBottom: 10,
  },
  Heading: {
    fontFamily: "InterMedium",
    color: "#333",
    fontSize: 32,
    marginBottom: 10,
    letterSpacing: -1.76,
  },
});