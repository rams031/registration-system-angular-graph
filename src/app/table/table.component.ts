import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.pug',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // @Input() item: any;
  @Input() title!: string;
  @Input() column!: any[];
  @Input() row!: any;

  constructor() {}

  ngOnInit(): void {

  }
}
