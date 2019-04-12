import { RecordsService } from './records.service';
import { HelloComponent } from './hello/hello.component';
import { Component } from '@angular/core';

interface myData  {
  obj : Object
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  records = {};

   constructor(private myFirstService : RecordsService) {
    
   }

  ngOnInit() {
   this.records = this.myFirstService.getData().subscribe(data=>  {
    this.records  =  data.obj
  })
  }

}
