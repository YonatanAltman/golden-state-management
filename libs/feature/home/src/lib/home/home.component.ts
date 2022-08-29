import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'golden-state-management-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgOptimizedImage]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
