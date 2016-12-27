import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GasEntryService} from './gas-entry.service';

@Component({
  selector: 'app-gas-entry',
  templateUrl: './gas-entry.component.html',
  styleUrls: ['./gas-entry.component.css'],
  providers:  [GasEntryService]
})
export class GasEntryComponent implements OnInit {
  today: Date;
  price: number = null;

  constructor(
    private gasEntryService: GasEntryService,
    private router: Router
) { }

  ngOnInit() {
    this.today = new Date();
  }

  saveGasEntry() {
    this.gasEntryService.saveEntry(+this.price);
    this.router.navigate(['/overview']);
  } 

}
