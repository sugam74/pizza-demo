import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import OrderList from "../../assets/order-details.json";
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { element } from 'protractor';
import { MatSnackBar } from '@angular/material';

declare var $: any;

@Injectable()
export class CommonService {
  headers: any;
  public xmlItems: any;
  constructor(private http: HttpClient,
    private _snackBar: MatSnackBar, ) {
  }
  //Function to read App Config
  getAppConfigJSON(): Observable<any> {
    return of(OrderList);
  }
  getOrderDetailsById(id : string) {
    const wholeArray = OrderList.filter(value => value.orderId === id);
    return of(wholeArray);
  }
  
}


