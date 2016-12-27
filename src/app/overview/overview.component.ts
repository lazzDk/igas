import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2';

import { GasEntry }  from './../gas-entry/gas-entry.model';
import { GasEntryService }  from './../gas-entry/gas-entry.service';

import { Setup } from './../setup/setup.model';
import { SetupService } from './../setup/setup.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [ SetupService]
})
export class OverviewComponent implements OnInit {
  entries:  GasEntry[];
  months: any[] = [
    {value: 0, text: "januar"},
    {value: 1, text: "februar"},
    {value: 2, text: "marts"},
    {value: 3, text: "april"},
    {value: 4, text: "maj"},
    {value: 5, text: "juni"},
    {value: 6, text: "juli"},
    {value: 7, text: "august"},
    {value: 8, text: "september"},
    {value: 9, text: "oktober"},
    {value: 10, text: "november"},
    {value: 11, text: "december"}
  ];
  years: number[] = [2016,2017];

  setup: Setup;
  totalPrice: number = 0;
  selectedMonth:number;
  selectedYear:number;

  constructor( 
    private router: Router,
    private gasEntryService: GasEntryService, 
    private setupService: SetupService
  ) { }

  ngOnInit() {
    let today = new Date();
    this.selectedMonth = today.getMonth();
    this.selectedYear = today.getFullYear();
    this.setupService.getSetupForMonth(this.selectedMonth).subscribe(setup => this.setup = setup);
    this.loadEntries();
  }

  loadEntries(){
      this.gasEntryService.getGasEntriesForMonth(this.selectedMonth, this.selectedYear).subscribe(entries =>{
      var index = 1;
      this.entries = entries.map(function(entry){ return {
        id: entry.$key,
        index: index++,
        price: +entry.price,
        date: new Date(entry.date)
      };});
      this.totalPrice = this.calculateTotal(this.entries);
    });
  }

  calculateTotal(entries: GasEntry[]){
    let total = 0;
    for(let entry of entries) {
      total += entry.price;
    }
    return total;
  }

  goToDetails(gasEntry: GasEntry) {
    this.router.navigate(['/gas-entry', gasEntry.id])
  }

  deleteEntry(gasEntry: GasEntry){
    this.gasEntryService.deleteEntry(gasEntry);
  }

}
