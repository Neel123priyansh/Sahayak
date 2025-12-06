import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Animated,
  AccessibilityInfo,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import WelcomeBanner from './WelcomeBanner';
import CourseBanner from './CourseBanner';
import StatsCard from './StatsCard';
import QuickActions from './QuickActions';
import { colors, spacing, typography, shadows } from '../theme/tokens';

const Dashboard = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const floatingAnim1 = React.useRef(new Animated.Value(0)).current;
  const floatingAnim2 = React.useRef(new Animated.Value(0)).current;
  const floatingAnim3 = React.useRef(new Animated.Value(0)).current;
  const rotateAnim = React.useRef(new Animated.Value(0)).current;
  const pulseAnim = React.useRef(new Animated.Value(1)).current;
  const [reduceMotion, setReduceMotion] = React.useState(false);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    if (!reduceMotion) {
      // Floating animations for background elements
      Animated.loop(
        Animated.sequence([
          Animated.timing(floatingAnim1, {
            toValue: 1,
            duration: 6000,
            useNativeDriver: true,
          }),
          Animated.timing(floatingAnim1, {
            toValue: 0,
            duration: 6000,
            useNativeDriver: true,
          }),
        ])
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(floatingAnim2, {
            toValue: 1,
            duration: 8000,
            useNativeDriver: true,
          }),
          Animated.timing(floatingAnim2, {
            toValue: 0,
            duration: 8000,
            useNativeDriver: true,
          }),
        ])
      ).start();

      Animated.loop(
        Animated.sequence([
          Animated.timing(floatingAnim3, {
            toValue: 1,
            duration: 10000,
            useNativeDriver: true,
          }),
          Animated.timing(floatingAnim3, {
            toValue: 0,
            duration: 10000,
            useNativeDriver: true,
          }),
        ])
      ).start();

      // Rotation animation
      Animated.loop(
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 20000,
          useNativeDriver: true,
        })
      ).start();

      // Pulse animation
      Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 1.1,
            duration: 2000,
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 2000,
            useNativeDriver: true,
          }),
        ])
      ).start();
    }
  }, [reduceMotion]);

  React.useEffect(() => {
    AccessibilityInfo.isReduceMotionEnabled().then(setReduceMotion).catch(() => {});
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduceMotion);
    return () => {
      // RN new API returns object with remove, older returns subscription
      if (sub && typeof sub.remove === 'function') sub.remove();
    };
  }, []);

  const statsData = [
    {
      title: 'Active Students',
      value: '156',
      change: '+12%',
      icon: 'people-outline',
      color: '#6366f1'
    },
    {
      title: 'Engagement Rate',
      value: '94%',
      change: '+5%',
      icon: 'trending-up-outline',
      color: '#06b6d4'
    }
  ];

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        
        {/* Animated Background */}
        <LinearGradient
          colors={[colors.neutral[50], colors.brand.primary + '10', colors.brand.accent + '10']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.backgroundGradient}
        >
          <View style={{ flex: 1 }}>
            {/* Floating background elements with subtle parallax */}
            <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }} pointerEvents="none">
              {/* Floating Element 1 - Large Circle */}
              <Animated.View
                style={[
                  styles.floatingElement1,
                  {
                    transform: [
                      {
                        translateY: floatingAnim1.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -30],
                        }),
                      },
                      {
                        translateX: floatingAnim1.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 20],
                        }),
                      },
                      {
                        scale: pulseAnim,
                      },
                    ],
                    opacity: 0.4,
                  },
                ]}
              />
              
              {/* Floating Element 2 - Medium Circle */}
              <Animated.View
                style={[
                  styles.floatingElement2,
                  {
                    transform: [
                      {
                        translateY: floatingAnim2.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 40],
                        }),
                      },
                      {
                        translateX: floatingAnim2.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -25],
                        }),
                      },
                      {
                        rotate: rotateAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '360deg'],
                        }),
                      },
                    ],
                    opacity: 0.3,
                  },
                ]}
              />
              
              {/* Floating Element 3 - Small Circle */}
              <Animated.View
                style={[
                  styles.floatingElement3,
                  {
                    transform: [
                      {
                        translateY: floatingAnim3.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -20],
                        }),
                      },
                      {
                        translateX: floatingAnim3.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, 15],
                        }),
                      },
                      {
                        scale: floatingAnim3.interpolate({
                          inputRange: [0, 1],
                          outputRange: [1, 1.2],
                        }),
                      },
                    ],
                    opacity: 0.5,
                  },
                ]}
              />
              
              {/* Additional decorative elements */}
              <Animated.View
                style={[
                  styles.floatingElement4,
                  {
                    transform: [
                      {
                        rotate: rotateAnim.interpolate({
                          inputRange: [0, 1],
                          outputRange: ['0deg', '-180deg'],
                        }),
                      },
                    ],
                    opacity: 0.2,
                  },
                ]}
              />
            </View>
            
            <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
              <Animated.ScrollView 
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                scrollEventThrottle={16}
                onScroll={reduceMotion ? undefined : Animated.event(
                  [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                  { useNativeDriver: true }
                )}
              >
                {/* Welcome Banner with Parallax */}
                <Animated.View
                  style={{
                    transform: [
                      {
                        translateY: scrollY.interpolate({
                          inputRange: [0, 200],
                          outputRange: [0, -50],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  }}
                >
                  <WelcomeBanner />
                </Animated.View>
                
                {/* Ongoing Course Banner with Parallax */}
                <Animated.View
                  style={{
                    transform: [
                      {
                        translateY: scrollY.interpolate({
                          inputRange: [0, 300],
                          outputRange: [0, -30],
                          extrapolate: 'clamp',
                        }),
                      },
                    ],
                  }}
                >
                  <CourseBanner />
                </Animated.View>
                
                {/* Stats Section with Parallax */}
                <Animated.View 
                  style={[
                    styles.statsSection,
                    {
                      transform: [
                        {
                          translateY: scrollY.interpolate({
                            inputRange: [100, 400],
                            outputRange: [20, -20],
                            extrapolate: 'clamp',
                          }),
                        },
                      ],
                      opacity: scrollY.interpolate({
                        inputRange: [0, 100, 200],
                        outputRange: [0.8, 1, 1],
                        extrapolate: 'clamp',
                      }),
                    },
                  ]}
                >
                  <Animated.View 
                    style={[
                      styles.sectionHeader,
                      {
                        transform: [
                          {
                            translateY: scrollY.interpolate({
                              inputRange: [0, 200],
                              outputRange: [0, -10],
                              extrapolate: 'clamp',
                            }),
                          },
                        ],
                      },
                    ]}
                  >
                    <Text style={styles.sectionTitle}>Performance Overview</Text>
                    <Text style={styles.sectionSubtitle}>Real-time insights and metrics</Text>
                  </Animated.View>
                  <View style={styles.statsGrid}>
                    {statsData.map((stat, index) => (
                      <StatsCard
                        key={index}
                        index={index}
                        title={stat.title}
                        value={stat.value}
                        change={stat.change}
                        icon={stat.icon}
                        color={stat.color}
                      />
                    ))}
                  </View>
                </Animated.View>

                {/* Quick Actions Section with Parallax */}
                <Animated.View 
                  style={[
                    styles.actionsSection,
                    {
                      transform: [
                        {
                          translateY: scrollY.interpolate({
                            inputRange: [200, 500],
                            outputRange: [30, -15],
                            extrapolate: 'clamp',
                          }),
                        },
                      ],
                    },
                  ]}
                >
                  <QuickActions />
                </Animated.View>
              </Animated.ScrollView>
            </Animated.View>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  backgroundGradient: {
    flex: 1,
    position: 'relative',
  },
  floatingElement1: {
    position: 'absolute',
    top: 80,
    right: 20,
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(99, 102, 241, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(99, 102, 241, 0.12)',
  },
  floatingElement2: {
    position: 'absolute',
    top: 250,
    left: -30,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(6, 182, 212, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(6, 182, 212, 0.12)',
  },
  floatingElement3: {
    position: 'absolute',
    bottom: 180,
    right: -15,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(168, 85, 247, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(168, 85, 247, 0.12)',
  },
  floatingElement4: {
    position: 'absolute',
    top: 400,
    left: '50%',
    marginLeft: -25,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(34, 197, 94, 0.06)',
    borderWidth: 2,
    borderColor: 'rgba(34, 197, 94, 0.1)',
  },
  content: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: spacing.xxxxxxl,
  },
  statsSection: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.xxl,
    marginBottom: spacing.lg,
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: spacing.xxl,
    marginHorizontal: spacing.lg,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.06)',
    ...shadows.soft,
    minHeight: 320,
  },
  sectionHeader: {
    marginBottom: spacing.xl,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: typography.fontSize['3xl'],
    fontFamily: typography.fontFamily.secondaryBold,
    color: colors.neutral[900],
    marginBottom: spacing.xs,
    textAlign: 'center',
    letterSpacing: typography.letterSpacing.tight,
    lineHeight: typography.fontSize['3xl'] * typography.lineHeight.tight,
  },
  sectionSubtitle: {
    fontSize: typography.fontSize.base,
    fontFamily: typography.fontFamily.primary,
    color: colors.neutral[600],
    textAlign: 'center',
    letterSpacing: typography.letterSpacing.wide,
    lineHeight: typography.fontSize.base * typography.lineHeight.relaxed,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    gap: spacing.lg,
    paddingHorizontal: spacing.sm,
  },
  actionsSection: {
    flex: 1,
    marginTop: spacing.sm,
  },
});

export default Dashboard;