import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-block-view',
  templateUrl: './block-view.component.html',
  styleUrls: ['./block-view.component.scss']
})
export class BlockViewComponent implements OnInit {

  @Input() public block;

  constructor() { }

  ngOnInit(): void {
  }

  convertDate(date) {
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"]
    return `${new Date(date).getDate()} ${month[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`;
  }

}
