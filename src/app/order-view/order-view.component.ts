import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { CommonService } from '../services/common.service';
import { localeData } from 'moment';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit, OnChanges {
  @Input() orderId;
  orderDetails = {};
  customerName: string = "";
  customerAddress: string = "";
  constructor(private commonService: CommonService) { }

  ngOnInit() {   
  }

  ngOnChanges() {
    console.log(this.orderId);
    if(this.orderId !== undefined) {
      this.commonService.getOrderDetailsById(this.orderId).subscribe(res => {
        console.log(res);
        this.orderDetails = res[0].orders;
        this.customerName = res[0].customerName;
        this.customerAddress = res[0].deliveryAddress;
      });
    }    
  }

}
