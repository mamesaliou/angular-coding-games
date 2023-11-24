import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './display-voter.component.html',
  styleUrls: ['./display-voter.component.css']
})
export class DisplayVoterComponent {
  public question = 'Too easy?';
  public yesAnswer = 'Yes';
  public noAnswer = 'No';
  // @ts-ignore
  public lastVote: string;
  handleOutput(vote: boolean) {
    // set the last vote to the corresponding answer
    this.lastVote = vote ? this.yesAnswer : this.noAnswer;
  }
}


