import React from "react";
import { View } from "react-native";

export default function SquircleWrapper(props: any) {
  const { cornerSmoothing, ...viewProps } = props;

  return <View {...viewProps} />;
}
