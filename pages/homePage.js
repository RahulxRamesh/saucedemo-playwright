class homePage{

    constructor(page){
        this.page = page;
    }

//a few positive, negative, edge cases for each page

// Inventory List:
// Products: The main content area displays a list of products available for purchase.
// Product Image: Each product has an image.
// Product Name: The name of the product is displayed.
// Product Description: Short description or specifications.
// Price: The price of each product.

async addToCart(product){
    await this.page.click(`#add-to-cart-${product}`)
}

async removeFromCart(product){
    await this.page.click(`#remove-${product}`)
}

async viewProduct(imageName){
    await this.page.click(`img[data-test=inventory-item-sauce-labs-${imageName}]`)
}

// Access Cart:
// Click on the cart icon to view the items added to the shopping cart.
// Make sure the totals are accurate.

// Checkout Cart
// On the Final Page, make sure the Names and Postal code is entered successfully
// Taxes is calculated (No need to bother percentages)
// Finish up the process

}

module.exports = homePage;