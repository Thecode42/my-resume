import { Component, inject } from '@angular/core';
import { NgbTooltipModule, NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job2',
  imports: [NgbTooltipModule],
  templateUrl: './job2.component.html',
  styleUrl: './job2.component.css'
})
export class Job2Component {
  activeOffcanvas = inject(NgbActiveOffcanvas);
}
