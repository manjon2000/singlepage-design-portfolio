import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() label?: string;
  @Input() type?: 'primary' | 'secondary' = 'primary';
  
}
