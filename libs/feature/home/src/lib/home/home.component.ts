import { Component, OnInit } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {Store} from "@ngrx/store";
import {Team} from "@golden-state-management/api-interfaces";

@Component({
  selector: 'golden-state-management-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgOptimizedImage]
})
export class HomeComponent {
  images$ = this.store.select(state => state.team.homeImages);
  constructor(private store: Store<{team:Team}>) {}
}
