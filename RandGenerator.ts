
const DEFAULT_CHARSET:string[] = Array(52).fill(0).map((n,i)=>String.fromCharCode(i<26?i+65:i+71));

export default class RandGenerator {
  
  constructor(){}
  
  static randInt(min:number, max?:number):number {
    if(max === void 0){
      max = min;
      min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  static getRandomInts(
    n:number, 
    min:number, 
    max?:number, 
    recycledArr?:Array<number>):Array<number>{
    let ints:Array<number>;
    ints = recycledArr || new Array(n);
    n = (recycledArr === void 0)? n : recycledArr.length;
    for(var i=0; i<n; ++i){
      ints[i]= RandGenerator.randInt(min, max);
    }
    return ints;
  }
  
  static getRandString(lengthMin:number, lengthMax?:number, charset?:Array<string>):string{
    let charsetIdx:number;
    let length:number;
    length = (lengthMax === void 0)
      ? lengthMin
      : RandGenerator.randInt(lengthMin, lengthMax) ;
    if(charset === void 0) charset = DEFAULT_CHARSET;
    return Array(length).fill('').map(str=>
      charset[RandGenerator.randInt(charset.length-1)]
    ).join('');
  }
  
  static getRandStrings(
      numStrings:number
    , lengthMin:number
    , lengthMax?:number
    , charset?:Array<string>
    , recycledArr?:Array<string>
  ): Array<string> {
    let result:Array<string>;
    if(recycledArr !== void 0){
      result = recycledArr;
    }else{
      result = Array(numStrings).fill('');
    }
    return result.map(str=>
        RandGenerator.getRandString(lengthMin, lengthMax, charset)
      );
  }
  
}