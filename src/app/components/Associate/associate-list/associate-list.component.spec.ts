import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociateListComponent } from './associate-list.component';

describe('AssociateListComponent', () => {
  let component: AssociateListComponent;
  let fixture: ComponentFixture<AssociateListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssociateListComponent]
    });
    fixture = TestBed.createComponent(AssociateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
