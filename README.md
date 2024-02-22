Amazon Website Automated UI Testing

This Cypress framework aims to test key functionalities of the Amazon website using automated scripts built with the Page Object Model (POM) approach. The focus is on efficiency, coverage, and accuracy while ensuring code maintainability and readability.

Key functionalities tested:

    User Login: Valid and invalid login attempts, edge cases like empty fields or special characters.
    Search Functionality: Searching with various keywords, validating results, response time, and no-result scenarios.
    Adding Products to Cart: Selecting and adding products, updating quantities, handling sold-out items, and removing items.
    Checkout Process: Scripting the entire checkout flow, testing different addresses and payment methods, and validating order confirmation.

Requirements:

    Use Cypress test automation framework .
    Implement the Page Object Model for better code organization.
    Document test cases, POM structure, and rationale.


Detailed steps on cloning the  project and running it locally, and generating reports:

Prerequisites:

    Git: Ensure you have Git installed on your system. Download it from https://git-scm.com/ if needed.
    Node.js and npm: Download and install Node.js from https://nodejs.org/. This will also install npm, the Node Package Manager.

Steps:

Clone the repository: git clone https://github.com/sparky0268/AmazonUIAutomationCypress.git
Navigate into the cloned directory: cd AmazonUIAutomationCypress
Install dependencies: npm install
Run the Cypress test runner:npx cypress open
Run tests and generate reports:
    Run all tests: Click the "Run all specs" button in the Cypress Test Runner.
    Run specific tests: Select individual test files or groups from the test runner tree.
    Generate reports: Cypress automatically generates reports in various formats (HTML, JSON, Mochawesome) after each test run. You can find them in the cypress/reports directory.
