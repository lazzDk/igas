import { Component, OnInit } from '@angular/core';

import { Setup } from './setup.model';
import { SetupService } from './setup.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.css'],
  providers: [ SetupService]
})
export class SetupComponent implements OnInit {
  setup: Setup 
  newBudget: number = null;
  
  constructor(private setupService: SetupService) { }

  ngOnInit() {
    this.setupService.getSetup().subscribe(setup => {
      this.setup = setup;
    })
  }
  
  saveBudget(){
    this.setupService.update(this.newBudget);
    this.newBudget = null;
  }

}
