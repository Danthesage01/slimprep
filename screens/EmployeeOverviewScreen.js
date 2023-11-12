import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Employee from "../components/Employee";

const EmployeeOverviewScreen = ({ route }) => {
  const params = route.params;

  const employee = {
    name: params.employeeName,
    image: params.employeeImage,
    designation: params.employeeDesignation,
    status: params.employeeStatus,
    score: params.employeeScore,
    salary: params.employeeSalary,
    level: params.employeeLevel,
  };
  return (
    <ScrollView>
      <Employee {...employee} />
    </ScrollView>
  );
};

export default EmployeeOverviewScreen;
