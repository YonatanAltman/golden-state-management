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
  @Input() logo?:string;
}
