import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IAnswer } from 'src/app/blocks/interface/IAnswer.interface';

@Component({
  selector: 'app-answer-dialog',
  templateUrl: './answer-dialog.component.html',
  styleUrls: ['./answer-dialog.component.scss']
})
export class AnswerDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public payload: IAnswer,
  ) { }

  ngOnInit() {
  }
}
