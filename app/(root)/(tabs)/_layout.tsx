import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import ThemedIcon from '@/theme/ThemedIcon';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        // tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: 'transparent',
          },
          android: {
            position: 'absolute',
            backgroundColor: 'transparent',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <ThemedIcon size={20} name="home-7-fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="new-order"
        options={{
          title: 'New Order',
          tabBarIcon: ({ color }) => <ThemedIcon size={20} name="add-large-fill" color={color} />,
        }}
      />
      <Tabs.Screen 
        name='cart'
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => <ThemedIcon size={20} name="shopping-cart-fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <ThemedIcon size={20} name="user-3-fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
