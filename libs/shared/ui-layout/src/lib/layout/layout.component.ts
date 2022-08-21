import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'golden-state-management-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent{
  @Input() logo?:string;
}
