import { DebugElement } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

// TestBed | You use this class to set up and configure your tests
// - configureTestingModule
// - overrideModule
// - createComponent
// - https://angular.io/api/core/testing/TestBed

// fakeAsync | Using fakeAsync ensures that all synchronous tasks are completed before executing the assertions

import { By } from '@angular/platform-browser';
// By | is a class included in the @angular/platform-browser module, that you can use to select DOM elements
// For example, let's say you want to select an element with the CSS class of: highlight-row;
// The element may look like the following HTML element: <i class="highlight-row">
// You would use the css method to retrieve that element, using a css selector.
// The resulting code would look like this: By.css('.highlight-row')
// Note that you use a period to select the elements by CSS class name.
// In total, By provides three methods: all, css, directive

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
