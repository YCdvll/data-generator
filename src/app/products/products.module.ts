import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { DataGeneratorComponent } from './data-generator/data-generator.component';
import { SharedModule } from '../shared/shared.module';
import { AppService } from '../services/app-service.service';

@NgModule({
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule
    ],
    declarations: [
        DataGeneratorComponent
    ],
    providers: [
        AppService
    ]
})
export class ProductsModule { }