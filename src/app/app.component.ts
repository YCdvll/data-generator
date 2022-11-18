import { Component } from '@angular/core';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) { }

  items: MenuItem[] = [];

  ngOnInit() {
    this.primengConfig.ripple = true;

    this.items = [
      { label: 'Home', routerLink: '/' },
      { label: 'Data Generator', routerLink: 'Products/DataGenerator' },
    ];
  }
}
