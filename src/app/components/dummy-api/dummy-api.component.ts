import { Component } from '@angular/core';
import { DummyApiService } from 'src/app/services/dummy-api.service';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css']
})
export class DummyApiComponent {

  data:any;
  show:boolean = false;
  constructor(private service:DummyApiService){

  }
  getdata(){
   this.service.getDummyData().subscribe((response)=>{
    console.log(response);
    this.data =response;
    this.show= true;
   })
  }
}
