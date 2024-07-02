import { expect, type Locator, type Page} from '@playwright/test';

export class Details {  //class
    readonly page: Page;
    constructor(page: Page) {
        this.page = page;  //class variable
    }

    async openBrowser() { //method
        await this.page.goto('https://thinking-tester-contact-list.herokuapp.com/');
    }
    async SignUp() { //method
        //await expect(this.page.locator('/html/body/footer/img')).toBeVisible();
        await this.page.locator('#signup').click();
            await this.page.locator("#firstName").fill('khadeerun');
            await this.page.locator("#lastName").fill('shaik');
            await this.page.locator("#email").type('kshaik127@gmail.com');
            await this.page.locator("#password").type('admin123');
            await this.page.locator("[type='submit']").click();
    
    }

    async LogIn() { //method
        await this.page.getByPlaceholder('Email').type('khadeerunnisashaik169@gmail.com')
        await this.page.getByPlaceholder('Password').type('Admin123@')
        //await this.page.getByRole('link',{name: 'Submit'}).click();
        await this.page.locator('#submit').click();
    }

    async ContactList() {
        // Locate the table
        const table = await this.page.$('#myTable');
        if (!table) {
            console.error("Table not found!");
            return;
        }
    
        // Read table headers
        const headers = await table.$$eval('thead th', ths => ths.map(th => (th as HTMLElement).innerText));
        console.log('Headers:', headers);
    
        // Read table rows
        const rows = await table.$$('tbody tr');
        for (const row of rows) {
            const cells = await row.$$eval('td', tds => tds.map(td => (td as HTMLElement).innerText));
            console.log('Row:', cells);
        }
    
        // Verify table headers content
        await expect(this.page.locator('#myTable > thead')).toHaveText(['Name', 'Birthdate', 'Email', 'Phone', 'Address', 'City, State/Province, Postal Code', 'Country']);
    



    }
        
    async AddContact() {
    
    // Add a new contact
        //await expect(this.page.locator('text=add-contact')).toBeVisible();
        await this.page.locator('#add-contact').click();
    
        await expect(this.page.locator('#firstName')).toBeVisible();
        await this.page.fill('#firstName', 'Khadeerunnisa');
        
    
        await expect(this.page.locator('#lastName')).toBeVisible();
        await this.page.fill('#lastName', 'Shaik');
    
        await expect(this.page.locator('#birthdate')).toBeVisible();
        await this.page.fill('#birthdate', '2024-05-25');
    
        await expect(this.page.locator('#email')).toBeVisible();
        await this.page.fill('#email', 'khadeerunnisashaik226@gmail.com');
    
        await expect(this.page.locator('#phone')).toBeVisible();
        await this.page.fill('#phone', '06303457585');
    
        await expect(this.page.locator('#street1')).toBeVisible();
        await this.page.fill('#street1', 'Nehru Nagar, Kadapa, India ');

        await expect(this.page.locator('#street2')).toBeVisible();
        await this.page.fill('#street2', 'Chinna Chowk ');
    
        await expect(this.page.locator('#city')).toBeVisible();
        await this.page.fill('#city', 'Y.S.R.');
    
        await expect(this.page.locator('#stateProvince')).toBeVisible();
        await this.page.fill('#stateProvince', 'Andhra Pradesh');
    
        await expect(this.page.locator('#postalCode')).toBeVisible();
        await this.page.fill('#postalCode', '516002');
    
        await expect(this.page.locator('#country')).toBeVisible();
        await this.page.fill('#country', 'India');
    
        await expect(this.page.locator("[type='submit']")).toBeVisible();
        await this.page.click("[type='submit']");
    }
    
    async ContactListDetails() { //method
        //await this.page.getByTitle('#body > div > div').textContent();
       // await expect(this.page.locator('/html/body/div/header/h1').locator("h1", {hasText: "ContactList"}));
        //await expect(this.page.locator('#body > div > div')).toContainText(['Name', 'Birthdate', 'Email', 'Phone', 'Address', 'City, State/Province, Postal Code', 'Country']);
        //await expect(this.page.locator('#add-contact')).toBeEnabled();
        //await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(4)')).toContainText('khadeerunnisashaik169@gmail.com');
        //const tableRows = this.page.locator('#myTable > tbody');
        //await expect(tableRows).toHaveCount(2);
      //await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(2)')).toBeVisible();
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(2)')).toHaveText('Khadeerunnisa Shaik');

      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(3)')).toBeVisible();
      const locator =this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(3)');
      await expect(locator).toHaveText('2024-05-25');
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(4)')).toBeVisible();
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(4)')).toHaveText('khadeerunnisashaik226@gmail.com');
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(5)')).toBeVisible();
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(5)')).toHaveText('06303457585');
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(6)')).toBeVisible();
<<<<<<< HEAD
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(6)')).toHaveText('Nehru Nagar, Kadapa, India Chinna Chowk');
=======
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(6)')).toHaveText('Nehru Nagar, Kadapa, India');
>>>>>>> d7cf847fc7bd7123f79dc064a6d2671b183e91ff
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(7)')).toBeVisible();
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(7)')).toHaveText('Y.S.R. Andhra Pradesh 516002');
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(8)')).toBeVisible();
      await expect(this.page.locator('#myTable > tr:nth-child(3) > td:nth-child(8)')).toHaveText('India');
      await this.page.locator('#myTable > tr:nth-child(3)').click();
        
      }

    async ContactDetails() { //method
        //await expect(this.page.locator('body > div > header > h1').locator("h1", {hasText: "Contact Details"})).toBeVisible();
      await this.page.locator('//*[@id="myTable"]/tr[1]').click();
      
      //['Name', 'Birthdate', 'Email', 'Phone', 'Address', 'City, State/Province, Postal Code', 'Country']
      await expect(this.page.locator('#edit-contact')).toBeEnabled();
      await expect(this.page.locator('#delete')).toBeEnabled();
      await expect(this.page.locator('#return')).toBeEnabled();
      await expect(this.page.locator('label:has-text("First Name")')).toBeVisible();

      await expect(this.page.locator('#firstName')).toBeVisible();
      await expect(this.page.locator('label:has-text("Last Name")')).toBeVisible();
      //await expect(this.page.locator('label:has-text("LastName")')).toBeVisible();
      await expect(this.page.locator('#lastName')).toBeVisible();
      await expect(this.page.locator('label:has-text("Date of Birth:")')).toBeVisible();
      //await expect(this.page.getByLabel('birthdate')).toHaveAttribute('placeholder', 'Date of Birth:');
      await expect(this.page.locator('#birthdate')).toBeVisible();
      await expect(this.page.locator('label[for="email"]')).toHaveText('Email:');

      await expect(this.page.locator('#email')).toBeVisible();
      await expect(this.page.locator('label[for="phone"]')).toHaveText('Phone:');

      await expect(this.page.locator('#phone')).toBeVisible();
      await expect(this.page.locator('label[for="street1"]')).toHaveText('Street Address 1:');
      await expect(this.page.locator('#street1')).toBeVisible();
      await expect(this.page.locator('label[for="street2"]')).toHaveText('Street Address 2:');
      await expect(this.page.locator('#street2')).toBeVisible();
      await expect(this.page.locator('label[for="city"]')).toHaveText('City:');
      await expect(this.page.locator('#city')).toBeVisible();
      await expect(this.page.locator('label[for="stateProvince"]')).toHaveText(' State or Province:');
      await expect(this.page.locator('#stateProvince')).toBeVisible();
      await expect(this.page.locator('label[for="postalCode"]')).toHaveText(' Postal Code:');
      await expect(this.page.locator('#postalCode')).toBeVisible();
      await expect(this.page.locator('label[for="country"]')).toHaveText(' Country:');
      await expect(this.page.locator('#country')).toBeVisible();

     
      
      
    }

    async UpdatedContactDetails() { //method
        await expect(this.page.locator('#edit-contact')).toBeEnabled();
      //await expect(this.page.locator('#delete')).toBeEnabled();
      await expect(this.page.locator('#return')).toBeEnabled();
      await expect(this.page.locator('label:has-text("First Name")')).toBeVisible();

      await expect(this.page.locator('#firstName')).toBeVisible();
      await expect(this.page.locator('label:has-text("Last Name")')).toBeVisible();
      //await expect(this.page.locator('label:has-text("LastName")')).toBeVisible();
      await expect(this.page.locator('#lastName')).toBeVisible();
      await expect(this.page.locator('label:has-text("Date of Birth:")')).toBeVisible();
      //await expect(this.page.getByLabel('birthdate')).toHaveAttribute('placeholder', 'Date of Birth:');
      await expect(this.page.locator('#birthdate')).toBeVisible();
      await expect(this.page.locator('label[for="email"]')).toHaveText('Email:');

      await expect(this.page.locator('#email')).toBeVisible();
      await expect(this.page.locator('label[for="phone"]')).toHaveText('Phone:');

      await expect(this.page.locator('#phone')).toBeVisible();
      await expect(this.page.locator('label[for="street1"]')).toHaveText('Street Address 1:');
      await expect(this.page.locator('#street1')).toBeVisible();
      await expect(this.page.locator('label[for="street2"]')).toHaveText('Street Address 2:');
      await expect(this.page.locator('#street2')).toBeVisible();
      await expect(this.page.locator('label[for="city"]')).toHaveText('City:');
      await expect(this.page.locator('#city')).toBeVisible();
      await expect(this.page.locator('label[for="stateProvince"]')).toHaveText(' State or Province:');
      await expect(this.page.locator('#stateProvince')).toBeVisible();
      await expect(this.page.locator('label[for="postalCode"]')).toHaveText(' Postal Code:');
      await expect(this.page.locator('#postalCode')).toBeVisible();
      await expect(this.page.locator('label[for="country"]')).toHaveText(' Country:');
      await expect(this.page.locator('#country')).toBeVisible();
    }
    async EditContact() { //method
        //await expect(this.page.locator('Edit Contact').locator("h1", {hasText: "Edit Contact"})).toBeVisible();
        await expect(this.page.locator('#edit-contact')).toBeEditable();
        await expect(this.page.locator('#edit-contact')).toBeEnabled();
      await expect(this.page.locator('#delete')).toBeEnabled();
      await expect(this.page.locator('#return')).toBeEnabled();
      //await this.page.locator('#contactTableBodyRow').click();
      await this.page.locator('#edit-contact').click();
 

     await expect(this.page.locator('label:has-text("First Name")')).toBeVisible();
     await this.page.type('#firstName', 'Khadeerunnisa')
     await expect(this.page.locator('#firstName')).toBeVisible();
     await expect(this.page.locator('label:has-text("Last Name")')).toBeVisible();
     await this.page.type('#lastName', 'Shaik')
     //await expect(this.page.locator('label:has-text("LastName")')).toBeVisible();
     await expect(this.page.locator('#lastName')).toBeVisible();
     await expect(this.page.locator('label:has-text("Date of Birth:")')).toBeVisible();
     await this.page.type('#birthdate', '2024-05-25')
     //await expect(this.page.getByLabel('birthdate')).toHaveAttribute('placeholder', 'Date of Birth:');
     await expect(this.page.locator('#birthdate')).toBeVisible();

     await expect(this.page.locator('label[for="email"]')).toHaveText('Email:');
     await this.page.type('#email', 'khadeerunnisashaik226@gmail.com')

     await expect(this.page.locator('#email')).toBeVisible();
     await expect(this.page.locator('label[for="phone"]')).toHaveText('Phone:');
     await this.page.type('#phone', '06303457585')

     await expect(this.page.locator('#phone')).toBeVisible();
     await expect(this.page.locator('label[for="street1"]')).toHaveText('Street Address 1:');
     await this.page.type('#street1', 'Nehru Nagar, Kadapa, India')
     await expect(this.page.locator('#street1')).toBeVisible();

     await expect(this.page.locator('label[for="street2"]')).toHaveText('Street Address 2:');
     await expect(this.page.locator('#street2')).toBeVisible();
      //await this.page.locator('#street2').fill('Chinna Chowk');

      await expect(this.page.locator('label[for="city"]')).toHaveText(' City:');
     await expect(this.page.locator('#city')).toBeVisible();

     await expect(this.page.locator('label[for="stateProvince"]')).toHaveText(' State or Province:');
     await expect(this.page.locator('#stateProvince')).toBeVisible();

     await expect(this.page.locator('label[for="postalCode"]')).toHaveText(' Postal Code:');
     const input = this.page.locator('input[id="postalCode"]');
     //const input = this.page.locator('516002');
     //input.fill('516001')
     await input.fill('Y.S.R. Andhra Pradesh 516002');
     const new_text = input.getAttribute('Y.S.R. Andhra Pradesh 516002')
     await expect(this.page.locator('#postalCode')).toBeVisible();
     

     await expect(this.page.locator('label[for="country"]')).toHaveText(' Country:');
     await expect(this.page.locator('#country')).toBeVisible();
     
      await this.page.locator("[type='submit']").click();

    }

    async Delete() { //method
        //await this.page.locator('#contactTableBodyRow').click();
        await this.page.locator('#delete').click();
        this.page.on('dialog', async (dialog) => {
            expect(dialog.type()).toBe('confirm');
            expect(dialog.message()).toContain('Are you sure you want to delete this contact?');
            await dialog.accept();
            
        })
    }
    /*async Return() { //method
        await this.page.locator('#logout').click();
    }*/

    async await() { //method
        await this.page.waitForTimeout(5000);
    }

    async LogOut() { //method
        await this.page.locator('#logout').click();
    }

  






};