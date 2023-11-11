import { View, Text, Pressable, StyleSheet } from "react-native";

const EmployeesList = ({name}) => {
  return (
    <View style={styles.employeeCard}>
      <Pressable
        android_ripple={{ color: "#260452" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <View>
          <Text style={styles.employeeText}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default EmployeesList;


const styles = StyleSheet.create({
  employeeCard: {
    flex: 1,
    margin: 16,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
    elevation: 4,
    shadowColor: "#fff",
    shadowOffset: 3,
    shadowOpacity: 0.5,
  },
  pressedItem: {
    opacity: 0.5,
  },
 employeeText: {
    padding: 16,
    color: "white",
    textAlign: "center",
    fontSize: 17,
  },
});

