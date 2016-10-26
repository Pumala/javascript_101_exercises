function leetspeak(phrase) {
  new_phrase = "";
  for(var i = 0; i < phrase.length; i++) {
    letter = phrase[i].toUpperCase();
    if (letter === "A") {
      new_phrase += "4";
    } else if (letter === "E") {
      new_phrase += "3";
    } else if (letter === "G") {
      new_phrase += "6";
    } else if (letter === "L") {
      new_phrase += "1";
    } else if (letter === "O") {
      new_phrase += "0";
    } else if (letter === "S") {
      new_phrase += "5";
    } else if (letter === "T") {
      new_phrase += "7";
    } else {
      new_phrase += letter;
    }
  }
  return new_phrase;
}

console.log(leetspeak('Leet'));
