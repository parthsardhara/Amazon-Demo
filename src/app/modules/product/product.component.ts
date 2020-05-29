import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private mainService: MainService) { 
    this.mainService.nextTriggerObservable(null);
  }

  ngOnInit(): void {
    this.mainService.nextTriggerObservable({ route: 'product', value: '1' });
  }

}