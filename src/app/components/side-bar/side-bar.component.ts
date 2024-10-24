import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  selectedTags: string[] = [];

  @Output() tagsChanged = new EventEmitter<string[]>();

  onTagChange(tag: string, event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked;
  
    if (isChecked && !this.selectedTags.includes(tag)) {
      // Create a new array reference when adding a tag
      this.selectedTags = [...this.selectedTags, tag];
    } else if (!isChecked) {
      // Create a new array reference when removing a tag
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
    // console.log('Selected Tags:', this.selectedTags); // Debugging log
  
    // Emit the updated selected tags with a new array reference
    this.tagsChanged.emit([...this.selectedTags]);
  }

  @Output() toggle = new EventEmitter<void>();
  isSidebarVisible: boolean = true;

  toggleSidebar(): void {
    this.toggle.emit();
  }
}
