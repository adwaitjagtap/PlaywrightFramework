import { expect, type Locator, type Page } from '@playwright/test';
require('dotenv').config();

export class webHelpPage {
    readonly page: Page;
    readonly title: Locator;


    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('[data-testid="nav-title"]');
    }

    // To-Do: action assertion in separate class with Text stored as separate params
    async assertTitle(){
        await expect(this.title).toHaveText('Help');
    }

}
