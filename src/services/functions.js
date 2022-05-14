export function javanais_generator(sentence, stringToAddInsinde) {
  let originString = sentence;
  let indexVoyelles = [];

  //? On boucle sur la phrase et on ajoute les index à un tableau
  function searchIndex(phrase) {
    for (let i = 0; i < phrase.length; i++) {
      if (
        phrase[i] === "e" ||
        phrase[i] === "a" ||
        phrase[i] === "i" ||
        phrase[i] === "o" ||
        phrase[i] === "u" ||
        phrase[i] === "y"
      ) {
        indexVoyelles.push(i);
      }
    }
  }
  searchIndex(sentence);
  //?On insère aux index trouvés avant la string
  function insertInSentence(string, index, stringToAdd) {
    return string.slice(0, index) + stringToAdd + string.slice(index);
  }

  if (indexVoyelles.length > 0) {
    for (let i = 0; i < indexVoyelles.length; i++) {
      originString = insertInSentence(
        originString,
        indexVoyelles[i] + i * stringToAddInsinde.length,
        stringToAddInsinde
      );
    }
  }

  return originString;
}
