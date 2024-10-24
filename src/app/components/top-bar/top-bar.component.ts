import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent{

  @Output() toggleSidebar = new EventEmitter<void>();

  // This function will be called when the filter icon is clicked
  onToggleSidebar(): void {
    // Emit the toggleSidebar event to the parent component
    this.toggleSidebar.emit();
  }
}