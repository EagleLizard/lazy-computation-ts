import { Plan } from '../Plan/Plan';

export class JoinPlan extends Plan<string>{
  
  constructor(...args:string[]){
    super();
    this.job = ()=>(args.join(''));
  }
  
}