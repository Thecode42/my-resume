import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job3Component } from './job3.component';

describe('Job3Component', () => {
  let component: Job3Component;
  let fixture: ComponentFixture<Job3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Job3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Job3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
