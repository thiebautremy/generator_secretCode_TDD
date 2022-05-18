import { javanais_generator } from "./services/functions";

test("test_with_all_voyelles", () => {
  const phraseToTest =
    "Le Javanais est une technique de stéganographie basée sur l'argot insérant une syllabe parasitaire dans les phrases.";
  const stringToAdd = "av";
  expect(javanais_generator(phraseToTest, stringToAdd)).toBe(
    "LE JAVAVAVANAVAIS EST UNE TAVECHNAVIQAVUE DE STAVEGAVANAVOGRAVAPHAVIE BAVASAVEE SAVUR LAVARGAVOT INSAVERAVANT UNE SYLLAVABE PAVARAVASAVITAVAIRE DAVANS LAVES PHRAVASAVES"
  );
});
