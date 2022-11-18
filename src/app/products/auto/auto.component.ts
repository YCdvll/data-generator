import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: 'app-product-auto',
    templateUrl: "./auto.component.html"
})

export class AutoComponent implements OnInit {

    constructor(private route: ActivatedRoute) { }


    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}