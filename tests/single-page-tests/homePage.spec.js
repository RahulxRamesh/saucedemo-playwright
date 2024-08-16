const { test, expect } = require('@playwright/test');
const loginPage = require('../../pages/loginPage');
const homePage = require('../../pages/homePage');

test.describe('SauceDemo - Login Page', () => {

  let LoginPage, HomePage;

    test.beforeEach('fresh page and login before each test', async({page}) => {
        LoginPage = new loginPage(page);
        HomePage = new homePage(page);
        await page.goto('https://www.saucedemo.com/');
        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(page.locator('[id="react-burger-menu-btn"]')).toBeVisible()
    });

  //   //showcasing playwright test steps feature here
  //   test('validating homepage assets', async ({page}) => {
  //     await test.step('hamburger menu open', async () => {
  //       // Header contains the hamburger menu, Logo and Cart
  //     });
  //     await test.step('hamburger menu open', async () => {
  //       //click hamburger menu, then validate that all the menu items are visible
  //     });
  //     await test.step('All items', async () => {
  //       //go one level deep into an item page or shopping cart, then clicking this should return to homepage
  //     });
  //     await test.step('About', async () => {
  //       //validate the saucelabs webpage it takes us to
  //     });
  //     await test.step('Logout', async () => {
  //       //logout and validate something on unlogged login screen
  //     });
  //     await test.step('Reset App State', async () => {
  //       //add items to cart, then hit this button, should remove cart count
  //     });
      
  // });

  test('adding and removing product from cart', async ({page}) => {
    await test.step('add product to cart', async () => {
       await HomePage.addToCart("sauce-labs-bike-light")
    });
    
});


  

});
