function splitAmount(bill, service, numPeople) {
  if (service === "good") {
    return ((bill * .2) + bill) / numPeople;
  } else if (service === "fair") {
    return ((bill * .15) + bill) / numPeople;
  } else if (service === "bad") {
    return ((bill * .1) + bill) / numPeople;
  } else {
    return "Invalid inputs. Please try again."
  }
}

console.log(splitAmount(100, "good", 5));
console.log(splitAmount(40, "fair", 2));
