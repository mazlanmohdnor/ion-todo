import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-m-subheader',
    templateUrl: './m-subheader.component.html',
    styleUrls: ['./m-subheader.component.scss']
})
export class MSubheaderComponent implements OnInit {
    @Input('title') title: string;
    @Input('subTitle') subTitle: string;
    
    constructor() { }
    
    ngOnInit() {}
    
}
