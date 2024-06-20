**Playwright Test Runner With JavaScript**

This web application is a contact list application with a web UI component and a REST API component. 
It’s excellent as a web application because it allows us to practice more than just UI testing.

-  **URL:** https://thinking-tester-contact-list.herokuapp.com/
*   **Framework**: This App is built using Node.js with a frontend framework
+  **OS:** Windows
- **IDE:** Visual Studio Code

- ## Scenarios

```bash
Scenario 1: Verify that a user is successfully signedUp into the application.

Scenario Description: Verify that a user is able to click on add contact Button and fill the details.
TestName: example.spec.js

Steps:
1. Navigate to the SignUp page.
2. Enter the details of the user (FirstName, LastName, username and password).
3. Click on the Submit button.

Expected Outcome: The user should be logged in and redirected to the application landing page.

```
```bash
Scenario 2: Verify that a user is successfully loggedIn and able to add the contact in the add contact page.

Description: Verify that a user is able to click on add contact Button and fill the details.

Steps:
1. Navigate to the Add Contact Button.
2. Enter the details of the Contact
   - FirstName,
   - LastName,
   - BirthDate
   - Email
   - Phone
   - Street1 Address
   - City, State Province, Postal Code
   - Country
4. Click on the Submit button.

Expected Outcome: The user should have added the contact details and listed it in landing page.

```

```bash
Scenario 3: Verify that a user is successful to view the ContactListDetails in the application.

Scenario Description: Verify that a user is able to Login with the created username and password and click on login Button and view the contact list Details.
TestName: example.spec.js

Steps:
1. Navigate to the Login page.
2. Enter the details of the user (username and password).
3. Click on the Submit button.
4. The user directed to landing page.
5. The user is able to view the list of contact details.
6. click on the contact details
7. Navigate to the contact details.

Expected Outcome: The user should be logged in and redirected to the application landing page.

```

```bash
Scenario 4: Verify that a user is successful to view and edit/Update the contact details in the application.

Scenario Description: Verify that a user is able to Login with the created username and password and click on contact details and view the contact list Details to edit or update if any on the editing page.
TestName: example.spec.js

Steps:
1. Navigate to the Login page.
2. Enter the details of the user (username and password).
3. Click on the Submit button.
4. Click on the contact table.
5. Navigate to the editing page and check the details.
6. Click on Edit Contact button.
7. Update the contact details and click on submit.



Expected Outcome: The user updated the contact details and able to view the new contact details.

```

```bash
Scenario 5: Verify that the a user is successfully deleted the any of the Contact Details in the application.

Scenario Description: Verify that a user is able to Login with the created username and password and able to delete the contact details.
TestName: example.spec.js

Steps:
1. Navigate to the Login page.
2. Enter the details of the user (username and password).
3. Click on the Submit button.
4. Click on the contact details table.
5. Navigate to the contact details page.
6. Click on delete button.
7. click on the dialog button confirming for deletion.

Expected Outcome: The user should be logged in and redirected to the application landing page.

```

 #### Installation

Install the dependencies and devDependencies to run the test.

- Clone (OR) Download this repo as zip folder on to your local machine
- Navigate to project's directory on terminal and run the following commands:

Clone the repository

```bash
git clone https://github.com/khadeerun/PlaywrightContactApp/tree/main/tests
```

Install dependencies

```bash
npm install
npx playwright install
```

#### Run application

Run tests in Parallel chrome

```bash
npm run test:chrome - For tests only on chrome browser
```

Run tests in Parallel firefox

```bash
npm run test:firefox - For tests only on firefox browser
```

Run tests in Parallel safari

```bash
npm run test:safari - For tests only on safari browser
```

Run tests in Parallel edge

```bash
npm run test:edge - For tests only on edge browser
```

Run tests in Parallel on all browsers (chrome, safari, edge and firefox)

```bash
npm run test  - For tests only on all browsers
```

#### Playwright Test Report 

```bash
Html-test-report :
npm run test:chrome (OR)  npm run test:edge (OR) npm run html-report
```

PS D:\PlaywrightContactApp> npx playwright test
```bash
**Overall Results**:

Running 5 tests using 4 workers
[chromium] › example.spec.js:7:5 › To Group › SignUp Page
Table not found!
  5 passed (58.5s)

To open last HTML report run:

  npx playwright show-report

PS D:\PlaywrightContactApp> 


```

![show-report](https://github.com/khadeerun/PlaywrightContactApp/assets/110010732/492d8128-7556-4682-90b7-9dd231d8566e)



