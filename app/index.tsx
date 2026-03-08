import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import SquircleWrapper from "../components/SquircleWrapper";

export default function HomeScreen() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      text: "Cleaning Room",
      hour: "05:00 - 05:30",
      status: "Personal",
      completed: false,
    },
    {
      id: "2",
      text: "Client Meeting",
      hour: "10:00 - 12:00",
      status: "Team",
      completed: false,
    },
    {
      id: "3",
      text: "Team Evaluation",
      hour: "14:00 - 16:00",
      status: "Team",
      completed: true,
    },
  ]);

  const toggleTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

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
            <Text style={styles.focusName}>Pomodoro</Text>
            <Text style={styles.focusDesc}>
              Work for 25 minutes, take a 5-minute break. After 4 cycles, take
              15-30 break.
            </Text>
          </View>

          <LinearGradient
            colors={[
              "rgba(255, 255, 255, 0.55)",
              "rgba(255, 255, 255, 0.06)",
              "rgba(255, 255, 255, 0.06)",
              "rgba(255, 255, 255, 0.06)",
              "rgba(255, 255, 255, 0.06)",
              "rgba(255, 255, 255, 0.06)",
              "rgba(255, 255, 255, 0.45)",
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.startBorder}
          >
            <View style={styles.startInner}>
              <Text style={styles.startText}>Start</Text>
            </View>
          </LinearGradient>
        </LinearGradient>
      </SquircleWrapper>

      <Text style={styles.sectionTitle}>Today To-Do's</Text>

      <SquircleWrapper style={styles.todoListContainer} cornerSmoothing={0.6}>
        {todos.map((todo) => (
          <Pressable
            key={todo.id}
            style={styles.todoRow}
            onPress={() => toggleTodo(todo.id)}
          >
            <View>
              <Text
                style={[
                  styles.todoText,
                  todo.completed && styles.todoTextCompleted,
                ]}
              >
                {todo.text}
              </Text>

              <Text
                style={[
                  styles.todoDesc,
                  todo.completed && styles.todoDescCompleted,
                ]}
              >
                {todo.hour} / {todo.status}
              </Text>
            </View>

            <LinearGradient
              colors={
                todo.completed
                  ? [
                      "rgba(123, 187, 245, 1)",
                      "rgba(42, 106, 164, 1)",
                      "rgba(42, 106, 164, 1)",
                      "rgba(123, 187, 245, 1)",
                    ]
                  : [
                      "rgba(183, 183, 183, 1)",
                      "rgba(103, 103, 103, 1)",
                      "rgba(103, 103, 103, 1)",
                      "rgba(183, 183, 183, 1)",
                    ]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.checkboxBorder}
            >
              <View
                style={[
                  styles.checkboxInner,
                  todo.completed && styles.checkboxInnerCompleted,
                ]}
              />
            </LinearGradient>
          </Pressable>
        ))}
      </SquircleWrapper>
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
  focusName: {
    fontFamily: "InterMedium",
    color: "#fff",
    opacity: 0.7,
    fontSize: 34,
    lineHeight: 34,
    marginBottom: 7,
    letterSpacing: -1.87,
    textAlignVertical: "center",
  },
  focusDesc: {
    fontFamily: "InterMedium",
    color: "#fff",
    opacity: 0.7,
    width: 200,
    fontSize: 12,
    lineHeight: 15.6,
    letterSpacing: -0.66,
  },
  startBorder: {
    padding: 1.25,
    borderRadius: 100,
  },
  startInner: {
    backgroundColor: "#1F3831",
    paddingHorizontal: 36,
    paddingVertical: 15,
    borderRadius: 100,
  },
  startText: {
    fontFamily: "InterMedium",
    color: "#fff",
    opacity: 0.7,
    fontSize: 16,
    lineHeight: 16,
  },
  sectionTitle: {
    fontFamily: "InterMedium",
    color: "#000",
    opacity: 0.8,
    fontSize: 36,
    marginTop: 42,
    marginHorizontal: 5,
    letterSpacing: -1.98,
  },

  todoListContainer: {
    marginTop: 16,
    borderRadius: 35,
    paddingHorizontal: 26,
    paddingVertical: 22,
    backgroundColor: "#1B181B",
  },
  todoRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },

  checkboxBorder: {
    width: 36,
    height: 36,
    borderRadius: 18,
    padding: 1.5,
  },
  checkboxInner: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: "#676767",
  },
  checkboxInnerCompleted: {
    backgroundColor: "#2A6AA4",
  },

  todoText: {
    width: 140,
    color: "#fff",
    fontFamily: "InterMedium",
    fontSize: 28,
    lineHeight: 32.5,
    flexShrink: 1,
    opacity: 0.6,
  },
  todoTextCompleted: {
    textDecorationLine: "line-through",
  },

  todoDesc: {
    fontFamily: "InterMedium",
    fontSize: 12,
    color: "#fff",
    opacity: 0.4,
  },
  todoDescCompleted: {
    textDecorationLine: "line-through",
  },
});
