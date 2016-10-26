// write a function that takes in two paremeters (bill and level of service).
// based on those two parameters, the function returns the tip amount

function tipAmount(bill, service) {
  if (service === "good") {
    return bill * .2;
  } else if (service === "fair") {
    return bill * .15;
  } else if (service === "bad") {
    return bill * .1;
  } else {
    return "Invalid inputs. Please try again.";
  }
}

console.log(tipAmount(40, "fair"));
