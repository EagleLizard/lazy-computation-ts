
import { Planner } from '../../Planner/Planner';
import { Plan } from '../../Plan/Plan';

import {
  ReverseWordsPlan,
  InvertCharCasePlan,
  SortCaseOnWordsPlan,
  ReplaceVowelsPlan,
  ReplaceConsonantsPlan
} from './ManglePlans';

const planClasses = [
  ReverseWordsPlan,
  InvertCharCasePlan,
  SortCaseOnWordsPlan,
  ReplaceVowelsPlan,
  ReplaceConsonantsPlan
];


// We're going to daisy-chain the plans together
export default class ManglePlanner {
  
  planners:Planner<string>[];
  
  constructor(){
    this.planners = Array(planClasses.length)
      .fill(null)
      .map(()=>new Planner<string>());
  }
  
  addPlan(str:string){
    this.planners[0].addPlan(new planClasses[0](str));
  }
  
  execute():Array<string>{
    let results:string[];
    planClasses.forEach(planClass=>{
      results
    });
    return [''];//TODO: temp so I can commit something compilable
  }
  
  
}