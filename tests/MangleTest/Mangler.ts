
const VOWELS:string[] = 'aeiou'
  .split('')
  .map(char=>(char+char.toUpperCase()))
  .join('')
  .split('');
  
const VOWEL_MAP:{[char:string]:string} = VOWELS
  .reduce((acc,curr,idx)=>{
    acc[curr] = String.fromCharCode(idx+1212);
    return acc;
  }, {});

export default class Mangler {
  
  static mangle(str:string):string{
    let mangled:string;
    mangled = Mangler.reverseWords(str);
    mangled = Mangler.invertCharCase(mangled);
    mangled = Mangler.sortCaseOnWords(mangled);
    mangled = Mangler.replaceVowels(mangled);
    mangled = Mangler.replaceConsonants(mangled);
    return mangled;
  }
  
  static reverseWords(str: string): string{
    return str.split(' ').reverse().join(' ');
  }

  static invertCharCase(str: string): string{
    return str.split('').map(char=>{
      let caseCompare:string;
      caseCompare = char.toLowerCase();
      return (caseCompare === char)
        ? char.toUpperCase()
        : char.toLowerCase() ;
    }).join('');
  }
  
  static sortCaseOnWords(str:string):string{
    return str.split(' ')
      .map(word=>word.split('')
      .sort((a,b)=>{
        //we don't want to sort alphabetically here.
        // We want to sort so lowercase is in front 
        // of uppercase only.
        let caseCompareA:string, caseCompareB:string;
        caseCompareA = a.toLowerCase();
        caseCompareB = b.toLowerCase();
        if(a === caseCompareA){
          return -1;
        }else if(b === caseCompareB){
          return 1;
        }else{
          return 0;
        }
      })
      .join(''))
      .join(' ');
  }
  
  static replaceVowels(str:string):string{
    return str.split('').map(char=>{
      return (VOWELS.indexOf(char) !== -1)
        ? VOWEL_MAP[char]
        : char ;
    }).join('');
  }
  
  static replaceConsonants(str:string):string{
    return str.split('').map(char=>{
      return (VOWELS.indexOf(char) === -1)
        ? String.fromCharCode(char.charCodeAt(0)+912)
        : char ;
    }).join('');
  }
  
}

