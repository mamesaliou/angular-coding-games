import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionComponent } from './transaction.component';

describe('TransactionComponent', () => {
  let component: TransactionComponent;
  let fixture: ComponentFixture<TransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionComponent]
    });
    fixture = TestBed.createComponent(TransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should diplay EUR', ()=>{
  //
  // })

  // it('should display date',  ()=> {
  //   testerComponent.setInput({currency:'EUR',amount:312.56})
  //   fixture.detectChanges();
  //   const amountDiv = fixture.nativeElement.querySelector('#amount');
  //   expect(amountDiv.textContent).toEqual('000,000,312.56')
  // });
});
