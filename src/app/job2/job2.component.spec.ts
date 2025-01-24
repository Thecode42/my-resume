import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job2Component } from './job2.component';

describe('Job2Component', () => {
  let component: Job2Component;
  let fixture: ComponentFixture<Job2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Job2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Job2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
