import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity,
  AccessibilityInfo,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { colors, spacing, radii, shadows, typography } from '../theme/tokens';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';

const WelcomeBanner = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scaleAnim = React.useRef(new Animated.Value(0.95)).current;
  const drift1 = React.useRef(new Animated.Value(0)).current;
  const drift2 = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    // Subtle drift for floating accents
    Animated.loop(
      Animated.sequence([
        Animated.timing(drift1, {
          toValue: 1,
          duration: 4000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(drift1, {
          toValue: 0,
          duration: 4000,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(drift2, {
          toValue: 1,
          duration: 3500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(drift2, {
          toValue: 0,
          duration: 3500,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View 
      style={[
        styles.container,
        {
          opacity: fadeAnim,
          transform: [{ scale: scaleAnim }],
        },
      ]}
    >
      <BlurView intensity={8} style={styles.blurContainer}>
        <LinearGradient
          colors={['rgba(255,255,255,0.25)', 'rgba(255,255,255,0.1)']}
          style={styles.gradientOverlay}
        />
        
        {/* Floating elements */}
        <Animated.View
          style={[
            styles.floatingDot1,
            {
              transform: [
                { translateY: drift1.interpolate({ inputRange: [0, 1], outputRange: [0, -4] }) },
                { translateX: drift1.interpolate({ inputRange: [0, 1], outputRange: [0, 3] }) },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.floatingDot2,
            {
              transform: [
                { translateY: drift2.interpolate({ inputRange: [0, 1], outputRange: [0, 3] }) },
                { translateX: drift2.interpolate({ inputRange: [0, 1], outputRange: [0, -2] }) },
              ],
            },
          ]}
        />
        
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.userSection}>
              <LinearGradient
                colors={['#667eea', '#764ba2']}
                style={styles.avatar}
              >
                <Text style={styles.avatarText}>P</Text>
                <View style={styles.statusDot} />
              </LinearGradient>
              
              <View style={styles.userInfo}>
                <Text style={styles.greeting}>Welcome back</Text>
                <Text style={styles.userName}>Dr. Priya</Text>
                <View style={styles.badgeContainer}>
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>Mathematics</Text>
                  </View>
                </View>
              </View>
            </View>
            
            <View style={styles.actionButtons}>
              {['notifications-outline', 'search-outline', 'settings-outline'].map((icon, index) => (
                <MotiPressable 
                  key={index}
                  style={[styles.actionButton, index !== 0 && { marginLeft: spacing.sm }]}
                  onPress={() => Haptics.selectionAsync()}
                  animate={({ pressed, hovered }) => {
                    'worklet';
                    return { 
                      scale: pressed ? 0.92 : hovered ? 1.08 : 1,
                      rotateZ: pressed ? '5deg' : '0deg',
                    };
                  }}
                  transition={{ 
                    type: 'spring', 
                    damping: 30, 
                    stiffness: 600,
                    mass: 0.5,
                  }}
                >
                  <MotiView
                    from={{ opacity: 0, scale: 0.7, rotateY: '90deg' }}
                    animate={{ opacity: 1, scale: 1, rotateY: '0deg' }}
                    transition={{ 
                      type: 'spring', 
                      damping: 20, 
                      stiffness: 400, 
                      delay: index * 100,
                    }}
                  >
                    <BlurView intensity={15} style={styles.buttonBlur}>
                      <Ionicons name={icon} size={20} color={colors.textSecondary} />
                    </BlurView>
                  </MotiView>
                </MotiPressable>
              ))}
            </View>
          </View>
          
          {/* Featured Card */}
          <View style={styles.featuredCard}>
            <BlurView intensity={25} style={styles.cardBlur}>
              <LinearGradient
                colors={['rgba(99,102,241,0.1)', 'rgba(139,92,246,0.05)']}
                style={styles.cardGradient}
              />
              <View style={styles.cardContent}>
                <LinearGradient
                  colors={['#6366f1', '#8b5cf6']}
                  style={styles.cardIcon}
                >
                  <Ionicons name="trophy" size={24} color="white" />
                </LinearGradient>
                <View style={styles.cardText}>
                  <Text style={styles.cardTitle}>Mathematics Olympiad</Text>
                  <Text style={styles.cardSubtitle}>Prepare students for competition</Text>
                  <View style={styles.cardMeta}>
                    <View style={styles.metaItem}>
                      <Ionicons name="calendar-outline" size={14} color={colors.textSecondary} />
                      <Text style={styles.metaText}>Due in 5 days</Text>
                    </View>
                  </View>
                </View>
                <MotiPressable
                  style={styles.continueButton}
                  onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
                  animate={({ pressed, hovered }) => {
                    'worklet';
                    return { 
                      scale: pressed ? 0.95 : hovered ? 1.05 : 1,
                      rotateX: pressed ? '5deg' : '0deg',
                    };
                  }}
                  transition={{ 
                    type: 'spring', 
                    damping: 25, 
                    stiffness: 500,
                    mass: 0.8,
                  }}
                >
                  <MotiView
                    from={{ opacity: 0, scale: 0.8, translateY: 20 }}
                    animate={{ opacity: 1, scale: 1, translateY: 0 }}
                    transition={{ 
                      type: 'spring', 
                      damping: 20, 
                      stiffness: 300, 
                      delay: 600,
                    }}
                  >
                    <LinearGradient
                      colors={['#6366f1', '#8b5cf6']}
                      style={styles.buttonGradient}
                    >
                      <Text style={styles.buttonText}>Continue</Text>
                    </LinearGradient>
                  </MotiView>
                </MotiPressable>
              </View>
            </BlurView>
          </View>
          
          {/* Stats Row */}
          <View style={styles.statsRow}>
            {[
              { icon: 'people-outline', value: '156', label: 'Students', color: '#6366f1' },
              { icon: 'book-outline', value: '24', label: 'Lessons', color: '#8b5cf6' },
              { icon: 'trending-up-outline', value: '87%', label: 'Progress', color: '#06b6d4' },
              { icon: 'trophy-outline', value: '12', label: 'Awards', color: '#f59e0b' },
            ].map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <View style={[styles.statIcon, { backgroundColor: `${stat.color}20` }]}>
                  <Ionicons name={stat.icon} size={20} color={stat.color} />
                </View>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>
      </BlurView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
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
    borderColor: colors.borderLight,
    backgroundColor: colors.cardBackground,
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  floatingDot1: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(99,102,241,0.3)',
  },
  floatingDot2: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(139,92,246,0.4)',
  },
  content: {
    padding: spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.lg,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: radii.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
    position: 'relative',
  },
  avatarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statusDot: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#10b981',
    borderWidth: 2,
    borderColor: 'white',
  },
  userInfo: {
    flex: 1,
  },
  greeting: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral[600],
    marginBottom: spacing.xs,
    fontFamily: typography.fontFamily.primary,
    letterSpacing: typography.letterSpacing.wide,
  },
  userName: {
    fontSize: typography.fontSize['2xl'],
    color: colors.neutral[900],
    marginBottom: spacing.sm,
    fontFamily: typography.fontFamily.secondarySemiBold,
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.fontSize['2xl'] * typography.lineHeight.tight,
  },
  badgeContainer: {
    flexDirection: 'row',
  },
  badge: {
    backgroundColor: colors.brand.primary + '15',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: spacing.lg,
    borderWidth: 1,
    borderColor: colors.brand.primary + '30',
  },
  badgeText: {
    fontSize: typography.fontSize.xs,
    color: colors.brand.primary,
    fontFamily: typography.fontFamily.primarySemiBold,
    letterSpacing: typography.letterSpacing.wide,
  },
  actionButtons: {
    flexDirection: 'row',
    // Remove gap; apply marginLeft to subsequent buttons in render for RN consistency
  },
  actionButton: {
    borderRadius: radii.sm,
    overflow: 'hidden',
  },
  buttonBlur: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  featuredCard: {
    borderRadius: radii.lg,
    overflow: 'hidden',
    marginBottom: spacing.lg,
  },
  cardBlur: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  cardGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: radii.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  cardText: {
    flex: 1,
  },
  cardTitle: {
    fontSize: typography.fontSize.lg,
    color: colors.neutral[900],
    marginBottom: spacing.xs,
    fontFamily: typography.fontFamily.secondarySemiBold,
    letterSpacing: typography.letterSpacing.tight,
  },
  cardSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral[600],
    marginBottom: spacing.xs,
    fontFamily: typography.fontFamily.primary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  cardMeta: {
    flexDirection: 'row',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: spacing.sm,
  },
  metaText: {
    fontSize: typography.fontSize.xs,
    color: colors.neutral[600],
    marginLeft: spacing.xs,
    fontFamily: typography.fontFamily.primary,
    letterSpacing: typography.letterSpacing.wide,
  },
  continueButton: {
    borderRadius: spacing.lg,
    overflow: 'hidden',
    ...shadows.soft,
  },
  buttonGradient: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
  },
  buttonText: {
    color: colors.neutral[50],
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fontFamily.primarySemiBold,
    letterSpacing: typography.letterSpacing.wide,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: radii.sm,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  statValue: {
    fontSize: typography.fontSize.xl,
    color: colors.neutral[900],
    marginBottom: spacing.xs,
    fontFamily: typography.fontFamily.secondarySemiBold,
    letterSpacing: typography.letterSpacing.tight,
  },
  statLabel: {
    fontSize: typography.fontSize.xs,
    color: colors.neutral[600],
    fontFamily: typography.fontFamily.primary,
    letterSpacing: typography.letterSpacing.wide,
  },
});

export default WelcomeBanner;