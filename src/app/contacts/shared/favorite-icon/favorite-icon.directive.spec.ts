import { Component } from '@angular/core';
import { ComponentFixture, TestBed, TestModuleMetadata } from '@angular/core/testing';
import { constants } from './favorite-icon.constants';
import { FavoriteIconDirective } from './favorite-icon.directive';
import { getStarElement, doClassesMatch } from '../../testing';

@Component({
    template: 
    `
        <i [appFavoriteIcon]="true"></i>
        <i [appFavoriteIcon]="false"></i>
        <i [appFavoriteIcon]="true" [color]="'blue'"></i>
        <i [appFavoriteIcon]="true" [color]="'cat'"></i>
    `
})
class TestComponent {}

describe('Directive: FavoriteIconDirective', () => {

    let fixture: ComponentFixture<any>;
    const expectedSolidStarList   = constants.classes.SOLID_STAR_STYLE_LIST;
    const expectedOutlineStarList = constants.classes.OUTLINE_STAR_STYLE_LIST;
    
    beforeEach(() => {
        const testModuleMetadata: TestModuleMetadata = {
            declarations: [FavoriteIconDirective, TestComponent]
        };
        fixture = TestBed.configureTestingModule(testModuleMetadata).createComponent(TestComponent);
        fixture.detectChanges();
    });

    afterEach(() => { fixture = null; });

    describe('when favorite icon is set to true', () => {

        let starElement = null;
        
        beforeEach(() => {
            const defaultTrueElementIndex = 0;
            // where did this function come from?
            starElement = getStarElement(fixture, defaultTrueElementIndex);
        });
        
    });

});
