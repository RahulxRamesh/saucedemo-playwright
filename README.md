## saucedemo-playwright
- Playwright + js on saucelabs test domain for CPH 2024

## Install
- git clone https://github.com/RahulxRamesh/saucedemo-playwright.git
- npm install
- npm init playwright@latest

## Run tests
- npx playwright test
- npm run test
- npm run test:chrome

    ### View run results - basic HTML reporter
    - npm run reports

## Base playwright config & "CI" playwright.yml
- Runs each test on Chrome, Firefox, and Webkit (safari)
- Runs /tests folder
- Uses Page Object Model



## Observations
- for the standard_user, there is no validation on minimum cart quantity or cost, we can at minimum checkout no items at no cost
- for the standard_user, there is no validation on alphanumeric etc. for the checkout, can use words in the zipcode, and #'s for the first and last name
- yet to reproduce "Epic sadface: You can only access '/inventory-item.html' when you are logged in" (maybe by hitting about, doing a wait, attempting to return to prev page)
- the dropdown arrow on the product filter dropdown modifies the cursor but isnt actually interactable 


