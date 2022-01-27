const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  ",",
  "?",
  "!",
  "'",
  "_",
  "-",
  "&",
  "@",
  "#",
  "$",
  "%",
  "*",
  "(",
  ")",
  " ",
];

const alphabetLength = alphabet.length;

export function encrypt(
  input: string,
  key: string,
  decrypt: boolean = false
): string {
  if (key.length === 0 || input.length === 0) return input;
  const inputArray = input.split("");
  const keyArray = key.split("");
  const outputArray = inputArray.map((character, i) => {
    const characterIndex = alphabet.indexOf(character);
    if (characterIndex === -1) return character;
    const keyIndex = alphabet.indexOf(keyArray[i % keyArray.length]);
    if (keyIndex === -1) return character;
    const index = decrypt
      ? characterIndex - keyIndex + alphabetLength
      : characterIndex + keyIndex;
    return alphabet[index % alphabetLength];
  });
  return outputArray.join("");
}
