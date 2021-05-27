function getRandomNumbers(
  game: { 'max-number': number; range: number },
  numbers: number[]
) {
  let randomNumbers: number[] = [...numbers];

  for (let i = 1; i < game['max-number']; i) {
    const random = Math.floor(Math.random() * (game.range - 1)) + 1;
    randomNumbers.push(random);
    const uniqueRandomNumbers = [...Array.from(new Set(randomNumbers))];
    randomNumbers = uniqueRandomNumbers.sort(function (a, b) {
      return a - b;
    });
    i = uniqueRandomNumbers.length;
  }

  return randomNumbers;
}

export default getRandomNumbers;
