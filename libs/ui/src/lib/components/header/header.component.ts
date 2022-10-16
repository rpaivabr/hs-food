import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'hsf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() title = '';
  @Input() icons: string[] = [];
  @Input() notify = false;
  @Output() whenClick = new EventEmitter<string>();

  handleClick(icon: string) {
    this.whenClick.emit(icon);
  }
}
