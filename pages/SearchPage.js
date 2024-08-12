
exports.SearchPage = class SearchPage {
    constructor(page) {
        this.page=page;
        this.search='//span[normalize-space()="Search"]'
        this.inputSearch='input[placeholder="Search"]'
    }
   
    async gotoSearch(){
        await this.page.click(this.search);
    }
    async searchPerson(username){
        await this.page.locator(this.inputSearch).fill(username);
        await this.page.click(`text=${username}`);
       
    }

}