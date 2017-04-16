
import { Plan } from '../Plan/Plan';

export class AddPlan extends Plan<number>{
  
  constructor(a:number, b:number){
    super();
    this.job = ()=>(a+b);
  }
  
}