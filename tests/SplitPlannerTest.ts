
import { SplitPlan } from '../plans/SplitPlan';

import RandGenerator from '../RandGenerator';

export default class SplitPlannerTest {
  
  static run(){
    console.log(new SplitPlan('Hello world','o').execute());
    for(var i=0; i<100; ++i){
      console.log(RandGenerator.getRandString(RandGenerator.randInt(1,10)));
    }
  }
  
}