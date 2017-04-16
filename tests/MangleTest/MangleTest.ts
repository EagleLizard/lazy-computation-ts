
import Mangler from './Mangler';
import RandGenerator from '../../RandGenerator';

export default class MangleTest {
  static run(){
    let str:string;
    str = RandGenerator.getRandStrings(1e2,1,20).join(' ');
    console.log('before mangle\n'+str);
    str = Mangler.mangle(str);
    console.log('\nafter mangle:\n'+str);
  }
}