// write a function that takes in two parameters and return the total amount
// of the bill including tip (the tip is based on the level of service)

function totalAmount(bill, service) {
  if (service === "good") {
    return (bill * .2) + bill;
  } else if (service === "fair") {
    return (bill * .15) + bill;
  } else if (service === "bad") {
    return (bill * .1) + bill;
  } else {
    return "Invalid inputs. Please try again.";
  }
}

console.log(totalAmount(100, "good"));
