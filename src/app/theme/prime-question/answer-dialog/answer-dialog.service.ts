import { AnswerDialogComponent } from './answer-dialog.component';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IAnswer } from 'src/app/blocks/interface/IAnswer.interface';

@Injectable({
  providedIn: 'root'
})
export class AnswerDialogService {

  constructor(
    private dialog: MatDialog,
  ) { }

  open(payload: IAnswer): MatDialogRef<any, any> {
    console.log(payload)

    const dialogRef = this.dialog.open(AnswerDialogComponent, {
      minHeight: "300px",
      minWidth: "400px",
      data: payload
    });

    return dialogRef;
  }

}
