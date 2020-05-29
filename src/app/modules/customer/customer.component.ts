import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  constructor(private mainService: MainService) {
    this.mainService.nextTriggerObservable(null);
   }

  ngOnInit(): void {
    this.mainService.nextTriggerObservable({ route: 'customer', value: '' });
  }

}
