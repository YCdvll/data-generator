import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGeneratorComponent } from './data-generator/data-generator.component';

const productsRoutes: Routes = [
    {
        path: 'DataGenerator', component: DataGeneratorComponent,
    }
]


@NgModule({
    imports: [
        RouterModule.forChild(productsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule { }