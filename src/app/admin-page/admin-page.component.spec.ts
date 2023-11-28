import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AdminPageComponent } from './admin-page.component';
import {AccountService} from "../account.service";

describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPageComponent],
      imports: [FormsModule], // Include FormsModule in imports
      providers:[AccountService]
    });

    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    let accounteService = TestBed.inject(AccountService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create account', () => {
    const createAccountInput = fixture.nativeElement.querySelector('#createAccountInput');
    const createAccountButton = fixture.nativeElement.querySelector('#createAccountButton');
    createAccountInput.value = 'Probe account';
    //createAccountInput.dispatchEvent(new Event('input'));
    createAccountButton.click();
    fixture.detectChanges();
    // await fixture.whenStable();
    const message = fixture.nativeElement.querySelector('#message');
    expect(message.textContent).toEqual('Successfully added account');
  });


  it('should top up account',  async () => {
    const createAccountInput = fixture.nativeElement.querySelector('#createAccountInput');
    const createAccountButton = fixture.nativeElement.querySelector('#createAccountButton');
    createAccountInput.value = 'Probe account';
    createAccountInput.dispatchEvent(new Event('input'));
    createAccountButton.click();

    const topupAccountInput = fixture.nativeElement.querySelector('#topupAccountInput');
    const topupAmountInput = fixture.nativeElement.querySelector('#topupAmountInput');
    const topupAccountButton=fixture.nativeElement.querySelector('#topupAccountButton');
    topupAccountInput.value = 'Probe account';
    topupAccountInput.dispatchEvent(new Event('input'));
    topupAmountInput.value='20';
    topupAmountInput.dispatchEvent(new Event('input'));
    topupAccountButton.click();
    fixture.detectChanges();
    await fixture.whenStable().then(()=>{
      const message = fixture.nativeElement.querySelector('#message');
      expect(message.textContent).toEqual('Current balance: 20');
    });
  });
});
