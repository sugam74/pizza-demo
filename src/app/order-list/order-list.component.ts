import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderList = [];
  orderId: string;
  statusList = ['Order Received', 'Preparing', 'Ready to serve'];
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.getAppConfigJSON().subscribe( res => {
      this.orderList = res;
    });    
  }
  private showOrderDetails(id) {
    this.orderId = id; 
  }
  private changeStatus(id, status) {
    this.orderList.forEach( el => {
      if((el.orderId === id && el.orderStatus === status) && status !== 'Ready to serve') {
        el.orderStatus = this.statusList[this.statusList.indexOf(status) + 1];
      }
    })
  }

}
