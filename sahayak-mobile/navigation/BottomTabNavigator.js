import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { Platform, StyleSheet } from 'react-native';
import { colors, spacing, typography, shadows } from '../theme/tokens';

// Import screens
import Dashboard from '../components/Dashboard';

// Placeholder screens
const StudentsScreen = () => null;
const StoriesScreen = () => null;
const AnalyticsScreen = () => null;
const ProfileScreen = () => null;

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Students') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Stories') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Analytics') {
            iconName = focused ? 'analytics' : 'analytics-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.brand.primary,
        tabBarInactiveTintColor: colors.neutral[500],
        tabBarStyle: {
          position: 'absolute',
          bottom: spacing.xl,
          left: spacing.lg,
          right: spacing.lg,
          height: spacing.xxxxxxl + spacing.lg,
          borderRadius: spacing.xxl,
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          ...shadows.strong,
        },
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            style={{
              ...StyleSheet.absoluteFillObject,
              borderRadius: spacing.xxl,
              backgroundColor: colors.glass.strong,
              borderWidth: 1,
              borderColor: colors.border.light,
            }}
          />
        ),
        tabBarLabelStyle: {
          fontSize: typography.fontSize.xs,
          fontFamily: typography.fontFamily.primaryMedium,
          letterSpacing: typography.letterSpacing.wide,
          marginBottom: spacing.xs,
        },
        tabBarItemStyle: {
          paddingVertical: spacing.sm,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Students" component={StudentsScreen} />
      <Tab.Screen name="Stories" component={StoriesScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}