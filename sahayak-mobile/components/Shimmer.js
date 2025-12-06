import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../theme/tokens';

const Shimmer = ({ style, disabled = false }) => {
  const translateX = React.useRef(new Animated.Value(-100)).current;

  React.useEffect(() => {
    if (disabled) return;
    const loop = Animated.loop(
      Animated.timing(translateX, {
        toValue: 100,
        duration: 1200,
        useNativeDriver: true,
      })
    );
    loop.start();
    return () => loop.stop();
  }, [disabled]);

  return (
    <View style={[styles.container, style, { backgroundColor: colors.skeleton }]}> 
      {!disabled && (
        <Animated.View style={[styles.shimmer, { transform: [{ translateX }] }]}> 
          <LinearGradient
            colors={[
              'rgba(255,255,255,0)',
              'rgba(255,255,255,0.5)',
              'rgba(255,255,255,0)'
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  shimmer: {
    position: 'absolute',
    left: '-50%',
    right: '-50%',
    top: 0,
    bottom: 0,
  },
});

export default Shimmer;