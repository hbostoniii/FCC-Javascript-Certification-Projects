function palindrome(str) {
  return str
            .replace(/[\W_]/g,'')
            .toLowerCase() === 
        str
        .toLowerCase()
        .replace(/[\W_]/g,'')
        .split('')
        .reverse()
        .join('')
  return true;
}



console.log(palindrome("0_0 (: /-\ :) 0-0"));
