import { javanais_generator } from "./services/functions";

test("test_with_a_and_e", () => {
  const phraseToTest = "test phrase avec voyelles";
  const stringToAdd = "AV";
  expect(javanais_generator(phraseToTest, stringToAdd)).toBe(
    "tAVest phrAVasAVe AVavAVec vAVoAVyAVellAVes"
  );
});
