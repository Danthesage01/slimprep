import { StyleSheet, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmployeesScreen from "./screens/EmployeesScreen";
import EmployeeOverviewScreen from "./screens/EmployeeOverviewScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#48B7A7" },
            headerTintColor: "white",
            headerTitle: false,
          }}
        >
          <Stack.Screen
            name="Employees"
            component={EmployeesScreen}
          />
          <Stack.Screen
            name="EmployeeOverview"
            component={EmployeeOverviewScreen}
            options={({ route, navigation }) => {
              const name = route.params.employeeName;
              return {
                title: name,
              };
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    opacity: 0.2,
  },
  inputContainer: {
    flex: 1,
  },

  textInput: {
    backgroundColor: "#fff",
    width: "90%",
    color: "#48B7A7",
    borderRadius: 8,
    padding: 8,
    marginHorizontal: Platform.OS === "android" ? 30 : null,
    marginBottom: Platform.OS === "android" ? 5 : 10,
    textAlign: "left",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "crimson",
  },
  errorText: {
    color: "white",
  },
});
