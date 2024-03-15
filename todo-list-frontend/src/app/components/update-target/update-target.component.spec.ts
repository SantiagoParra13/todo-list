import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTargetComponent } from './update-target.component';

describe('UpdateTargetComponent', () => {
  let component: UpdateTargetComponent;
  let fixture: ComponentFixture<UpdateTargetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateTargetComponent]
    });
    fixture = TestBed.createComponent(UpdateTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
