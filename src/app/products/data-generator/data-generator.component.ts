import { Component, OnInit, Input } from '@angular/core';
import { AppService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-data-generator',
  templateUrl: './data-generator.component.html',
  styleUrls: ['./data-generator.component.css']
})
export class DataGeneratorComponent implements OnInit {

  constructor(private appService: AppService) { }

  name: string = "";
  response: string ="";

  ngOnInit(): void {
  }

  getData() {
    this.appService.getData("https://localhost:7107/Tools/GetInfo").subscribe(callback => {
      console.log(callback);
    });
  }

  getName() {
    this.appService.getName("https://localhost:7107/Tools/GetName", this.name).subscribe(callback => {
      console.log(callback);
      this.response = callback;
    });
  }

}
