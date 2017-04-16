
import { Planner } from '../Planner/Planner';
import { AddPlan } from '../plans/AddPlan';

import RandGenerator from '../RandGenerator';

export default class AddPlannerTest {
  
  static run(){
    let addAbles: Array<number>;
    let addPlanner: Planner<number>;
    let newAddPlan: AddPlan;
    let results: Array<number>;
    let sum: number;
    addAbles = RandGenerator.getRandomInts(1e6,1);
    addPlanner = new Planner<number>();
    for(let i:number=0; i<addAbles.length; i+=2){
      newAddPlan = new AddPlan(addAbles[i],addAbles[i+1]);
      addPlanner.addPlan(newAddPlan);
    }
    results = addPlanner.execute();
    if(!verify(addAbles, results)){
      console.log('Results invalid for AddPlannerTest');
    }
    console.log('AddPlannerTest result:');
    console.log(results.reduce((acc,curr)=>((acc+=curr),acc),0));
  }
  
}

function verify(addAbles:Array<number>, plannerResults):boolean{
  let compareResults:Array<number>;
  compareResults = [];
  for(let i:number=0; i<addAbles.length; i+=2){
    compareResults.push(addAbles[i], addAbles[i+1]);
  }
  return plannerResults.every((n, idx)=>{
    return n === compareResults[idx];
  });
}