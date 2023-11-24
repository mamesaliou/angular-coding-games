import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayVoterComponent } from './display-voter.component';

describe('DisplayVoterComponent', () => {
  let component: DisplayVoterComponent;
  let fixture: ComponentFixture<DisplayVoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayVoterComponent]
    });
    fixture = TestBed.createComponent(DisplayVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
