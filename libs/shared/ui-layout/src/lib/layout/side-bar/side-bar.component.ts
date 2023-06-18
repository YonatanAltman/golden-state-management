import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

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
export class SideBarComponent {
  navs: INav[] = [
    {label: 'home', link: 'home'},
    {label: 'team', link: 'team'},
  ];
  stateManagement = {
    link: 'https://opensource.e-square.io/ark',
    logo: '/assets/logo/ark.svg',
    name: 'ark'
  };
  @Input() logo?: string;
}
