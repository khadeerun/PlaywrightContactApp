import { test as fixture } from '@playwright/test'
import SignUp from '../PlaywrightContactApp/pageObject/playwrighttest'
import LogIn from '../PlaywrightContactApp/pageObject/playwrighttest'
import logOut from '../PlaywrightContactApp/pageObject/playwrighttest'
import AddContact from '../PlaywrightContactApp/pageObject/playwrighttest'
import EditContact from '../PlaywrightContactApp/pageObject/playwrighttest'
import ContactList from '../PlaywrightContactApp/pageObject/playwrighttest'
import ContactDetails from '../PlaywrightContactApp/pageObject/playwrighttest'
import ContactListDetails from '../PlaywrightContactApp/pageObject/playwrighttest'
import Delete from '../PlaywrightContactApp/pageObject/playwrighttest'
import { config } from 'process'

const test = config.js({
	SignUp: async ({ page }, use) => {
		await use(new SignUp(page))
	},
	LogIn: async ({ page }, use) => {
		await use(new LogIn(page))
	},
	
    logOut: async ({ page }, use) => {
		await use(new logOut(page))
	},
    AddContact: async ({ page }, use) => {
		await use(new AddContact(page))
	},
    EditContact: async ({ page }, use) => {
		await use(new EditContact(page))
	},
    ContactList: async ({ page }, use) => {
		await use(new ContactList(page))
	},
    ContactDetails: async ({ page }, use) => {
		await use(new ContactDetails(page))
	},
    ContactListDetails: async ({ page }, use) => {
		await use(new ContactListDetails(page))
	},
	Delete: async ({ page }, use) => {
		await use(new Delete(page))
	}
})
export default test
