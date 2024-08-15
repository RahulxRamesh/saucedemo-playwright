const { test, expect } = require('@playwright/test');
const loginPage = require('../pages/loginPage');

test.describe('SauceDemo - Login Page', () => {

  let LoginPage;

    test.beforeEach(async({page}) => {
        LoginPage = new loginPage(page);
        await page.goto('https://www.saucedemo.com/');
    });

    test('successful login to saucedemo', async ({ page }) => {
      await LoginPage.login('standard_user', 'secret_sauce')
      //some check on the homepage to assert successful login
    });

    test('login failure to saucedemo - password failure', async ({ page }) => {
      await LoginPage.login('standard_user', 'public_sauce');
      await expect(page.locator('[data-test="error"]')).toContainText("Epic sadface: Username and password do not match any user in this service");   
    });

    test('login failure to saucedemo - username failure', async ({ page }) => {
      await LoginPage.login('apple', 'secret_sauce');
      await expect(page.locator('[data-test="error"]')).toContainText("Epic sadface: Username and password do not match any user in this service");   
    });

    //empty password field
    test('login failure to saucedemo - empty password failure', async ({ page }) => {
      await LoginPage.login('standard_user', '');
      await expect(page.locator('[data-test="error"]')).toContainText("Epic sadface: Password is required");   
    });

    //empty username field
    test('login failure to saucedemo - empty username failure', async ({ page }) => {
      await LoginPage.login('', 'public_sauce');
      await expect(page.locator('[data-test="error"]')).toContainText("Epic sadface: Username is required");   
    });

});
