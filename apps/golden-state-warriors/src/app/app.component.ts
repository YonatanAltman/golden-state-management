import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@golden-state-management/api-interfaces';

@Component({
  selector: 'golden-state-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  logoUrl = 'https://teamcolorcodes.com/wp-content/uploads/2017/03/warriors_logo_colors.png?ezimgfmt=rs:200x244/rscb9/ng:webp/ngcb9';
  constructor(private http: HttpClient) {}
}
