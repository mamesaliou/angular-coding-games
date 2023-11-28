// account.component.ts
import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-root',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css'],
})
export class AdminPageComponent {
  createAccountInput: string = '';
  topupAccountInput: string = '';
  topupAmountInput: number = 0;
  message: string = '';

  constructor(private accountService: AccountService) {}

   createAccount() {
    // const input=document
    //   .getElementById('createAccountInput') as HTMLInputElement;
    // const accountName=input.value;
    // try {
    //    // @ts-ignore
    //   this.accountService.createAccount(accountName).then(r => );
    //   this.message='Successfully added account';
    // }catch (error){
    //   // @ts-ignore
    //   this.message=error.message;
    // }

    try {
      this.accountService.createAccount(this.createAccountInput);
      this.message = 'Successfully added account';
    } catch (error) {
      // @ts-ignore
      this.message = error.message;
    }
  }

  topUp() {
    if (this.topupAmountInput <= 0) {
      this.message = 'INVALID_INPUT';
      return;
    }
 //    try {
 //      const balance= await this.accountService
 //        .topUp(this.topupAccountInput, this.topupAmountInput);
 //      this.message=`Current balance: ${balance}`;
 //    }catch (error){
 //      // @ts-ignore
 //      this.message=error.message;
 //    }
 //    }

    this.accountService.topUp(this.topupAccountInput, this.topupAmountInput)
      .then((balance) => {
        this.message = `Current balance: ${balance}`;
      })
      .catch((error) => {
        // Handle errors if needed
        this.message = error.message;
      });
  }
}
