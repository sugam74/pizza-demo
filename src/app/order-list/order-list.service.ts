import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;

@Injectable()
export class OrderListService {
  headers: any;
  public xmlItems: any;
  constructor(private http: HttpClient ) {
  }
  
}


