import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AutoComponent } from './auto/auto.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ProductsRoutingModule
    ],
    declarations: [
        AutoComponent
    ]
})
export class ProductsModule { }