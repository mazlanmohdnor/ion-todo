import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DeviceFeedback } from '@ionic-native/device-feedback/ngx';

@Component({
    selector: 'lan-card',
    templateUrl: 'm-card.component.html',
    styleUrls: ['m-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MCardComponent implements OnInit {
    @Input('img') img: string;
    @Input('title') title: string;
    @Input('subTitle') subTitle: string;
    @Input('width') width: string;
    @Input('height') height: string;
    @Input('bgcolor') bgcolor: string;
    @Input('borderColor') borderColor: string;
    @Input('textColor') textColor: string;
    @Output('tap') tap: EventEmitter<any> = new EventEmitter<any>();

    constructor(
        private deviceFeedback: DeviceFeedback
    ) { }

    ngOnInit() {}

    onClick() {
        this.deviceFeedback.acoustic();
        this.tap.emit();
    }
}
