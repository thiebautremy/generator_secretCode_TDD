export function javanais_generator(sentence, stringToAddInsinde) {
  let originString = sentence;
  let indexVoyelles = [];
  const voyelles = ["a", "e", "i", "o", "u", "y", "é", "è", "à", "ù"];

  //? On boucle sur la phrase et on ajoute les index à un tableau
  function searchIndex(phrase) {
    for (let i = 0; i < phrase.length; i++) {
      if (voyelles.includes(phrase[i])) {
        indexVoyelles.push(i);
      }
    }
  }
  searchIndex(sentence);
  //?Retrait des voyelles doubles
  for (let i = 0; i < indexVoyelles.length; i++) {
    if (indexVoyelles[i + 1] - indexVoyelles[i] === 1) {
      const valueToDelete = indexVoyelles[i + 1];
      indexVoyelles = indexVoyelles.filter((item) => item !== valueToDelete);
    }
  }
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
