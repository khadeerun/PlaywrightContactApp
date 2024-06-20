**Playwright Test Runner With JavaScript**

This web application is a contact list application with a web UI component and a REST API component. 
It’s excellent as a web application because it allows us to practice more than just UI testing.

-  **URL:** https://thinking-tester-contact-list.herokuapp.com/
*   **Framework**: This App is built using Node.js with a frontend framework (if known)
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
### Scenario 2: Add Contact

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

Expected Outcome: The user should be logged in and redirected to the application landing page.

```

```bash
Scenario 3: Verify that a user is successful to view the ContactListDetails in the application.

Scenario Description: Verify that a user is able to Login with the created username and password and click on login Button and view the contact list Details.
TestName: example.spec.js

Steps:
1. Navigate to the Login page.
2. Enter the details of the user (username and password).
3. Click on the Submit button.

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


