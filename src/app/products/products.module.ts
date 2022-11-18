import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { DataGeneratorComponent } from './data-generator/data-generator.component';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    declarations: [
        DataGeneratorComponent
    ]
})
export class ProductsModule { }