import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    HttpClientModule,
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
