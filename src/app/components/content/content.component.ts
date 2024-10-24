import { Component, HostListener, Input, OnChanges, QueryList, ViewChildren} from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpportunityCardComponent } from '../opportunity-card/opportunity-card.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [OpportunityCardComponent, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent implements OnChanges {
  @Input() selectedTags: string[] = [];

  // Company SVG icons
  googleSvgContent: string = `
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128">
    <g id="_x31__stroke">
      <g id="Google">
        <rect fill="none" height="128" width="128"/>
        <path fill="#FBBC05" d="M27.585,64c0-4.157,0.69-8.143,1.923-11.881L7.938,35.648C3.734,44.183,1.366,53.801,1.366,64c0,10.191,2.366,19.802,6.563,28.332l21.558-16.503C28.266,72.108,27.585,68.137,27.585,64"/>
        <path fill="#EA4335" d="M65.457,26.182c9.031,0,17.188,3.2,23.597,8.436L107.698,16C96.337,6.109,81.771,0,65.457,0C40.129,0,18.361,14.484,7.938,35.648l21.569,16.471C34.477,37.033,48.644,26.182,65.457,26.182"/>
        <path fill="#34A853" d="M65.457,101.818c-16.812,0-30.979-10.851-35.949-25.937L7.938,92.349C18.361,113.516,40.129,128,65.457,128c15.632,0,30.557-5.551,41.758-15.951L86.741,96.221C80.964,99.86,73.689,101.818,65.457,101.818"/>
        <path fill="#4285F4" d="M126.634,64c0-3.782-0.583-7.855-1.457-11.636H65.457v24.727h34.376c-1.719,8.431-6.397,14.912-13.092,19.13l20.474,15.828C118.981,101.129,126.634,84.861,126.634,64"/>
      </g>
    </g>
  </svg>`;

  amazonSvgContent: string = `
  <svg viewBox="2606 1246 120 120" xmlns="http://www.w3.org/2000/svg"><defs><style>
      .cls-1 {
        fill: #231f20;
      }

      .cls-2 {
        fill: #fff;
      }

      .cls-3 {
        fill: #f8981d;
      }

      .cls-4 {
        fill: #d98924;
      }
    </style></defs><g data-name="Group 79" id="Group_79" transform="translate(2558 1165)"><circle class="cls-1" cx="60" cy="60" data-name="Ellipse 61" id="Ellipse_61" r="60" transform="translate(48 81)"/><g data-name="Group 78" id="Group_78" transform="translate(-101.356 -113.223)"><path class="cls-2" d="M2303.133,186.866c1.258-.715.734-5.719,6.817-7.046s7.97,3.778,7.97,3.778v6.433s-14.525.332-21.6,5.106-6.711,13.99-6.711,13.99-1.888,11.131,10.382,14.194,20.344-6.229,20.344-6.229a29.138,29.138,0,0,0,3.776,4.8c1.783,1.634,2.2,1.838,3.356,1.736s9.228-6.842,9.124-7.965-4.4-7.557-4.4-7.557V181.658s-1.573-6.408-6.4-9.5-12.9-2.859-12.9-2.859a22.762,22.762,0,0,0-16.255,5.106c-7.236,6.229-5.453,11.539-5.034,11.744S2301.875,187.581,2303.133,186.866Z" data-name="Path 172" id="Path_172" transform="translate(-2102.457 49)"/><path class="cls-1" d="M2317.458,197.4s-7.472-.128-11.011,2.553-3.146,7.863-3.146,7.863,1.259,6.331,7.131,5.31,7.026-9.191,7.026-9.191Z" data-name="Path 173" id="Path_173" transform="translate(-2101.786 49.597)"/><path class="cls-3" d="M2279.765,223.1s12.9,9.7,29.573,11.029,30.622-6.638,30.622-6.638.944,0,1.258.511a2.4,2.4,0,0,1,0,1.532s-10.8,11.744-30.937,10.824-31.356-15.726-31.356-15.726-.76-1.074-.524-1.532S2279.765,223.1,2279.765,223.1Z" data-name="Path 174" id="Path_174" transform="translate(-2103 50.137)"/><path class="cls-4" d="M2331.606,225.571s2.989-.306,5.243-.306a21.08,21.08,0,0,1,3.775.306s.76.306.42,2.655-2.438,6.28-1.783,6.74,3.094-1.915,4.4-4.9,1.258-6.536.839-7.046-3.88-1.123-7.236-.715S2330.767,225.162,2331.606,225.571Z" data-name="Path 175" id="Path_175" transform="translate(-2100.413 50.121)"/></g></g></svg>
  `;
  dribbbleSvgContent: string = `
    <svg enable-background="new 0 0 24 24" id="Layer_1" version="1.1" viewBox="0 0 24 24" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle cx="12.0327806" cy="12.0542803" fill="#EF548A" r="11"/><path d="M12,0C5.3833008,0,0,5.3833008,0,12s5.3833008,12,12,12s12-5.3833008,12-12S18.6166992,0,12,0z    M19.8609619,5.8394775c1.3174438,1.6773071,2.1135254,3.7802734,2.1343994,6.0688477   c-2.475769-0.5689697-4.7539063-0.7077637-6.8656006-0.428833c-0.2669678-0.6221313-0.5466309-1.2406006-0.8495483-1.8532104   C16.3580322,8.7384033,18.2120361,7.5164185,19.8609619,5.8394775z M18.4806519,4.3984375   c-1.4476318,1.4990845-3.0924683,2.638916-5.1281128,3.477356c-1.0507202-1.8805542-2.2804565-3.7318115-3.7062988-5.5844116   C10.4025269,2.1079102,11.1880493,2,12,2C14.47229,2,16.7333984,2.9065552,18.4806519,4.3984375z M7.6660156,3.0018311   c1.4683228,1.8562012,2.7202148,3.6868286,3.781189,5.5375366C8.9820557,9.2626953,5.9970703,9.6650391,2.2451172,9.8256836   C2.9165649,6.812439,4.9510498,4.3150024,7.6660156,3.0018311z M2.0082397,11.836853   c3.9388428-0.1491699,7.3895874-0.5493164,10.4040527-1.5077515c0.2575684,0.5125732,0.5032349,1.02771,0.7332764,1.546814   c-3.3731689,0.9334717-6.2868652,3.081665-8.8471069,6.494751C2.8638306,16.6393433,2,14.4189453,2,12   C2,11.9449463,2.0073242,11.8917236,2.0082397,11.836853z M5.7400513,19.7865601   c2.3775635-3.2435913,5.0394287-5.2397461,8.1634521-6.0437622c0.8881226,2.3681641,1.5198975,4.8353271,1.9276733,7.491272   C14.6503296,21.7258301,13.3569336,22,12,22C9.6311646,22,7.4552612,21.1682129,5.7400513,19.7865601z M17.6873779,20.2149658   c-0.4072876-2.3736572-0.996582-4.6290894-1.7904053-6.8066406c1.8141479-0.173645,3.7740479-0.0041504,5.9136353,0.5125732   C21.3028564,16.5186768,19.7869263,18.756897,17.6873779,20.2149658z" fill="#C72263"/><path d="M12,0.25c5.3285522,0,9.8440552,3.4422607,11.4705811,8.2207642   C21.9632568,3.565979,17.3988037,0,12,0S2.0368042,3.565979,0.5294189,8.4706421C2.1559448,3.6922607,6.6713867,0.25,12,0.25z" fill="#FFFFFF" opacity="0.2"/><path d="M12,23.75c-4.7450914,0-8.8374472-2.6986141-10.8253527-6.6640053   c-0.2444347-0.4875889-0.4570514-0.9943295-0.6351512-1.5175619c0.1608156,0.5232897,0.3563147,1.0308924,0.5838224,1.5202017   C3.02824,21.1856155,7.1771917,24,12,24c4.6758442,0,8.7214317-2.6558895,10.7003746-6.5535698   c0.305975-0.6026421,0.5625458-1.234972,0.7644005-1.8917618c-0.1286106,0.3778324-0.2752476,0.7471523-0.4388905,1.1069431   C21.1199665,20.8520508,16.9072742,23.75,12,23.75z" fill="#010101" opacity="0.1"/><linearGradient gradientUnits="userSpaceOnUse" id="SVGID_1_" x1="1.1249185" x2="22.875082" y1="6.9288664" y2="17.0711346"><stop offset="0" style="stop-color:#FFFFFF;stop-opacity:0.2"/><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></linearGradient><path d="M12,0C5.3833008,0,0,5.3833008,0,12s5.3833008,12,12,12s12-5.3833008,12-12S18.6166992,0,12,0z" fill="url(#SVGID_1_)"/></g><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/><g/></svg>
    `;

  jobs = [
    { 
      date: '20 May, 2023', 
      company: 'Amazon', 
      jobTitle: 'Senior UI/UX Designer', 
      tags: ['Part time', 'Senior Level', 'Distant'], 
      salary: '$250/hr', 
      location: 'San Francisco, CA', 
      bgColor: 'rgba(255, 165, 0, 0.2)', 
      logoSvgContent: this.amazonSvgContent  // SVG for the logo
    },
    { 
      date: '4 Feb, 2023', 
      company: 'Google', 
      jobTitle: 'Junior UI/UX Designer', 
      tags: ['Full time', 'Junior Level', 'Flexible Schedule', 'Distant', 'Project Work'], 
      salary: '$150/hr', 
      location: 'California, CA', 
      bgColor: 'rgba(144, 238, 144, 0.3)', 
      logoSvgContent: this.googleSvgContent  // SVG for the logo
    },
    {
      date: '4 Feb, 2023', 
      company: 'Google', 
      jobTitle: 'Senior Motion Designer', 
      tags: ['Part time', 'Senior Level', 'Full Day', 'Shift Work'], 
      salary: '$150/hr', 
      location: 'California, CA', 
      bgColor: 'rgba(144, 238, 144, 0.3)', 
      logoSvgContent: this.dribbbleSvgContent  // SVG for the logo
    }
  ];

  filteredJobs = this.jobs;

  ngOnChanges(): void {
    // console.log('Selected tags have changed:', this.selectedTags);
    this.filterJobs();
  }

  // Filter jobs based on selected tags
  filterJobs(): void {
    // console.log('Selected Tags:', this.selectedTags); // Check current selected tags
  
    if (this.selectedTags.length === 0) {
      // Show all jobs if no tags are selected
      this.filteredJobs = this.jobs;
    } else {
      // Filter jobs where at least one tag matches
      this.filteredJobs = this.jobs.filter(job => {
        const hasMatchingTag = this.selectedTags.some(selectedTag =>
          job.tags.some(jobTag =>
            jobTag.trim().toLowerCase() === selectedTag.trim().toLowerCase()
          )
        );
        // console.log(`Job: ${job.jobTitle}, Matching: ${hasMatchingTag}`); // Log which jobs match
        return hasMatchingTag;
      });
    }
  
    // console.log('Filtered Jobs:', this.filteredJobs); // Log the final filtered jobs array
  }

  dropdownOpen = false;
  sortOption = 'Last updated';

  // Toggle the dropdown menu
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  // Function to handle sorting logic
  sortBy(option: string) {
    this.sortOption = option;
    console.log(`Sorting by ${option}`);
    this.dropdownOpen = false; // Close dropdown after selection
  }

  // Detect clicks outside of the dropdown
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    // Close the dropdown if the click is outside the button and dropdown
    if (!target.closest('.relative')) {
      this.dropdownOpen = false;
    }
  }
  
}
