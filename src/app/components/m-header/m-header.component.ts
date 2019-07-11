import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'lan-header',
    templateUrl: 'm-header.component.html',
    styleUrls: ['m-header.component.scss']
})
export class MHeaderComponent implements OnInit {
    @Input('title') title: string;
    constructor() { }

    ngOnInit() {}

}
