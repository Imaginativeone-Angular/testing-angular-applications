/* TODO: This is a test. */

import { ContactsComponent } from './contacts.component';
import { Contact } from './shared/models';

describe('ContactsComponent Tests', () => {

  let contactsComponent: ContactsComponent = null;
  console.log('contactsComponent', contactsComponent);

  // beforeEach() operates BEFORE this code
  // describe('contactsComponent', () => {
  //   it('should be null - but this code operates BEFORE the beforeEach() function', () => {
  //       // expect(contactsComponent).toBeNull();
  //       expect(contactsComponent).not.toBeNull();
  //   });
  // });

  beforeEach(() => {
    contactsComponent = new ContactsComponent();
    console.log('contactsComponent', contactsComponent);
  });

  // 1
  it('should set instance correctly', () => {
    expect(contactsComponent).not.toBeNull();
  });

  // 2
  it('should be no contacts if there is no data', () => {
    expect(contactsComponent.contacts.length).toBe(0);
  });

  // 3
  it('should be contacts if there is data', () => {
    const newContact: Contact = {
      id: 1,
      name: 'Jason Pipemaker'
    };
    const contactsList: Array<Contact> = [newContact];
    contactsComponent.contacts = contactsList;

    expect(contactsComponent.contacts.length).toBe(1);
  });
});
