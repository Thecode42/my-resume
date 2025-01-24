import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Job4Component } from './job4.component';

describe('Job4Component', () => {
  let component: Job4Component;
  let fixture: ComponentFixture<Job4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Job4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Job4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
