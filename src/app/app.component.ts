import { Component,ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})

export class AppComponent {
  title = 'iGas app';
  menuVisibility: boolean = false;
  
  constructor(private _eref: ElementRef) {
  }

  onClick(event) {
   if (!this._eref.nativeElement.childNodes[1].contains(event.target)){
     this.closeMenu();
   } 
  }

  toggleMenu() {
    this.menuVisibility = !this.menuVisibility;
  }
  
 
 closeMenu(){
   this.menuVisibility = false;
 }
}

