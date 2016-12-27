import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

import { GasEntry }  from './gas-entry.model';
@Injectable()
export class GasEntryService {
  gasEntries : FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.gasEntries = af.database.list('/gasEntries');
   }

  saveEntry(price: number) {
    var today = new Date();
    var id = this.gasEntries.push({ price: price, date:today.getTime()  });
  }

  getGasEntriesForMonth (month: number, year: number) {
    var startDate = new Date(year, month, 1, 0, 0,0);
    var endDate = new Date(year, month +1, 0, 23, 59,59);

    return this.af.database.list('/gasEntries', {
      query: {
        orderByChild: 'date',
        startAt: startDate.getTime(),
        endAt: endDate.getTime()
      }
    })
   }

   getGasEntry(id:string) {
     return this.af.database.object( '/gasEntries/'+id);
   }

   deleteEntry(gasEntry: GasEntry){
     const item = this.af.database.object( '/gasEntries/'+ gasEntry.id);
     item.remove();

   }
   updateEntry(gasEntry: GasEntry){
     const item = this.af.database.object( '/gasEntries/'+ gasEntry.id);
     item.update({price: gasEntry.price});
   }    
}
