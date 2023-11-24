import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import {FormsModule} from "@angular/forms";
import { CounterComponent } from './counter/counter.component';
import { DisplayComponent } from './counter/display/display.component';
import { VoterComponent } from './voter/voter.component';
import { DisplayVoterComponent } from './voter/display-voter/display-voter.component';
import { TransactionComponent } from './transaction/transaction.component';
import { PreviewtransactionComponent } from './transaction/previewtransaction/previewtransaction.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    CounterComponent,
    DisplayComponent,
    VoterComponent,
    DisplayVoterComponent,
    TransactionComponent,
    PreviewtransactionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    // AdminPageComponent,
    // CounterComponent,
    // DisplayComponent,
    // DisplayVoterComponent,
    PreviewtransactionComponent
  ]
})
export class AppModule { }
