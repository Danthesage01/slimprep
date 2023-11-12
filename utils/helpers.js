export const formatPrice = (salary) => {
  const newSalary = Intl.NumberFormat("en-Us", {
    style: "currency",
    currency: "USD",
  }).format(salary);
  return newSalary;
};
export function changeColor(status) {
  let color = "";
  if (status === "No Change") {
    color = "#3399ff";
  }
  if (status === "Termination") {
    color = "#ff6666";
  }
  if (status === "Promotion") {
    color = "#00cc00";
  }
  if (status === "Demotion") {
    color = "#ffcc00";
  }
  return color;
}

export function contains({ name, designation }, query) {
  if (
    name.toLowerCase().includes(query) ||
    designation.toLowerCase().includes(query)
  ) {
    return true;
  } else {
    false;
  }
}
