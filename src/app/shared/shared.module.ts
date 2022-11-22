import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    HttpClientModule,
    FormsModule,
    InputTextModule
  ]
})
export class SharedModule { }
