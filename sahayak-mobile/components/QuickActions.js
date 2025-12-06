import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { colors, spacing, radii, shadows, typography } from '../theme/tokens';
import { MotiView } from 'moti';
import { MotiPressable } from 'moti/interactions';

const QuickActions = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const actions = [
    {
      id: 1,
      title: 'Mathematics Course',
      subtitle: 'Advanced Algebra',
      icon: 'calculator-outline',
      color: '#6366f1',
      progress: 78,
      students: 24,
      gradient: ['#6366f1', '#8b5cf6'],
    },
    {
      id: 2,
      title: 'Physics Lab',
      subtitle: 'Quantum Mechanics',
      icon: 'flask-outline',
      color: '#06b6d4',
      progress: 65,
      students: 18,
      gradient: ['#06b6d4', '#0891b2'],
    },
    {
      id: 3,
      title: 'Literature Class',
      subtitle: 'Modern Poetry',
      icon: 'book-outline',
      color: '#10b981',
      progress: 92,
      students: 32,
      gradient: ['#10b981', '#059669'],
    },
    {
      id: 4,
      title: 'Chemistry Lab',
      subtitle: 'Organic Chemistry',
      icon: 'beaker-outline',
      color: '#f59e0b',
      progress: 56,
      students: 15,
      gradient: ['#f59e0b', '#d97706'],
    },
  ];

  const quickButtons = [
    { icon: 'add-circle-outline', label: 'New Course', color: '#6366f1' },
    { icon: 'people-outline', label: 'Students', color: '#8b5cf6' },
    { icon: 'bar-chart-outline', label: 'Analytics', color: '#06b6d4' },
    { icon: 'settings-outline', label: 'Settings', color: '#10b981' },
  ];

  const CourseCard = ({ course, index }) => {
    return (
      <MotiPressable
        onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}
        animate={({ pressed, hovered }) => {
          'worklet';
          return { 
            scale: pressed ? 0.96 : hovered ? 1.02 : 1,
            rotateY: pressed ? '3deg' : '0deg',
          };
        }}
        transition={{ 
          type: 'spring', 
          damping: 20, 
          stiffness: 400,
          mass: 0.7,
        }}
        style={styles.courseCard}
      >
        <BlurView intensity={8} style={styles.courseBlur}>
          <MotiView
            from={{ opacity: 0, translateY: 20, scale: 0.9 }}
            animate={{ opacity: 1, translateY: 0, scale: 1 }}
            transition={{ 
              type: 'spring', 
              damping: 15, 
              stiffness: 200, 
              delay: index * 100,
              mass: 1,
            }}
          >
            <LinearGradient
              colors={[`${course.color}15`, `${course.color}05`]}
              style={styles.courseGradient}
            />
            {/* Floating elements */}
            <View style={[styles.courseFloatingDot, { backgroundColor: `${course.color}30` }]} />
            <View style={styles.courseContent}>
              <View style={styles.courseHeader}>
                <LinearGradient colors={course.gradient} style={styles.courseIcon}>
                  <Ionicons name={course.icon} size={24} color="white" />
                </LinearGradient>
                <View style={styles.courseInfo}>
                  <Text style={styles.courseTitle}>{course.title}</Text>
                  <Text style={styles.courseSubtitle}>{course.subtitle}</Text>
                  <View style={styles.courseMeta}>
                    <View style={styles.metaItem}>
                      <Ionicons name="people-outline" size={14} color="#64748b" />
                      <Text style={styles.metaText}>{course.students} students</Text>
                    </View>
                  </View>
                </View>
              </View>
              {/* Progress section */}
              <View style={styles.progressSection}>
                <View style={styles.progressInfo}>
                  <Text style={styles.progressLabel}>Progress</Text>
                  <Text style={styles.progressValue}>{course.progress}%</Text>
                </View>
                <View style={styles.progressBar}>
                  <LinearGradient
                    colors={[`${course.color}`, '#7c3aed']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={[styles.progressFill, { width: `${course.progress}%` }]}
                  />
                </View>
              </View>
            </View>
          </MotiView>
        </BlurView>
      </MotiPressable>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Quick Actions</Text>
        <Text style={styles.headerSubtitle}>Manage your courses and activities</Text>
      </View>
      
      {/* Quick Buttons */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.quickButtonsContainer}
        contentContainerStyle={styles.quickButtonsContent}
      >
        {quickButtons.map((button, index) => (
          <MotiPressable
            key={index}
            style={styles.quickButton}
            onPress={() => Haptics.selectionAsync()}
            animate={({ pressed, hovered }) => {
              'worklet';
              return { 
                scale: pressed ? 0.94 : hovered ? 1.05 : 1,
                rotateZ: pressed ? '2deg' : '0deg',
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
              from={{ opacity: 0, scale: 0.8, rotateY: '45deg' }}
              animate={{ opacity: 1, scale: 1, rotateY: '0deg' }}
              transition={{ 
                type: 'spring', 
                damping: 20, 
                stiffness: 300, 
                delay: index * 80,
              }}
            >
              <BlurView intensity={8} style={styles.quickButtonBlur}>
              <LinearGradient colors={[`${button.color}20`, `${button.color}10`]} style={styles.quickButtonGradient} />
              <Ionicons name={button.icon} size={24} color={button.color} />
              <Text style={[styles.quickButtonText, { color: button.color }]}>
                {button.label}
              </Text>
            </BlurView>
            </MotiView>
          </MotiPressable>
        ))}
      </ScrollView>
      
      {/* Course Cards */}
      <ScrollView 
        style={styles.coursesContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      >
        {actions.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
  header: {
    marginBottom: spacing.lg,
  },
  headerTitle: {
    fontSize: typography.fontSize['2xl'],
    color: colors.neutral[900],
    marginBottom: spacing.xs,
    fontFamily: typography.fontFamily.secondarySemiBold,
    letterSpacing: typography.letterSpacing.tight,
  },
  headerSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral[600],
    fontFamily: typography.fontFamily.primary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  quickButtonsContainer: {
    marginBottom: spacing.lg,
  },
  quickButtonsContent: {
    paddingRight: spacing.md,
  },
  quickButton: {
    marginRight: 12,
    borderRadius: radii.md,
    overflow: 'hidden',
  },
  quickButtonBlur: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.glass.border,
    minWidth: 80,
  },
  quickButtonGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  quickButtonText: {
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fontFamily.primarySemiBold,
    marginTop: spacing.xs,
    letterSpacing: typography.letterSpacing.wide,
  },
  coursesContainer: {
    flex: 1,
  },
  courseCard: {
    marginBottom: spacing.md,
    borderRadius: radii.lg,
    overflow: 'hidden',
    elevation: shadows.soft.elevation,
    shadowColor: shadows.soft.ios.color,
    shadowOffset: shadows.soft.ios.offset,
    shadowOpacity: shadows.soft.ios.opacity,
    shadowRadius: shadows.soft.ios.radius,
  },
  courseBlur: {
    borderRadius: radii.lg,
    borderWidth: 0.5,
    borderColor: colors.glass.border,
    overflow: 'hidden',
    backgroundColor: colors.glass.background,
  },
  courseGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  courseFloatingDot: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  courseContent: {
    padding: spacing.lg,
  },
  courseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  courseIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  courseInfo: {
    flex: 1,
  },
  courseTitle: {
    fontSize: typography.fontSize.lg,
    color: colors.neutral[900],
    marginBottom: spacing.xs,
    fontFamily: typography.fontFamily.secondarySemiBold,
    letterSpacing: typography.letterSpacing.tight,
  },
  courseSubtitle: {
    fontSize: typography.fontSize.sm,
    color: colors.neutral[600],
    marginBottom: spacing.sm,
    fontFamily: typography.fontFamily.primary,
    lineHeight: typography.fontSize.sm * typography.lineHeight.relaxed,
  },
  courseMeta: {
    flexDirection: 'row',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: typography.fontSize.xs,
    color: colors.neutral[600],
    marginLeft: spacing.xs,
    fontFamily: typography.fontFamily.primary,
    letterSpacing: typography.letterSpacing.wide,
  },
  progressSection: {
    marginTop: spacing.sm,
  },
  progressInfo: {
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
    fontSize: typography.fontSize.xs,
    color: colors.neutral[900],
    fontFamily: typography.fontFamily.primarySemiBold,
    letterSpacing: typography.letterSpacing.tight,
  },
  progressBar: {
    height: 6,
    backgroundColor: colors.neutral[200],
    borderRadius: spacing.xs,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
});

export default QuickActions;