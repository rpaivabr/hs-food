import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'hsf-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  close(value?: string): void {
    this.dialogRef.close(value);
  }
}
