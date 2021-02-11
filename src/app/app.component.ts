import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend-blockchain-angular';
  counter = 2;
  updateCounter = '';

  getCount() {
    if(this.counter > 99) {
      this.updateCounter =  `99+`
    }
    else {
      this.updateCounter = `${this.counter}`
    }
  }

  ngOnInit() {
    this.getCount();
  }
  
}
