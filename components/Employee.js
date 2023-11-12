import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
} from "react-native";
import React from "react";

import { formatPrice, changeColor } from "../utils/helpers";

const Employee = ({
  name,
  level,
  image,
  designation,
  status,
  score,
  salary,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.imageContainer, { borderColor: changeColor(status) }]}
      >
        {image ? (
          <Image
            source={{ url: image }}
            style={styles.image}
          />
        ) : (
          <Image
            source={require("../assets/images/placeholder.png")}
            style={styles.image}
          />
        )}
      </View>
      <View style={styles.infoCard}>
        <View style={styles.info}>
          <Text style={styles.infoText}>Name: {name}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Level: {level}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Role: {designation}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Salary: {formatPrice(salary)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoText}>Score: {score}</Text>
        </View>
        <View
          style={[styles.infoBTn, { backgroundColor: changeColor(status) }]}
        >
          <Pressable>
            <Text style={styles.infoBTNText}>{status}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Employee;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  titleText: {
    color: "#fff",
    fontSize: 24,
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 200,
    borderWidth: 1,
    overflow: "hidden",
    margin: 20,
    borderColor: "#5e0acc",
  },
  image: {
    width: Platform.OS === "ios" ? "100%" : "auto",
    height: Platform.OS === "ios" ? "100%" : "auto",
  },
  infoCard: {
    width: 300,
  },
  info: {
    padding: 15,
  },
  infoText: {
    fontSize: 18,
    color: "#6E6E6E",
  },
  infoBTn: {
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: "#5e0acc",
    elevation: 4,
    shadowColor: "#fff",
    padding: 16,
    borderRadius: 5,
    textAlign: "center",
  },
  infoBTNText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  pressed: {
    opacity: 0.15,
  },
});
