import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Pressable } from "react-native";
import SquircleWrapper from "@/components/shared/SquircleWrapper";

type Todo = {
  id: string;
  text: string;
  hour: string;
  status: string;
  completed: boolean;
};

export default function TodoList({ todos, toggleTodo }: { todos: Todo[]; toggleTodo: (id: string) => void }) {
  return (
    <View>
      <Text className="mx-1.5 mt-[42px] font-['InterMedium'] text-4xl tracking-[-1.98px] text-black/80">
        Today To-Do&apos;s
      </Text>
      <SquircleWrapper className="mt-4 rounded-[35px] bg-[#1B181B] px-[26px] py-[22px]" cornerSmoothing={0.6}>
        {todos.map(todo => (
          <Pressable key={todo.id} className="flex-row items-center justify-between py-3" onPress={() => toggleTodo(todo.id)}>
            <View>
              <Text className={`w-[140px] flex-shrink font-['InterMedium'] text-[28px] leading-[32.5px] text-white ${todo.completed ? "line-through opacity-30" : "opacity-60"}`}>
                {todo.text}
              </Text>
              <Text className={`font-['InterMedium'] text-xs text-white ${todo.completed ? "line-through opacity-20" : "opacity-40"}`}>
                {todo.hour} / {todo.status}
              </Text>
            </View>
            <LinearGradient
              colors={
                todo.completed
                  ? ["rgba(123, 187, 245, 1)", "rgba(42, 106, 164, 1)", "rgba(42, 106, 164, 1)", "rgba(123, 187, 245, 1)"]
                  : ["rgba(183, 183, 183, 1)", "rgba(103, 103, 103, 1)", "rgba(103, 103, 103, 1)", "rgba(183, 183, 183, 1)"]
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="h-9 w-9 rounded-full p-[1.5px]"
            >
              <View className={`flex-1 rounded-full ${todo.completed ? "bg-[#2A6AA4]" : "bg-[#676767]"}`} />
            </LinearGradient>
          </Pressable>
        ))}
      </SquircleWrapper>
    </View>
  );
}