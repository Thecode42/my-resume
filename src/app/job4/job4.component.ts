import { Component, inject } from '@angular/core';
import { NgbTooltipModule, NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-job4',
  imports: [NgbTooltipModule],
  templateUrl: './job4.component.html',
  styleUrl: './job4.component.css'
})
export class Job4Component {
  activeOffcanvas = inject(NgbActiveOffcanvas);
}
