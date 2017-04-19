import Mangler from './Mangler';
import RandGenerator from '../../RandGenerator';

const NUM_STRINGS = 1e3;
const NUM_WORDS = 100;

export default class MangleTest {
  static run(){
    let strs:string[];
    let strings:string[];
    let startMs:[number,number];
    let wordArr:Array<string>;
    strings = Array(NUM_STRINGS)
      .fill('')
      .map(s=>RandGenerator.getRandStrings(NUM_WORDS,5,10).join(''));
    startMs = process.hrtime();
    strs = strings.map(Mangler.mangle);
    console.log(process.hrtime(startMs));
    
  }
}