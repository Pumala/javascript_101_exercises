var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function cipher(phrase, offset) {
  new_phrase = "";
  for(var i = 0; i < phrase.length; i++) {
    letter = phrase[i].toLowerCase();
    index = alphabet.indexOf(letter);
    new_index = index - offset;
    if (new_index < 0) {
      is_NegIndex = true;
      neg_index = new_index + 26;
    } else {
      is_NegIndex = false;
    }
    if (phrase[i] === " ") {
      new_phrase += " ";
    } else if (is_NegIndex) {
      new_phrase += alphabet[neg_index];
    } else {
      new_phrase += alphabet[new_index];
    }
  }
  return new_phrase;
}

console.log(cipher("Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar", 13));
