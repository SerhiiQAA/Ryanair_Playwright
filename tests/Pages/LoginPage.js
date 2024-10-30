import { expect } from '@playwright/test';

class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://www.ryanair.com/gb/en');
    await this.page.getByRole('button', { name: 'No, thanks' }).click();
    await this.page.getByRole('button', { name: 'Log in' }).click();
  }

  async login(email, password) {
    await this.page.frameLocator('iframe').locator('input[placeholder="email@email.com"]').fill(email);
    await this.page.frameLocator('iframe').locator('input[placeholder="Password"]').fill(password);
    await this.page.frameLocator('iframe').locator('button.ry-button--gradient-yellow').click();
  }

  async checkErrorMessages() {
    await expect(this.page.frameLocator('iframe').locator('text="Email address is required"')).toBeVisible();
    await expect(this.page.frameLocator('iframe').locator('text="Password is required"')).toBeVisible();
  }

  async checkInvalidCredentials() {
    await expect(this.page.frameLocator('iframe').locator('text=Incorrect email address or')).toContainText('Incorrect email address or password');
  }

  async checkLoginSuccess() {
    await expect(this.page.locator('logged-in').getByRole('button')).toBeVisible();
  }
}

export default LoginPage;
