import { Component, OnInit } from '@angular/core';
import {  MatSnackBar,MatSnackBarModule} from '@angular/material/snack-bar';
// import {  MatSnackBarModule} from '@angular/material/s';
@Component({
  selector: 'app-pbm1',
  templateUrl: './pbm1.component.html',
  styleUrls: ['./pbm1.component.scss']
})
export class Pbm1Component implements OnInit {
  foodItems: any;
  constructor(private _snackBar: MatSnackBar) { }
  ngOnInit(): void {

  }
  validate() {
    console.log(this.foodItems);
    if (this.foodItems && this.foodItems.indexOf(" ") > -1) {
      this.foodItems = this.foodItems.replace(/ /g, "");
    }
    if (this.foodItems && this.foodItems != ',') {
      let foodSplit = this.foodItems.split(',');
      if (foodSplit.length <= 3) {
        // console.log('"Enjoy!".')
        this.snackbarMessage('Enjoy!');
      } else if (foodSplit.length == 4) {
        // console.log('“Careful”')
        this.snackbarMessage('Careful');

      } else {
        // console.log('"Too much!"')
        this.snackbarMessage('Too much!');
      }
    } else {
      this.snackbarMessage('Please enter data first');
      // console.log('cont be empty');
    }
  }
  snackbarMessage(msg:string) {
    this._snackBar.open(msg, 'End now', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
