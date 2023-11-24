import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './previewtransaction.component.html',
  styleUrls: ['./previewtransaction.component.css']
})
export class PreviewtransactionComponent {
  public getPresetDate() { return new
  // Date(2023, 4, 15, 12, 30, 45);
    Date(1997, 6, 1, 12, 32, 1);

  }
}
