import { ContactsComponent } from '../contacts/contacts.component';
import { Contact } from '../contacts/shared/models';

describe('ContactsComponent Tests', () => {

    let ContactsComponent: ContactsComponent = null;

    it('Null ContactsComponent Instance', () => {
        expect(ContactsComponent).toBe(null);
    })

    it('Should be a basic testing shell', () => {
        expect(true).toBe(true);
    });

});
