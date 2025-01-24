import { Component, inject } from '@angular/core';
import { NgbTooltipModule, NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job1',
  imports: [NgbTooltipModule],
  templateUrl: './job1.component.html',
  styleUrl: './job1.component.css'
})
export class Job1Component {
  activeOffcanvas = inject(NgbActiveOffcanvas);
}
