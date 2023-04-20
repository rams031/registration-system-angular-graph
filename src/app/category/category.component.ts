import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

export interface Config {
  heroesUrl: string;
  textfile: string;
  date: any;
}

export interface categoryType {
  barangayId: number;
  created_at?: Date;
  id: number;
  name: string;
  updated_at?: Date;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.pug',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(private http: HttpClient) {}

  public getCategoryLink: string =
    'https://medical-inventory-service.onrender.com/category';
  public categoryData: Observable<categoryType[]>;
  public getDataAction: any = this.http.get<Config>(this.getCategoryLink, {
    // observe: 'response',
  });

  public columns = [
    { field: 'id', fieldName: 'Category ID' },
    { field: 'name', fieldName: 'Category Name' },
  ];

  ngOnInit(): void {
    this.categoryData = this.getDataAction.subscribe((res) => res) ?? [];
    console.log(`getDataAction:`, this.categoryData);
  }
}
