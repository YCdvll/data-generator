import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-data-generator',
  templateUrl: './data-generator.component.html',
  styleUrls: ['./data-generator.component.css']
})
export class DataGeneratorComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  getData() {
    this.appService.getData("").subscribe(callback => {
      console.log(callback);
    });
  }

}
