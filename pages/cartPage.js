class cartPage{

    constructor(page){
        this.page = page;
    }

    async clickOn(locator){
        await this.page.click(`.${locator}`)
    }

    async fillCheckoutInfo(firstName, lastName, zipCode){
        await this.page.fill("#first-name", firstName);
        await this.page.fill("#last-name", lastName);
        await this.page.fill("#postal-code", zipCode);
        await this.page.click("#continue");
    }

}

module.exports = cartPage;