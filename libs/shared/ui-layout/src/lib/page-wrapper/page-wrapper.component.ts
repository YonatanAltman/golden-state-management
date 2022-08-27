import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'golden-state-management-page-wrapper[title]',
  templateUrl: './page-wrapper.component.html',
  styleUrls: ['./page-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageWrapperComponent {
  @Input() title!: string;
  @Input() resource?: any;
  @Input() isLoader = false;

}
