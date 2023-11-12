import { View, Text, StyleSheet } from "react-native";
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
  return <Employee {...employee} />;
};

export default EmployeeOverviewScreen;
