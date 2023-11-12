import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
const EmployeesList = ({ name, email, image, onPress }) => {
  return (
    <Pressable
      android_ripple={{ color: "#260452" }}
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={onPress}
    >
      <View style={styles.employeeCardDetail}>
        <Image
          source={{ uri: image }}
          style={styles.icon}
        />
        <View>
          <Text style={styles.employeeText}>{name}</Text>
          <Text style={styles.employeeSmall}>{email}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default EmployeesList;

const styles = StyleSheet.create({
  employeeCard: {
    flex: 1,
    margin: 16,
    borderRadius: 6,
    backgroundColor: "white",
    color: "white",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    overflow: Platform.OS === "android" ? "hidden" : null,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  pressedItem: {
    opacity: 0.5,
  },
  employeeText: {
    fontSize: 17,
    marginLeft: 10,
  },
  employeeSmall: {
    color: "grey",
    fontSize: 14,
    marginLeft: 10,
  },
  employeeCardDetail: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginVertical: 10,
  },
});
