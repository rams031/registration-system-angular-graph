import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { adminChildRoutes } from '../app-routing.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.pug',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  route: ActivatedRoute | null | undefined;
  childRoutes: any = adminChildRoutes;

  constructor(private router: Router, private location: Location) {}

  ngOnInit(): void {}

  navigate(rootPath: string, path: string) {
    this.router.navigate([rootPath + path], { relativeTo: this.route });
  }
}
