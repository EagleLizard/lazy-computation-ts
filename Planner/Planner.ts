
import { IPlan } from '../Plan/Plan';

export interface IPlanner<T>{
  plans:Array<IPlan<T>>;
  addPlan: (newPLan:IPlan<T>)=>any;
  execute: ()=>Array<T>;
}

export class Planner<T> implements IPlanner<T> {
  
  plans:Array<IPlan<T>>;
  
  constructor(plans?:Array<IPlan<T>>){
    this.plans = (plans !== void 0) ? plans : [];
  }
  
  addPlan(newPlan:IPlan<T>){
    this.plans.push(newPlan);
  }
  
  execute():Array<T>{
    return this.plans.map(plan=>plan.execute());
  }
  
}