import { Component, inject } from '@angular/core';
import { NgbTooltipModule, NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job3',
  imports: [NgbTooltipModule],
  templateUrl: './job3.component.html',
  styleUrl: './job3.component.css'
})
export class Job3Component {
  activeOffcanvas = inject(NgbActiveOffcanvas);
}
