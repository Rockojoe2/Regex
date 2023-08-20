const regex = /^(\d{3}-\d{2}-\d{4})$/;
const socialSecurityNumber = "123-45-6789";

if (regex.test(socialSecurityNumber)) {
  console.log("Valid Social Security Number");
} else {
  console.log("Invalid Social Security Number");
}