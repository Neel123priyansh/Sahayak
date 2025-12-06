import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  AccessibilityInfo,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import Svg, { Circle, Defs, LinearGradient as SvgLinearGradient, Stop } from 'react-native-svg';
import Shimmer from './Shimmer';
import * as Haptics from 'expo-haptics';
import { colors, spacing, radii, shadows, typography } from '../theme/tokens';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';

const StatsCard = ({ title, value, change, icon, color, index = 0 }) => {
  const [loading, setLoading] = React.useState(true);
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800 + (index * 200)); // Staggered loading
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion).catch(() => {});
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduceMotion);
    return () => { clearTimeout(t); if (sub && typeof sub.remove === 'function') sub.remove(); };
  }, [index]);

  const isPositive = change && change.startsWith('+');

  const handlePress = () => {
    Haptics.selectionAsync();
  };

  // Modern Progress Ring
  const ModernProgress = ({ percentage = 75, size = 60 }) => {
    const strokeWidth = 4;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

    return (
      <View style={{ width: size, height: size }}>
        <Svg width={size} height={size} style={{ transform: [{ rotate: '-90deg' }] }}>
          <Defs>
            <SvgLinearGradient id="progressGrad" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0%" stopColor={color} stopOpacity="1" />
              <Stop offset="100%" stopColor={color} stopOpacity="0.6" />
            </SvgLinearGradient>
          </Defs>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#progressGrad)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
          />
        </Svg>
        <View style={styles.progressCenter}>
          <Ionicons name={icon} size={24} color="white" />
        </View>
      </View>
    );
  };

  return (
    <MotiPressable
      onPress={handlePress}
      animate={({ pressed, hovered }) => {
        'worklet';
        return { 
          scale: pressed ? 0.95 : hovered ? 1.02 : 1,
          rotateY: pressed ? '2deg' : '0deg',
        };
      }}
      transition={{ 
        type: 'spring', 
        damping: 20, 
        stiffness: 300,
        mass: 0.8,
      }}
      style={styles.container}
    >
      <MotiView
        from={reduceMotion ? { opacity: 1 } : { 
          opacity: 0, 
          translateY: 50, 
          scale: 0.8,
          rotateX: '15deg',
        }}
        animate={{ 
          opacity: 1, 
          translateY: 0, 
          scale: 1,
          rotateX: '0deg',
        }}
        transition={{ 
          type: 'spring', 
          damping: 18, 
          stiffness: 120, 
          delay: index * 150,
          mass: 1,
        }}
      >
        <LinearGradient
          colors={[color, `${color}CC`]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradientCard}
        >
          {/* Glass overlay */}
          <BlurView intensity={20} style={styles.glassOverlay}>
            <LinearGradient
              colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.1)']}
              style={styles.innerGradient}
            />
          </BlurView>

          {/* Decorative elements */}
          <View style={[styles.decorativeCircle, { backgroundColor: 'rgba(255,255,255,0.2)' }]} />
          <View style={[styles.decorativeCircle2, { backgroundColor: 'rgba(255,255,255,0.1)' }]} />

          <View style={styles.cardContent}>
            {loading ? (
              <View style={styles.loadingContainer}>
                <Shimmer style={styles.loadingIcon} disabled={reduceMotion} />
                <View style={styles.loadingText}>
                  <Shimmer style={styles.loadingTitle} disabled={reduceMotion} />
                  <Shimmer style={styles.loadingValue} disabled={reduceMotion} />
                </View>
              </View>
            ) : (
              <>
                {/* Header with progress ring */}
                <View style={styles.header}>
                  <ModernProgress percentage={parseInt(value) || 75} />
                  {change && (
                    <View style={styles.changeIndicator}>
                      <Ionicons 
                        name={isPositive ? 'trending-up' : 'trending-down'} 
                        size={14} 
                        color="white" 
                      />
                      <Text style={styles.changeText}>{change}</Text>
                    </View>
                  )}
                </View>

                {/* Content */}
                <View style={styles.contentSection}>
                  <Text style={styles.value} numberOfLines={1}>{value}</Text>
                  <Text style={styles.title} numberOfLines={2}>{title}</Text>
                </View>

                {/* Bottom indicator */}
                <View style={styles.bottomIndicator}>
                  <View style={styles.indicatorDots}>
                    {[...Array(3)].map((_, i) => (
                      <View
                        key={i}
                        style={[
                          styles.indicatorDot,
                          { opacity: i < (isPositive ? 3 : 2) ? 1 : 0.3 }
                        ]}
                      />
                    ))}
                  </View>
                  <Text style={styles.statusText}>
                    {isPositive ? 'Trending up' : 'Stable'}
                  </Text>
                </View>
              </>
            )}
          </View>
        </LinearGradient>
      </MotiView>
    </MotiPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '47%',
    minWidth: 160,
    maxWidth: 180,
    aspectRatio: 0.9,
    marginBottom: spacing.md,
  },
  gradientCard: {
    flex: 1,
    borderRadius: spacing.xxl,
    overflow: 'hidden',
    ...shadows.medium,
  },
  glassOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: spacing.xxl,
  },
  innerGradient: {
    flex: 1,
  },
  decorativeCircle: {
    position: 'absolute',
    top: -spacing.xl,
    right: -spacing.xl,
    width: spacing.xxxxxxl + spacing.lg,
    height: spacing.xxxxxxl + spacing.lg,
    borderRadius: (spacing.xxxxxxl + spacing.lg) / 2,
  },
  decorativeCircle2: {
    position: 'absolute',
    bottom: -spacing.xxxl,
    left: -spacing.xxxl,
    width: spacing.xxxxxxl + spacing.xxxl + spacing.xs,
    height: spacing.xxxxxxl + spacing.xxxl + spacing.xs,
    borderRadius: (spacing.xxxxxxl + spacing.xxxl + spacing.xs) / 2,
  },
  cardContent: {
    flex: 1,
    padding: spacing.lg,
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingIcon: {
    width: spacing.xxxxxxl,
    height: spacing.xxxxxxl,
    borderRadius: spacing.xxxl,
    marginRight: spacing.lg,
  },
  loadingText: {
    flex: 1,
  },
  loadingTitle: {
    width: '80%',
    height: spacing.lg,
    borderRadius: spacing.sm,
    marginBottom: spacing.sm,
  },
  loadingValue: {
    width: '60%',
    height: spacing.xxl,
    borderRadius: spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  progressCenter: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changeIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.08)',
  },
  changeText: {
    color: colors.neutral[50],
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fontFamily.primarySemiBold,
    marginLeft: spacing.xs,
    letterSpacing: typography.letterSpacing.wide,
  },
  contentSection: {
    alignItems: 'flex-start',
  },
  value: {
    fontSize: typography.fontSize['4xl'],
    fontFamily: typography.fontFamily.secondaryBold,
    color: colors.neutral[50],
    marginBottom: spacing.xs,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.fontSize['4xl'] * typography.lineHeight.tight,
  },
  title: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fontFamily.primaryMedium,
    color: colors.neutral[100],
    lineHeight: typography.fontSize.sm * typography.lineHeight.snug,
    letterSpacing: typography.letterSpacing.normal,
  },
  bottomIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  indicatorDots: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  indicatorDot: {
    width: spacing.xs + 2,
    height: spacing.xs + 2,
    borderRadius: (spacing.xs + 2) / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  statusText: {
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fontFamily.primary,
    color: colors.neutral[200],
    letterSpacing: typography.letterSpacing.wide,
  },
});

export default StatsCard;