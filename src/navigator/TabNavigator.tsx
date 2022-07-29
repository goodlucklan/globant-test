import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigatorType } from "./TabNavigator.interface";
import { NavigatorProps as Props } from "./TabNavigator.interface";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/Home/Home.screen";
import ImageScreen from "../screens/Images/Images.screen";
import CSVScreen from "../screens/Files/Csv.screen";
import ProfileScreen from "../screens/Profile/Profile.screen";

const Tab = createBottomTabNavigator<TabNavigatorType>();

const TAB_ICON = {
  Home: "home",
  Images: "image",
  Csv: "library",
  Profile: "person",
} as const;

const TabNavigator: React.FC<Props> = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const iconName = TAB_ICON[route.name];
        return {
          tabBarIcon: ({ size, color }) => (
            <Ionicons name={iconName} size={size} color={color} />
          ),
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Images" component={ImageScreen} />
      <Tab.Screen name="Csv" component={CSVScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};
export default TabNavigator;
