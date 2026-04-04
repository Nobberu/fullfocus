import { View, Text, Pressable } from "react-native";

export default function Header() {
  return (
    <View className="mb-2.5 flex-row items-center justify-between">
      <View className="flex-row items-center gap-3">
        <View className="h-12 w-12 items-center justify-center rounded-full bg-[#1B181B]">
          <Text className="font-['InterMedium'] text-xl text-white">R</Text>
        </View>
        <View>
          <Text className="font-['InterLight'] text-sm text-black/60">
            Good Morning,
          </Text>
          <Text className="font-['InterMedium'] text-xl tracking-tight text-black">
            Guest
          </Text>
        </View>
      </View>
      <Pressable className="h-11 w-11 items-center justify-center rounded-full bg-[#e8e8e8]">
        <Text className="text-xl">⚙️</Text>
      </Pressable>
    </View>
  );
}