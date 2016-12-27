import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { GasEntryService } from './../gas-entry/gas-entry.service';
import { GasEntry } from './../gas-entry/gas-entry.model';

@Component({
  selector: 'app-gas-entry-details',
  templateUrl: './gas-entry-details.component.html',
  styleUrls: ['./gas-entry-details.component.css'],
})
export class GasEntryDetailsComponent implements OnInit {
  gasEntry: GasEntry;

  constructor( 
    private gasEntryService: GasEntryService,
    private route: ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.gasEntryService.getGasEntry(params['id']))
    .subscribe(gasEntry => {
      this.gasEntry = {
        id: gasEntry.$key,
        index: 1,
        price: +gasEntry.price,
        date: new Date(gasEntry.date)      
    }
    });
  } 

  update(){ 
    this.gasEntryService.updateEntry(this.gasEntry);
    this.location.back();
  }

  remove() {
    this.gasEntryService.deleteEntry(this.gasEntry);
    this.location.back();
  }

  goBack()  {
    this.location.back();
  }

}
