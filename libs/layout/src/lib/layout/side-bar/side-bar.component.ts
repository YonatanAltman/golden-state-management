import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

export interface INav {
  label: string;
  link: string;
}

@Component({
  selector: 'golden-state-management-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideBarComponent implements OnInit {
  navs: INav[] = [
    {label: 'home', link: 'home'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
