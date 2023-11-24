import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  @Input() public currency: string='';
  // @ts-ignore
  @Input() public timeOfTransaction: Date;
  @Input() public amount: number=0;
  @Input() public fee: number=0;
}
