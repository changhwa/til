//문제 https://www.codewars.com/kata/missing-alphabet
function insertMissingLetters (str){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const letters = str.split('');
  const after = letter => letter + alphabet.slice(alphabet.indexOf(letter))
    .filter(letter => !letters.includes(letter))
    .join('')
    .toUpperCase();
  return letters
    .map((letter, index) => letters.indexOf(letter) === index ? after(letter) : letter)
    .join('');
}
