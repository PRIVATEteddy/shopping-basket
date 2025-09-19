import { Component } from '@angular/core';
import { MatDialog,MatDialogActions, MatDialogContent } from '@angular/material/dialog';
@Component({
  selector: 'app-my-dialog',
  standalone: true,
  imports: [MatDialogActions,MatDialogContent],
  templateUrl: "./product-details-dialog.html",
})
export class MyDialogComponent {}
