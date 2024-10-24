import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent{

  @Output() roleSelected = new EventEmitter<string>();
  @Output() locationSelected = new EventEmitter<string>();

  // Trigger on role selection change
  onRoleChange(event: Event) {
    const role = (event.target as HTMLSelectElement).value;
    this.roleSelected.emit(role);  // Emit the selected role
  }

  // Trigger on location selection change
  onLocationChange(event: Event) {
    const location = (event.target as HTMLSelectElement).value;
    this.locationSelected.emit(location);  // Emit the selected location
  }


  @Output() toggleSidebar = new EventEmitter<void>();

  // This function will be called when the filter icon is clicked
  onToggleSidebar(): void {
    // Emit the toggleSidebar event to the parent component
    this.toggleSidebar.emit();
  }
}