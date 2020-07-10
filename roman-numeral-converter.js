function convertToRoman(num) {
 
 const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']

let romanNumeral = ''

for (let i = 0; i < decimals.length; i++) {
  while (decimals[i] <= num ) {
    romanNumeral += roman[i];
    num -= decimals[i];
  }
}
 return romanNumeral;
}

console.log(convertToRoman(36));
