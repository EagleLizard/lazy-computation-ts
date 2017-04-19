import { Plan } from '../../Plan/Plan';
import Mangler from './Mangler';

export class ReverseWordsPlan extends Plan<string> {
  constructor(str:string){
    super();
    this.job = ()=>Mangler.reverseWords(str);
  }  
}

export class InvertCharCasePlan extends Plan<string> {
  constructor(str:string){
    super();
    this.job = ()=>Mangler.invertCharCase(str);
  }
}

export class SortCaseOnWordsPlan extends Plan<string> {
  constructor(str:string){
    super();
    this.job = ()=>Mangler.sortCaseOnWords(str);
  }
}

export class ReplaceVowelsPlan extends Plan<string> {
  constructor(str:string){
    super();
    this.job = ()=>Mangler.replaceVowels(str);
  }
}

export class ReplaceConsonantsPlan extends Plan<string> {
  constructor(str:string){
    super();
    this.job = ()=>Mangler.replaceConsonants(str);
  }
}