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
    
});
