import { Component, inject, TemplateRef, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbTooltipModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { Job1Component } from './job1/job1.component'
import { Job2Component } from './job2/job2.component'
import { Job3Component } from './job3/job3.component'
import { Job4Component } from './job4/job4.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbTooltipModule, NgbDropdownModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-resume';
  private offcanvasService = inject(NgbOffcanvas);
  openEnd(content: TemplateRef<any>, contentType:String) {
    let component: any;
    switch(contentType){
      case 'job1':
        component = Job1Component;
        break;
      case 'job2':
        component = Job2Component
      break;
      case 'job3':
        component = Job3Component;
        break;
      case 'job4':
        component = Job4Component
      break;
    }
    if(component){
      this.offcanvasService.open(component, { position: 'end' });
    }
	}
}
