# SmartReporterTest

🚀 Features :

Playwright + JavaScript based end-to-end testing

🛠️ Installation
Initialize the repository:
create a folder and open gitbash 
git init 

Clone the repository:
git clone < Repo Link >

Install playwright:
npm init playwright@latest

▶️ Running Tests

Run a specific test file:
npx playwright test tests/test.spec.js

Run all tests:
npx playwright test

Run tests using the runner file:
npx playwright test runner.spec.js

Use Codegen for Auto Test Generation
npx playwright codegen

⚙️ GitHub Actions CI

This framework is integrated with GitHub Actions.
The workflow file main.yml is located in .github/workflows/.

It:
Installs dependencies
Runs Playwright tests
Generates Smart reports
To trigger the workflow, click on run workflow in Actions.
main.yml can be customized for parallel runs, artifacts, or notifications.

# To install smart reporter  
npm install playwright-smart-reporter  

# To initialize in playwright.config.js file    
reporter: [   
    ['list'],    
    ['playwright-smart-reporter', {   
      outputFolder: 'test-results',    
      filename: 'report.html',     
      open: 'never'    
    }]    
  ],     

## Github Pages Implementation   
  
To deploy reports on github pages.

In yml file permissions--> contents --> as write 

Go to Repo settings --> Actions --> General --> Allow all actions and reusable workflows 

Scroll down to Workflow permissions --> Read and write permissions   

Commit something and wait for the pages build and deployment to trigger    

Once done check in Code if gh-pages is available apart from main branch   

Go to settings --> Pages --> Source --> Branch --> Select gh-pages instead of main and save  

To share reports to mail or slack go to settings --> Secrets and Variables --> Actions --> new repository secret   

To share reports on mail need to generate app password and add as a secret. Mail password will not work.   

Reports can be shared to accounts which are added as a secret variable. Multiple mail id can be added as the reciever but only one sender is allowed.   


