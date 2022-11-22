import { Component, Input } from '@angular/core';

@Component({
  selector: 'inputs-component',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  @Input() data: any;
  @Input() visible!: boolean;
  
  constructor() { }

  ngOnInit(): void {
  }
}
