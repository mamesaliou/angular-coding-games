import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewtransactionComponent } from './previewtransaction.component';

describe('PreviewtransactionComponent', () => {
  let component: PreviewtransactionComponent;
  let fixture: ComponentFixture<PreviewtransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviewtransactionComponent]
    });
    fixture = TestBed.createComponent(PreviewtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
