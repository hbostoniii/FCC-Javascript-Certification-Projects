function telephoneCheck(str) {
 //regex to check if str is a valid US phone number 
 const numberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\-\s]?(\d{3})[\-\s]?(\d{4})$/g
  return numberRegex.test(str);
}

console.log(telephoneCheck("1(555)555-5555"));
