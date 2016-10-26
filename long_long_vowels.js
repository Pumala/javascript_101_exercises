// write a function that adds 3 extra vowels to every two vowels in a row

function longLongVowels(phrase) {
  var counter = 0;
  var new_phrase = "";
  for(var i = 0; i < phrase.length; i++) {
    if (phrase[i] == "o" || phrase[i] == "e") {
      counter ++;
      new_phrase += phrase[i];
      if (counter == 2) {
        new_phrase += phrase[i].repeat(3);
        counter = 0;
      }
    } else {
      new_phrase += phrase[i];
    }
  }
  return new_phrase;
}

console.log(longLongVowels('Goolee'));
