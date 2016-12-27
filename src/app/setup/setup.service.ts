import { Injectable } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

import { Setup } from './setup.model';

@Injectable()
export class SetupService {

  constructor(private af: AngularFire) { }
  setup:FirebaseObjectObservable<Setup>;
 
  update(budget: number) {
    this.setup = this.af.database.object('/setup');
    this.setup.set({budget: budget, creationDate: new Date().getTime()});
  }

  getSetup():FirebaseObjectObservable<Setup>{
    return this.af.database.object('/setup');
  }

  getSetupForMonth(month: number){
    return this.af.database.object('/setup');
  }
}
