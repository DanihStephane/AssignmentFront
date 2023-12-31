import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatSelectModule} from '@angular/material/select';

import { NewAssignmentComponent } from './new-assignment.component';

describe('NewAssignmentComponent', () => {
  let component: NewAssignmentComponent;
  let fixture: ComponentFixture<NewAssignmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAssignmentComponent]
    });
    fixture = TestBed.createComponent(NewAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
