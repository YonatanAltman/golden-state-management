import {Component} from '@angular/core';
import {HomeService} from "./home.service";
import {Observable, shareReplay} from "rxjs";

@Component({
  selector: 'golden-state-management-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
})
export class HomeComponent {
  images$:Observable<string[]> = this.service.getImages().pipe(shareReplay(1));
  constructor(private service: HomeService) {}
}
