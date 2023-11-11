import { View, Text, FlatList, StyleSheet, Platform, Dimensions } from "react-native";
import { Employees } from "../data/mockdata";
import EmployeesList from "../components/EmployeesList";

function renderEmployee(itemData) {
  return <EmployeesList name={itemData.item.name} />;
}
const EmployeesScreen = () => {
  return (
    <>
      <View style={styles.title}>
        <Text style={styles.titleText}>Slim Prep Employees</Text>
      </View>
      <FlatList
        data={Employees}
        keyExtractor={(item) => item.id}
        renderItem={renderEmployee}
      />
    </>
  );
};

export default EmployeesScreen;

const dimensionHeight = Dimensions.get("screen").height
const dimensionWidth = Dimensions.get("screen").width
console.log(dimensionHeight, dimensionWidth)

const styles = StyleSheet.create({
  title: {
    marginTop: Platform.OS === "ios" ? 15 : 40 ,
    marginBottom: Platform.OS === "ios" ? 15 : 20 ,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#fff",
    fontSize: 24,
  },
});
