import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { DataGeneratorComponent } from './data-generator/data-generator.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule
    ],
    declarations: [
        DataGeneratorComponent
    ]
})
export class ProductsModule { }