import { test, expect } from '@playwright/test';
import { webLoginInitialPage } from "../../pages/ee-shop/ee.loginInitial.page";
import { webLoginLandingPage } from "../../pages/ee-shop/ee.loginLanding.page";
import { webLoginAuthPage } from "../../pages/ee-shop/ee.loginAuth.page";

const greetingName = 'Adwait';
const optionHome = 'Home'
const optionShop = 'Shop'
const optionHelp = 'Help'
const urlHome = 'https://ee.co.uk/exp/home'
const urlShop = 'https://ee.co.uk/exp/shop'
const urlHelp = 'https://ee.co.uk/help'


test.describe('@ee - Login successfully', () => {

  test.beforeEach(async ({page}) => {
    //login using landing page
    const eeLoginInitialPage = new webLoginInitialPage(page);

    await eeLoginInitialPage.gotoUrl();
    await eeLoginInitialPage.acceptCookies();
    await eeLoginInitialPage.enter_userName();
    await eeLoginInitialPage.click_nextButton();
    await page.waitForURL('https://auth.ee.co.uk/**');
  });

  test.afterEach(async ({page}) => {
    // await page.close();
  });

  test('login on Auth page & navigate to Help tab', async ({page}) => {
    //login using Auth page
    const eeLoginAuthPage = new webLoginAuthPage(page);
    await eeLoginAuthPage.enter_userName();
    await eeLoginAuthPage.click_nextButton();
    await eeLoginAuthPage.enter_userPassword();
    await eeLoginAuthPage.click_nextButton();
    await page.waitForURL('https://ee.co.uk/exp/home');

    const eeLoginLandingPage = new webLoginLandingPage(page);
    await eeLoginLandingPage.assertGreetingName(greetingName);
    await eeLoginLandingPage.clickOnOption(optionHome);
    await expect(page).toHaveURL(urlHome);
    await eeLoginLandingPage.clickOnOption(optionShop);
    await expect(page).toHaveURL(urlShop);
    await eeLoginLandingPage.clickOnOption(optionHelp);
    await expect(page).toHaveURL(urlHelp);
  });

});
