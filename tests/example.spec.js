import { test } from '@playwright/test';
const { Details } = require('../pageObject/playwrighttest.ts');

test.describe.serial('ContactApptestStarted', () => {
test('SignUp Page', async ({ page }) => {
const obj = new Details(page);
await obj.openBrowser();
await obj.SignUp();
await obj.page.waitForTimeout(5000);
await obj.page.pause();
});

test('Add Contact Page', async ({ page }) => {
  const obj = new Details(page);
  
  await obj.openBrowser();
  await obj.LogIn();
  await obj.AddContact();
  await obj.page.waitForTimeout(5000);
  await obj.ContactDetails();
  await obj.page.pause();
  });

 /* test('ContactListDetails', async ({ page }) => {
    const obj = new Details(page);
   await obj.openBrowser();
   await obj.LogIn();
   await obj.page.waitForTimeout(5000);
   await obj.ContactListDetails();
   await obj.page.waitForTimeout(5000);
   await obj.page.pause();
  });*/

test('EditContact', async ({ page }) => {
  const obj = new Details(page);
 

 await obj.openBrowser();
 await obj.LogIn();
 await obj.ContactDetails();
 await obj.page.waitForTimeout(5000);
 await obj.EditContact();
 
 await obj.page.pause();
});

 


test('Delete', async ({ page }) => {
  const obj = new Details(page);
 await obj.openBrowser();
 
 await obj.LogIn();
 await obj.page.waitForTimeout(5000);
 await obj.ContactDetails();
 await obj.page.waitForTimeout(5000);
 await obj.Delete();

 await obj.page.pause();
});

});







