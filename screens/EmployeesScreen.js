import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Platform,
  ActivityIndicator,
  TextInput,
} from "react-native";
import EmployeesList from "../components/EmployeesList";
import { useEffect, useState, useLayoutEffect } from "react";
import filter from "lodash.filter";
import { API_ENDPOINT } from "../utils/constants";
import { contains } from "../utils/helpers";
import SearchBar from "../components/SearchBar";

const EmployeesScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [fullData, setFullData] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT);
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);

      setFullData(json);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setIsLoading(false);
    }
  };

  function handleSearch(query) {
    setSearchQuery(query);
    const formattedQuery = query.toLowerCase();

    const filterData = filter(fullData, (user) => {
      return contains(user, formattedQuery);
    });
    setData(filterData);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <SearchBar
            searchQuery={searchQuery}
            handleSearch={handleSearch}
          />
        );
      },
    });
  }, [navigation, searchQuery, handleSearch]);

  if (isLoading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator
          size={"large"}
          color="#48B7A7"
        />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>
          Error in fetching data... Check your internet connection
        </Text>
      </View>
    );
  }

  function renderEmployee(itemData) {
    function pressHandler() {
      navigation.navigate("EmployeeOverview", {
        employeeId: itemData.id,
        employeeName: itemData.name,
        employeeImage: itemData.image,
        employeeDesignation: itemData.designation,
        employeeLevel: itemData.level,
        employeeStatus: itemData.status,
        employeeSalary: itemData.salary,
        employeeScore: itemData.score,
      });
    }

    return (
      <EmployeesList
        name={itemData.name}
        image={itemData.image}
        email={itemData.designation}
        onPress={pressHandler}
      />
    );
  }

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderEmployee(item)}
        style={{ backgroundColor: "white" }}
      />
    </>
  );
};

export default EmployeesScreen;

const styles = StyleSheet.create({
  title: {
    marginTop: Platform.OS === "ios" ? 15 : 40,
    marginBottom: Platform.OS === "ios" ? 15 : 20,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    color: "#fff",
    fontSize: 24,
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
});
