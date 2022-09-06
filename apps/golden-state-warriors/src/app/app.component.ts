import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TeamRepository} from "@golden-state-management/store/elf";

@Component({
  selector: 'golden-state-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  logoUrl = 'https://teamcolorcodes.com/wp-content/uploads/2017/03/warriors_logo_colors.png?ezimgfmt=rs:200x244/rscb9/ng:webp/ngcb9';

  constructor(private teamRepository:TeamRepository) {
  }

  ngOnInit(): void {
    this.teamRepository.init();
  }
}
