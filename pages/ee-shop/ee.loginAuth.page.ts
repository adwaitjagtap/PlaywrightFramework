import { expect, type Locator, type Page } from '@playwright/test';
require('dotenv').config();

export class webLoginAuthPage {
    readonly page: Page;
    readonly userName: Locator;
    readonly userPassword: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('[id="signInName"]');
        this.nextButton = page.locator('[id="next"]');
        this.userPassword = page.locator('[id="password"]');
    }


    async enter_userName(){
        await this.userName.fill(`${process.env.EE_USERNAME}`);
    }

    async enter_userPassword(){
        await this.userPassword.fill(`${process.env.EE_PASSWORD}`);
    }

    // using keyboard
    async click_nextButton() {
        await this.page.keyboard.press('Tab');
        await this.page.keyboard.press('Enter');
    }

}
