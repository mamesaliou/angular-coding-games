import {ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {CounterComponent} from './counter.component';
import {FormsModule} from "@angular/forms";

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent],
      imports: [FormsModule], // Include FormsModule in imports
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should print input message in every 5ms', fakeAsync(()=>{
  //   component.message="Hello World"
  //   let intervalInput=fixture.nativeElement.querySelector('#intervalInput');
  //   intervalInput.value=5;
  //   let intervalSetButton=fixture.nativeElement.querySelector('#intervalSetButton');
  //   intervalSetButton.click();
  //   fixture.detectChanges();
  //   tick(11);
  //   fixture.detectChanges();
  //   expect(component.counter).toEqual(2);
  //   expect(component.message).toEqual('Hello World');
  //   discardPeriodicTasks();
  // }));
});
