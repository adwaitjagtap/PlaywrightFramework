import { expect, type Locator, type Page } from '@playwright/test';
require('dotenv').config();

export class webLoginInitialPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('[id="username"]');
        this.nextButton = page.locator('[id="submitButton"]');
    }

    async gotoUrl(){
        console.log('Navigating to URL:', process.env.EE_BASE_URL);
        await this.page.goto(`${process.env.EE_BASE_URL}`)
    }

    async acceptCookies(){
        // const context = await browser.newContext();
          await this.page.frameLocator('iframe[name="trustarc_cm"]').getByRole('button', { name: 'Accept all cookies' }).click();
    }

    async enter_userName(){
        await this.userName.fill(`${process.env.EE_USERNAME}`);
    }

    // using keyboard
    async click_nextButton() {
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Enter');
    }


}
