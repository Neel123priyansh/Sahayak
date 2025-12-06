import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { colors, spacing, radii, shadows, typography } from '../theme/tokens';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';

const CourseBanner = () => {
  const progress = 72;

  return (
    <MotiView 
      style={styles.container}
      from={{ opacity: 0, scale: 0.9, translateY: 30 }}
      animate={{ opacity: 1, scale: 1, translateY: 0 }}
      transition={{ 
        type: 'spring', 
        damping: 20, 
        stiffness: 300, 
        delay: 200,
      }}
    >
      <MotiPressable
        onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
        animate={({ pressed, hovered }) => {
          'worklet';
          return { 
            scale: pressed ? 0.97 : hovered ? 1.02 : 1,
            rotateY: pressed ? '2deg' : '0deg',
          };
        }}
        transition={{ 
          type: 'spring', 
          damping: 30, 
          stiffness: 600,
          mass: 0.8,
        }}
      >
        <BlurView intensity={12} style={styles.blurContainer}>
          <LinearGradient
            colors={[colors.neutral[50], colors.brand.primary + '08', colors.brand.accent + '08']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradientBg}
          />

          {/* Floating accents */}
          <View style={[styles.accent1, { backgroundColor: colors.brand.primary + '25' }]} />
          <View style={[styles.accent2, { backgroundColor: colors.brand.accent + '20' }]} />

          <View style={styles.content}>
            <View style={styles.headerRow}>
              <View style={styles.iconWrap}>
                <LinearGradient colors={[colors.brand.primary, colors.brand.accent]} style={styles.iconGradient}>
                  <Ionicons name="play" size={22} color={colors.neutral[50]} />
                </LinearGradient>
              </View>
              <View style={styles.textBlock}>
                <Text style={styles.title}>Ongoing Course</Text>
                <Text style={styles.subtitle}>Storytelling Masterclass</Text>
              </View>
              <View style={styles.rightCTA}>
                <MotiPressable
                  onPress={() => Haptics.selectionAsync()}
                  style={{ borderRadius: spacing.lg, overflow: 'hidden' }}
                  animate={({ pressed, hovered }) => {
                    'worklet';
                    return { 
                      scale: pressed ? 0.92 : hovered ? 1.08 : 1,
                      rotateZ: pressed ? '3deg' : '0deg',
                    };
                  }}
                  transition={{ 
                    type: 'spring', 
                    damping: 25, 
                    stiffness: 500,
                    mass: 0.6,
                  }}
                >
                  <MotiView
                    from={{ opacity: 0, scale: 0.7, rotateX: '45deg' }}
                    animate={{ opacity: 1, scale: 1, rotateX: '0deg' }}
                    transition={{ 
                      type: 'spring', 
                      damping: 20, 
                      stiffness: 400, 
                      delay: 400,
                    }}
                  >
                    <LinearGradient colors={[colors.brand.primary, colors.brand.accent]} style={styles.ctaButton}>
                      <Ionicons name="play-circle" size={20} color={colors.neutral[50]} />
                      <Text style={styles.ctaText}>Resume</Text>
                    </LinearGradient>
                  </MotiView>
                </MotiPressable>
              </View>
            </View>

            {/* Progress */}
            <View style={styles.progressWrap}>
              <View style={styles.progressHeader}>
                <Text style={styles.progressLabel}>Progress</Text>
                <Text style={styles.progressValue}>{progress}%</Text>
              </View>
              <View style={styles.progressBar}>
                <LinearGradient
                  colors={[colors.brand.primary, colors.brand.accent]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={[styles.progressFill, { width: `${progress}%` }]}
                />
              </View>
            </View>
          </View>
        </BlurView>
      </MotiPressable>
    </MotiView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.md,
    marginBottom: spacing.xl,
    borderRadius: radii.xl,
    overflow: 'hidden',
    elevation: shadows.soft.elevation,
    shadowColor: shadows.soft.ios.color,
    shadowOffset: shadows.soft.ios.offset,
    shadowOpacity: shadows.soft.ios.opacity,
    shadowRadius: shadows.soft.ios.radius,
  },
  blurContainer: {
    borderRadius: radii.xl,
    overflow: 'hidden',
    borderWidth: 0.5,
    borderColor: colors.glass.border,
    backgroundColor: colors.glass.background,
  },
  gradientBg: {
    ...StyleSheet.absoluteFillObject,
  },
  accent1: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.lg,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  accent2: {
    position: 'absolute',
    bottom: spacing.lg,
    left: spacing.md,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  content: {
    padding: spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  iconWrap: {
    marginRight: spacing.sm,
  },
  iconGradient: {
    width: 44,
    height: 44,
    borderRadius: radii.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
  },
  title: {
    fontSize: typography.fontSize.xs,
    color: colors.neutral[600],
    fontFamily: typography.fontFamily.primarySemiBold,
    letterSpacing: typography.letterSpacing.wide,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: typography.fontSize.xl,
    color: colors.neutral[900],
    fontFamily: typography.fontFamily.secondarySemiBold,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.fontSize.xl * typography.lineHeight.tight,
  },
  rightCTA: {
    marginLeft: spacing.sm,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
    borderRadius: radii.md,
    elevation: shadows.soft.elevation,
    shadowColor: shadows.soft.ios.color,
    shadowOffset: shadows.soft.ios.offset,
    shadowOpacity: shadows.soft.ios.opacity,
    shadowRadius: shadows.soft.ios.radius,
  },
  ctaText: {
    color: colors.neutral[50],
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fontFamily.primarySemiBold,
    marginLeft: spacing.xs,
    letterSpacing: typography.letterSpacing.wide,
  },
  progressWrap: {
    marginTop: spacing.md,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  progressLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.neutral[600],
    fontFamily: typography.fontFamily.primary,
    letterSpacing: typography.letterSpacing.wide,
    textTransform: 'uppercase',
  },
  progressValue: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral[900],
    fontFamily: typography.fontFamily.primarySemiBold,
    letterSpacing: typography.letterSpacing.tight,
  },
  progressBar: {
    height: 10,
    borderRadius: spacing.lg,
    backgroundColor: colors.neutral[200],
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 8,
  },
});

export default CourseBanner;