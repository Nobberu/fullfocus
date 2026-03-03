import React from 'react';
import SquircleView from 'react-native-fast-squircle';
import { ViewProps } from 'react-native';

export default function SquircleWrapper(props: any) {
  return <SquircleView {...props} />;
}