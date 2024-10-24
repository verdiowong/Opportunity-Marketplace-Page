import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ContentComponent } from './components/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideBarComponent, TopBarComponent, ContentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Opportunity Marketplace';
  selectedTags : string[] = [];
  // Add the isSidebarVisible property here
  isSidebarVisible: boolean = true;

  // This function will toggle the sidebar visibility
  toggleSidebar(): void {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  onTagsChanged(tags: string[]): void {
    this.selectedTags = tags;
  }
}
