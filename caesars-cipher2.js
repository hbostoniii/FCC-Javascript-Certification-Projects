function rot13(str) {
const shift = {
  'A':'N',
  'B':'O',
  'C':'P',
  'D':'Q',
  'E':'R',
  'F':'S',
  'G':'T',
  'H':'U',
  'I':'V',
  'J':'W',
  'K':'X',
  'L':'Y',
  'M':'Z',
  'N':'A',
  'O':'B',
  'P':'C',
  'Q':'D',
  'R':'E',
  'S':'F',
  'T':'G',
  'U':'H',
  'V':'I',
  'W':'J',
  'X':'K',
  'Y':'L',
  'Z':'M'
}
  return str.replace(/[A-Z]/g, letter => shift[letter]);
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))