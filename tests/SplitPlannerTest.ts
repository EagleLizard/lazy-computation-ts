
import { SplitPlan } from '../plans/SplitPlan';

export default class SplitPlannerTest {
  
  static run(){
    console.log(new SplitPlan('Hello world','o').execute());
  }
  
}