import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {  MatSnackBar,MatSnackBarModule} from '@angular/material/snack-bar';
import { Pbm1Component } from '../pbm1/pbm1.component';

@Component({
  selector: 'app-pbm2',
  templateUrl: './pbm2.component.html',
  styleUrls: ['./pbm2.component.scss']
})

export class Pbm2Component implements OnInit {
  energyInfo: any;
  host: string = 'http://localhost:3000';
  formData: any = {};
  formFlag: boolean = false;
  constructor(private http: HttpClient,private _snackBar: MatSnackBar,private pbm1:Pbm1Component) { }
  displayedColumns: string[] = ['id', 'energyConsumption', 'Devices', 'recordTime', 'Edit', 'Delete'];

  ngOnInit(): void {
    this.getData();
  }
  edit(id: number) {
    console.log(id);
    this.close();
    this.formData=this.energyInfo.filter(function(num:any) {
      return num.id ==id;
    })[0];
  }
  delete(id: number) {
    console.log(id);
    this.deleteData(id);
  }
   close() {
    this.formFlag = !this.formFlag;
  }
  save() {
    console.log(this.formData);
    if(this.formData.hasOwnProperty('Devices') && this.formData.hasOwnProperty('energyConsumption')){
      if(this.formData.hasOwnProperty('id')){
        this.updateData(this.formData);
      }else{
        this.insertData(this.formData);
      }
    }else{
      this.pbm1.snackbarMessage('Fields Cont be Empty');
    }
  }
  getData() {
    this.http.get<any>(this.host + '/energyInfo').subscribe(data => {
      this.energyInfo = data;
      console.log(data);
    }, (error) => {
      console.log(error);
      });
  }
  insertData(formData: any) {
    this.http.post<any>(this.host + '/energyInfo', formData).subscribe(data => {
      this.message(data);
    }, (error) => {
      console.log(error);
      });
  }
  deleteData(id: Number) {
    // let idObj={'id':id};
    this.http.delete<any>(this.host + '/energyInfo?id='+id).subscribe(data => {
      this.message(data);
    }, (error) => {
      console.log(error);
      });
  }
  updateData(formData: any) {
    delete formData.recordTime;
    this.http.put<any>(this.host + '/energyInfo',formData).subscribe(data => {
      this.message(data);
    },(error) => {
      console.log(error);
      });
  }
  message(data:any){
    if(data.hasOwnProperty('affectedRows')){
      this.pbm1.snackbarMessage('Data Saved');
      this.formFlag=false;
      this.getData();
    }else{
      this.pbm1.snackbarMessage('Error to Save');
    }
  }
}
