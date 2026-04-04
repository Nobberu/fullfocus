import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import PomodoroBanner from "@/app/_components/PomodoroBanner";
import TodoList from "@/app/_components/ToDoList";
import Header from "@/components/shared/Header";
import { View } from "react-native";

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

  return (
    <SafeAreaView className="flex-1 bg-[#fafafa] px-2.5">
      <View className="mt-4 px-2.5">
        <Header />
        <PomodoroBanner />
        <TodoList
          todos={todos}
          toggleTodo={(id: string) => setTodos(currentTodos => currentTodos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))}
        />
      </View>
    </SafeAreaView>
  );
}