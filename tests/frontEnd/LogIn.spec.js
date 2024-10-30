import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage.js';

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
});

test('testInvalidEmptyFields', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('', '');
  await loginPage.checkErrorMessages();
});

test('testInvalidAllData', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('invalidGmail', 'InValidPassword');
  await loginPage.checkInvalidCredentials();
});

test('testInvalidGmail', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('invalidGmail', '1Ryanair@');
  await loginPage.checkInvalidCredentials();
});

test('testInvalidPassword', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('leonierox@pickuplanet.com', 'InValidPassword');
  await loginPage.checkInvalidCredentials();
});

test('testValidData', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login('leonierox@pickuplanet.com', '1Ryanair@');
  await loginPage.checkLoginSuccess();
});












// import { test, expect } from '@playwright/test';

// test.beforeEach(async ({ page }) => {
//   await page.goto('https://www.ryanair.com/gb/en');
//   await page.getByRole('button', { name: 'No, thanks' }).click();
//   await page.getByRole('button', { name: 'Log in' }).click();
// });

// test('testInvalidEmptyFields', async ({ page }) => {
//   await page.locator('iframe').contentFrame().getByRole('button', { name: 'Log in' }).click();

//   await expect(page.frameLocator('iframe').locator('text="Email address is required"')).toBeVisible();
//   await expect(page.frameLocator('iframe').locator('text="Password is required"')).toBeVisible();
// });

// test('testInvalidAllData', async ({ page }) => {
//   await page.locator('iframe').contentFrame().getByPlaceholder('email@email.com').fill('invalidGmail');
//   await page.locator('iframe').contentFrame().getByPlaceholder('Password').fill('InValidPassword');
//   await page.locator('iframe').contentFrame().getByRole('button', { name: 'Log in' }).click();

//   await expect(page.locator('iframe').contentFrame().locator('text=Incorrect email address or')).toContainText('Incorrect email address or password');
// });

// test('testInvalidGmail', async ({ page }) => {
//   await page.locator('iframe').contentFrame().getByPlaceholder('email@email.com').fill('invalidGmail');
//   await page.locator('iframe').contentFrame().getByPlaceholder('Password').fill('1Ryanair@');
//   await page.locator('iframe').contentFrame().getByRole('button', { name: 'Log in' }).click();

//   await expect(page.locator('iframe').contentFrame().locator('text=Incorrect email address or')).toContainText('Incorrect email address or password');
// });

// test('testInvalidPassword', async ({ page }) => {
//   await page.locator('iframe').contentFrame().getByPlaceholder('email@email.com').fill('leonierox@pickuplanet.com');

//   await page.locator('iframe').contentFrame().getByPlaceholder('Password').fill('InValidPassword');
//   await page.locator('iframe').contentFrame().getByRole('button', { name: 'Log in' }).click();

//   await expect(page.locator('iframe').contentFrame().locator('text=Incorrect email address or')).toContainText('Incorrect email address or password');
// });

// test('testValidData', async ({ page }) => {
//   await page.locator('iframe').contentFrame().getByPlaceholder('email@email.com').fill('leonierox@pickuplanet.com');

//   await page.locator('iframe').contentFrame().getByPlaceholder('Password').fill('1Ryanair@');
//   await page.locator('iframe').contentFrame().getByRole('button', { name: 'Log in' }).click();

// await page.locator('iframe').contentFrame().getByRole('button', { name: 'Log in' })

// await expect(page.locator('logged-in').getByRole('button')).toBeVisible();
// // await page.pause()
// });