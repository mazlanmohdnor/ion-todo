import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DeviceFeedback } from '@ionic-native/device-feedback/ngx';
import { IonicModule } from '@ionic/angular';
import { MCardComponent } from './m-card/m-card.component';
import { MHeaderComponent } from './m-header/m-header.component';
import { MSlideComponent } from './m-slide/m-slide.component';
import { MSubheaderComponent } from './m-subheader/m-subheader.component';


const COMPONENTS = [
    MCardComponent,
    MHeaderComponent,
    MSlideComponent,
    MSubheaderComponent
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: COMPONENTS,
    providers: [
        DeviceFeedback
    ]
})
export class ComponentsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ComponentsModule,
            providers: [
                DeviceFeedback
            ]
        };
    }
}
