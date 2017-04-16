
export interface IPlan<T> {
  job: (...args:any[])=>T;
  execute():T;
}

export abstract class Plan<T> implements IPlan<T> {
  
  job:(...args:any[])=>T;
  
  constructor(){
    
  }
  
  execute():T{
    return this.job();
  }
  
}