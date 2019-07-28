import { DebugElement } from '@angular/core';
// You can use DebugElement to inspect an element during testing.
// You can think of it as the native HTMLElement with additional methods and properties
//   that can be useful for debugging elements

import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
// ComponentFixture | You can find this class in the @angular/core module.
// You can use it to create a fixture that you then can use for debugging.

// fakeAsync | Using fakeAsync ensures that all synchronous tasks are completed before executing the assertions

// TestBed | You use this class to set up and configure your tests
// - configureTestingModule
// - overrideModule
// - createComponent
// - https://angular.io/api/core/testing/TestBed

// tick | You can use tick to simulate the passage of time.
// It accepts one parameter, which is the number of milliseconds to move time forward.
// If you don't provide a parameter, tick defaults to zero milliseconds.

import { By } from '@angular/platform-browser';
// By | is a class included in the @angular/platform-browser module, that you can use to select DOM elements
// For example, let's say you want to select an element with the CSS class of: highlight-row;
// The element may look like the following HTML element: <i class="highlight-row">
// You would use the css method to retrieve that element, using a css selector.
// The resulting code would look like this: By.css('.highlight-row')
// Note that you use a period to select the elements by CSS class name.
// In total, By provides three methods: all, css, directive

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// NoopAnimationsModule | You use the NoopAnimationsModule class to mock animations, 
// which allows tests to run quickly without waiting for the animations to finish.

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
// BrowserDynamicTestingModule | is a module that helps bootstrap the browser to be used for testing.

import { RouterTestingModule } from '@angular/router/testing';
// As the name implies, you can use RouterTestingModule to set up routing for testing.
// We include it with the tests for this component because some of the actions will involve changing routes.

import { FormsModule } from '@angular/forms';
// You only need to import one Angular nontesting module FormsModule.
// You'll need this module because the ContactsEdit uses it for some Angular form controls.

import { Contact, ContactService, FavoriteIconDirective,
         InvalidEmailModalComponent, InvalidPhoneNumberModalComponent } from '../shared';

import { AppMaterialModule } from '../../app.material.module';
import { ContactEditComponent } from './contact-edit.component';

// import '../../../material-app-theme.scss'; // There's a problem with finding this file.

describe('ContactEditComponent', () => {

    let fixture: ComponentFixture<ContactEditComponent>;
    // Stores an instance of the ComponentFixture, which contains methods that help you debug and test a component.

    let component: ContactEditComponent;
    // Stores an instance of the ContactEditComponent

    let rootElement: DebugElement;
    // Stores the DebugElement for your component, which is how you'll access its children.

    const contactServiceStub = {

        contact: { 
            id: 1, 
            name: 'janet'
        },

        // currently altered contact object
        save: async function(contact: Contact) {
            component.contact = contact;
        },

        // get the contact object from previous alterations
        getContact: async function() {
            component.contact = this.contact;
            return this.contact;
        },

        // currently altered contact object, before save
        updateContact: async function(contact: Contact) {
            component.contact = contact;
        },

    };
    
    /**
     * Two beforeEach()s go next.
     */
    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [
                ContactEditComponent, 
                FavoriteIconDirective, 
                InvalidEmailModalComponent, 
                InvalidPhoneNumberModalComponent
            ],
            imports: [
                AppMaterialModule, 
                FormsModule, 
                NoopAnimationsModule, 
                RouterTestingModule],
            providers: [{ 
                provide: ContactService, useValue: contactServiceStub }]
        });

        TestBed.overrideModule(BrowserDynamicTestingModule, {
            set: {
                // These components will be lazily-loaded
                entryComponents: [InvalidEmailModalComponent, InvalidPhoneNumberModalComponent]
            }
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ContactEditComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        rootElement = fixture.debugElement;
    });

    // The ContactEditComponent class has several more private helper methods, but you don't need those because testing the
    // component's public API will exercise them.

    // In general, I shouldn't test private methods; if a method is important enough to be tested, I should consider making
    // it public.

    // Testing the saveContact method
    describe('saveContact() test', () => {
        it('should display contact name after contact set', fakeAsync(() => {
            const contact = {
                id: 1,
                name: 'lorace'
            };
            component.isLoading = false; // Sets isLoading to false to hide the progress bar
            component.saveContact(contact);
            fixture.detectChanges();
            const nameInput = rootElement.query(By.css('.contact-name'));
            tick();
            expect(nameInput.nativeElement.value).toBe('lorace');
        }));
    });
});
