import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-m-slide',
    templateUrl: './m-slide.component.html',
    styleUrls: ['./m-slide.component.scss']
})
export class MSlideComponent implements OnInit {
    slideOpts = {
        initialSlide: 0,
        speed: 400
    };
    objList: { bgcolor: string, title: string; subTitle: string; img: string }[] = [
        {
            bgcolor: '#83CDEA',
            title: 'Title 1',
            subTitle: 'sasdas 1',
            img: 'assets/icons/023-target.png'
        },
        {
            bgcolor: '#85DBD0',
            title: 'Title 2',
            subTitle: 'sasdas 1',
            img: 'assets/icons/018-machine.png'
        },
        {
            bgcolor: '#6B74F5',
            title: 'Title 3',
            subTitle: 'sasdas 1',
            img: 'assets/icons/014-business-man.png'
        },
        {
            bgcolor: '#85DBD0',
            title: 'Title 4',
            subTitle: 'sasdas 1',
            img: 'assets/icons/004-hot-air-balloon.png'
        },
        {
            bgcolor: '#83CDEA',
            title: 'Title 3',
            subTitle: 'sasdas 1',
            img: 'assets/icons/006-sprout.png'
        },
        {
            bgcolor: '#6B74F5',
            title: 'Title 4',
            subTitle: 'sasdas 1',
            img: 'assets/icons/007-head.png'
        }
    ];
    
    constructor() { }
    
    ngOnInit() {}
    
}
