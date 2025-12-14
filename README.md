# Sainsbury Playwright Automation Assignment - Ajaybabu Bellamkonda
## Author

## Ajay Babu
Test Manager / Automation Engineer
Experience: ~10 years in Software Testing

---

## Project Overview

This project is an **end-to-end automation framework** built using **Playwright with TypeScript**.
To demonstrates real-world automation skills by validating the **Sainsbury’s Grocery Login journey** using modern best practices.

The framework is designed to be:

* Stable
* Maintainable
* Secure
---

## Tech Stack

**Playwright**
**TypeScript**
**Node.js**
**VS Code**
**dotenv** (for secure credentials)
---

## Project Structure

```
Sainsburyassignment/
│── pages/
│   ├── Sainsbury_HomePage.ts
│   └── Sainsbury_LoginPage.ts
│
│── tests/
│   └── AssignmentofAjay.spec.ts (Please note first.spec and LoiginSB for trail run purpose)
│
│── playwright.config.ts
│── package.json
│── .env
│── .gitignore
│── README.md
```

---

## Framework Design

The framework follows the **Page Object Model (POM)** design pattern:
 **HomePage**

  * Navigation
  * Cookie handling
  * Login entry point

 **LoginPage**

  * Credential input
  * Login action
  * Post-login validation

---

## 🔐 Secure Credential Management

Sensitive data is handled using environment variables.

### `.env` file (not committed)

```env
SB_USERNAME=your_email_here
SB_PASSWORD=your_password_here
```

The `.env` file is excluded via `.gitignore`.

---

## How to Run Tests

### 1. Install dependencies

```bash
npm install
```

### 2. Install Playwright browsers

```bash
npx playwright install
```

### 3️. Execute tests

```bash
npx playwright test
```

---

## Test Reporting & Debugging

The framework is configured to capture artifacts for **both passed and failed tests**.

### Enabled Features

*  Screenshots – on pass & fail
*  Video recording – on pass & fail
*  Playwright Trace – on pass & fail
*  HTML Report

### View HTML Report

```bash
npx playwright show-report
```

---

## Sample Test Scenario

* Navigate to Sainsbury’s website
* Handle cookie consent dynamically
* Navigate to Grocery Login
* Login using secure credentials
* Validate successful login via MyAccount page

---

## Notes on UI Stability

Certain UI elements (hover-based menus and cookie overlays) can be flaky.

To ensure stability and reliability:

* Direct navigation is used for the login entry point
* Cookie overlays are explicitly handled

This approach reflects **real-world enterprise automation practices**.

---

Thank you for reviewing this assignment.