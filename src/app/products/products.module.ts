import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { DataGeneratorComponent } from './data-generator/data-generator.component';
import { SharedModule } from '../shared/shared.module';
import { AppService } from '../services/app-service.service';
import { InputsComponent } from '../inputs/inputs.component';

@NgModule({
    declarations: [
        DataGeneratorComponent,
        InputsComponent
    ],
    providers: [
        AppService
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule,
    ],
    exports: [SharedModule]
})
export class ProductsModule { }