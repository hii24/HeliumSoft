import React, {useEffect} from 'react';
import Animated, {
  Easing,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

import styles from './styles';

interface ChartSegmentProps {
  height: number;
}

const ChartSegment: React.FC<ChartSegmentProps> = ({height}) => {
  const animatedHeight = useSharedValue(0);

  useEffect(() => {
    animatedHeight.value = withTiming(height, {
      duration: 500,
      easing: Easing.ease,
    });
  }, [height]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
    };
  });

  return <Animated.View style={[styles.segment, animatedStyle]} />;
};

export default ChartSegment;
