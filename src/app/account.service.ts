import { Injectable, inject, forwardRef } from '@angular/core';
@Injectable({providedIn: 'root'})
export class AccountService {
 private accountsWithBalance:Map<string, number> = new Map();
 public async createAccount(accountID:string):Promise<void>{
   if (this.accountsWithBalance.has(accountID)){
     throw new Error('ACCOUNT_EXISTS');
   }
   this.accountsWithBalance.set(accountID,0);
 }
 public async topUp(accountID:string, amount:number):Promise<number>{
   if (!this.accountsWithBalance.has(accountID)){
     throw new Error('ACCOUNT_DOES_NOT_EXIST');
   }
   if (amount<=0){
     throw new Error('INVALID_INPUT')
   }
   // @ts-ignore
   this.accountsWithBalance.set(accountID, this.accountsWithBalance.get(accountID) + amount);
   // @ts-ignore
   return this.accountsWithBalance.get(accountID)
 }
}
