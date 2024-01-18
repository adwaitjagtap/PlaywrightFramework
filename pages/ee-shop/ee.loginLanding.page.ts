import { expect, type Locator, type Page } from '@playwright/test';
require('dotenv').config();

export class webLoginLandingPage {
    readonly page: Page;
    readonly greetingName: Locator;
    readonly nextButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.greetingName = page.locator('[data-testid="broadband_only_greet_heading"]');
        this.nextButton = page.locator('[id="submitButton"]');
    }


    async assertGreetingName(name : string){
        // await this.page.waitForTimeout(5000); // To-Do: need to add dynamic wait
        // await this.page.waitForSelector("data-testid=broadband_only_greet_heading", {state: "visible"});
        await expect(this.greetingName).toBeVisible();
        await expect(this.greetingName).toHaveText('Hey '+name+',');
    }

    async clickOnOption(optionName : string){
        await this.page.getByRole('link', { name: optionName }).click();
    }

}
