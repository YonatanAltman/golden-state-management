import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AppApiService} from "@golden-state-management/shared/ui-layout";

@Injectable()
export class HomeService {

  constructor(
    private appApiService:AppApiService) {
  }

  getImages(): Observable<string[]> {
    return this.appApiService.getHomeImages();
  }
}
