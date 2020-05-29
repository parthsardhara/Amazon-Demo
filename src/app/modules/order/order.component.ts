import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public isProduct:boolean = false;
  public isCustomer:boolean = false;
  public cureentStatus;
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.mainService.triggerObservable().subscribe(res => {
      this.cureentStatus = res;
      if (res && res.route === 'product') {
        if (res.value)
          this.isProduct = true;
        else
          this.isProduct = false;
      }
      if (res && res.route === 'customer') {
        if (res.value)
          this.isCustomer = true;
        else
          this.isCustomer = false;
      }
    });
  }

}
