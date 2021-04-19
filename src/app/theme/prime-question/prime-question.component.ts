import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IAnswer } from 'src/app/blocks/interface/IAnswer.interface';
import { AnswerDialogService } from './answer-dialog/answer-dialog.service';

@Component({
  selector: 'app-prime-question',
  templateUrl: './prime-question.component.html',
  styleUrls: ['./prime-question.component.scss']
})
export class PrimeQuestionComponent implements OnInit {

  private primeNumbers = [];
  public answer: IAnswer = { largestSum: 0, termsCount: 0 };

  constructor(
    public dialog: MatDialog,
    private _answerDialogService: AnswerDialogService
  ) { }

  ngOnInit() {
    this.findPrimes(1000000);
  }

  // -----------------------------------
  // Public methods
  // -----------------------------------
  public showAnswer() {
    this._answerDialogService.open(this.answer);
  }

  // -----------------------------------
  // Private  methods
  // -----------------------------------
  private isPrime(number) {
    if (number < 2) return false;
    if (number == 2) return true;
    if (number % 2 == 0) return false;

    let sqrt = Math.round(Math.sqrt(number));

    for (let n = 3; n <= sqrt; n += 2) {
      if (number % n == 0) return false;
    }

    return true;
  }

  private findPrimes(count) {
    this.storePrimes(count)
    this.answer = this.findLargestSum(count);
    // console.log("Largest sum'o'primes of prime consecutives under " + count + " is: " + this.answer.largestSum + " with " + this.answer.termsCount + " terms.");
  }

  private storePrimes(count) {
    for (let i = 2; i < count; i++) { // starts at 2
      if (this.isPrime(i)) {
        this.primeNumbers.push(i);
      }
    }
  }

  private findLargestSum(limit) {
    let resultSum = 0;
    let resultCount = -1;

    for (var i = 0; i < this.primeNumbers.length && this.primeNumbers.length - i > resultCount; i++) {
      let sum = 0;

      for (var j = i; j < this.primeNumbers.length; j++) {
        let prime = this.primeNumbers[j];

        sum += prime;
        if (sum >= limit) {
          sum -= prime;
          break;
        }
      }
      j--;


      while (j >= i && !this.isPrime(sum)) {
        sum -= this.primeNumbers[j--];
      }

      if (j >= i && j - i > resultCount) {
        resultSum = sum;
        resultCount = j + 1 - i;
      }
    }

    return { largestSum: resultSum, termsCount: resultCount };
  }
}
