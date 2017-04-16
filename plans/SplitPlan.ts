import { Plan } from '../Plan/Plan';

export class SplitPlan extends Plan<string[]>{
  
  constructor(str:string, splitOn?:string){
    super();
    if(splitOn === void 0) splitOn = ' ';
    this.job = ()=>(str.split(splitOn));
  }
  
}