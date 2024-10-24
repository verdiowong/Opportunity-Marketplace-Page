import { Component, Input} from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-opportunity-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opportunity-card.component.html',
  styleUrl: './opportunity-card.component.scss'
})
export class OpportunityCardComponent {
  @Input() date!: string;
  @Input() company!: string;
  @Input() jobTitle!: string;
  @Input() tags: string[] = [];
  @Input() salary!: string;
  @Input() location!: string;
  @Input() bgColor!: string; 
  @Input() logoSvgContent!: string; 

  isVisible: boolean = true;

  constructor(private sanitizer: DomSanitizer) {}

  isBookmarked: boolean = false;

  toggleBookmark(){
    this.isBookmarked = !this.isBookmarked;
  }

  getSafeHtml() {
    return this.sanitizer.bypassSecurityTrustHtml(this.logoSvgContent);
  }
}
