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
- Runs each test on Chrome, Firefox, Webkit (safari), and Microsoft Edge
- Runs /tests folder
- Uses Page Object Model



## Observations

    ###Standard_User
    - for the standard_user, there is no validation on minimum cart quantity or cost, we can at minimum checkout no items at no cost
    - for the standard_user, there is no validation on alphanumeric etc. for the checkout, can use words in the zipcode, and #'s for the first and last name
    - for the standard_user I have yet to reproduce "Epic sadface: You can only access '/inventory-item.html' when you are logged in" (maybe by hitting about, doing a wait, attempting to  return to prev page)
    - for the standard_user the dropdown arrow on the product filter dropdown modifies the cursor but isnt actually interactable 

    ###Problem_User
    - for the Problem_User several products link to the wrong products, cannot remove some products after adding them (backpack, bike light, onesie), cannot add other products at all (bolt tshirt, fleece jacket, tshirt (red)). When attempting to checkout the Last name field cannot be filled and cannot proceed, no filtering options on the homepage work, about link takes us to a 404 page

    ###Error_User
    - for the Error_User, sorting is broken with a relevant notification when attempting, Last Name field at checkout cannot be entered BUT allows us to proceed to the next page BUT cannot finish the transaction, cannot add/remove several items

    ###Visual_User
    -Several icons are tilted and misplaced (hamburger icon, shopping card icon, add to cart button for fleece jacket, checkout button), prices are very different, text aligment on tshirt names is right aligned and other names are left aligned, image for the first product when sorted ANY SORT is dog image instead of correct product image


