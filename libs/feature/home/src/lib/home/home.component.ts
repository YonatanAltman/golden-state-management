import {Component} from '@angular/core';
import {HomeService} from "./home.service";
import {Observable} from "rxjs";

@Component({
  selector: 'golden-state-management-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
})
export class HomeComponent {
  images$:Observable<string[]> = this.service.getImages();
  constructor(private service: HomeService) {}
}
