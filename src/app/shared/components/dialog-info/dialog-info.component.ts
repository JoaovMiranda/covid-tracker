import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-info',
  templateUrl: './dialog-info.component.html',
  styleUrls: ['./dialog-info.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DialogInfoComponent {

  constructor(public dialogRef: MatDialogRef<DialogInfoComponent>) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
