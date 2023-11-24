import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'voter-component',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent {

  @Input() public question: string='';

  @Input() public yesAnswer: string='';

  @Input() public noAnswer: string='';
  @Output() public output = new EventEmitter<boolean>();
  public vote(vote: boolean): void {
    // emit the vote as an output event
    this.output.emit(vote);
  }
}

