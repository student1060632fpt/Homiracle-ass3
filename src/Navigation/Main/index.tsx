import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeContainer } from "../../Screens/Home";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAppTheme } from "./../../Theme";
import HomeIcon from "./../../static/icon/room.svg"
import RoomIcon from "./../../static/icon/room2.svg"
const Tab = createBottomTabNavigator();

// @refresh reset
export const MainNavigator = () => {
  const theme = useAppTheme();
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: theme.colors.primary,
      tabBarLabelPosition: "below-icon"
    }}
    >
      <Tab.Screen
        name="Home"
        component={HomeContainer}
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon:({color,size}) =>(<HomeIcon width={size} height={size} color={color} />),
        }}
      />
      <Tab.Screen
        name="Room"
        component={HomeContainer}
        options={{
          tabBarLabel: "Phòng",
          tabBarIcon:({color,size}) =>(<MaterialCommunityIcons name="home" color={color} size={size} />),

        }}
      />
      <Tab.Screen
        name="History"
        component={HomeContainer}
        options={{
          tabBarLabel: "Lịch sử GD",
          tabBarIcon:({color,size}) =>(<MaterialCommunityIcons name="home" color={color} size={size} />),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeContainer}
        options={{
          tabBarLabel: "Hồ sơ",
          tabBarIcon:({color,size}) =>(<MaterialCommunityIcons name="face-man-profile" color={color} size={size} />),
        }}
      />
    </Tab.Navigator>
  );
};
