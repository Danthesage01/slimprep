import { SafeAreaView, StyleSheet, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import EmployeesScreen from "./screens/EmployeesScreen";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#48B7A7", "#ddb52f"]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("./assets/images/team.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            <EmployeesScreen />
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
    height: "100%",
  },
});
