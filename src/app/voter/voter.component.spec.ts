import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterComponent } from './voter.component';

describe('VoterComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoterComponent]
    });
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should pass througth input',  () =>{
    component.question="Do you agree?";
    component.yesAnswer="Yes";
    component.noAnswer="No";
    fixture.detectChanges();
    expect(component.question).toEqual('Do you agree?');
    expect(component.yesAnswer).toEqual('Yes');
    expect(component.noAnswer).toEqual('No')
  });
  // it('should handle outputs',async ()=>{
  //   component.vote(true);
  //   fixture.detectChanges();
  //   await fixture.whenStable();
  //   expect(fixture.nativeElement.querySelector("#lastVote")).toEqual('Yes');
  // });
});
