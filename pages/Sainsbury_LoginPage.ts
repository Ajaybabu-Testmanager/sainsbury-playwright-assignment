import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  emailInput = '//input[@id="username"]'; 
  passwordInput = '//input[@id="password"]';
  signInBtn = '//button[@data-testid="log-in"]';

  // async login(email: string, password: string) {
  //   await this.page.fill(this.emailInput, "perSainsbury@1ajaybabu@gmail.com");
  //   await this.page.fill(this.passwordInput, "Sainsbury@1");
  //   await this.page.click(this.signInBtn);
  // }
  async login(email: string, password: string) {
  await this.page.fill(this.emailInput, email);
  await this.page.fill(this.passwordInput, password);
  await this.page.click(this.signInBtn);
 }

 async verifyLoginSuccess() {
  await expect(this.page).toHaveURL(/MyAccount/);
}

}
