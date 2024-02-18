import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssociateComponent } from './add-associate.component';

describe('AddAssociateComponent', () => {
  let component: AddAssociateComponent;
  let fixture: ComponentFixture<AddAssociateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddAssociateComponent]
    });
    fixture = TestBed.createComponent(AddAssociateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
