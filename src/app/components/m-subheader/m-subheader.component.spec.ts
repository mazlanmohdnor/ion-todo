import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSubheaderComponent } from './m-subheader.component';

describe('MSubheaderComponent', () => {
    let component: MSubheaderComponent;
    let fixture: ComponentFixture<MSubheaderComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
                   declarations: [MSubheaderComponent],
                   schemas: [CUSTOM_ELEMENTS_SCHEMA]
               })
               .compileComponents();
    }));
    
    beforeEach(() => {
        fixture = TestBed.createComponent(MSubheaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
