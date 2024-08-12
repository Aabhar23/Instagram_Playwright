exports.MessagePage= class MessagePage{
    constructor(page){
        this.page=page;
        this.messageButton='//div[normalize-space()="Message"]'
        this.messageInput='//div[@aria-placeholder="Message..."]'
        this.send='//div[normalize-space()="Send"]'
    }


    async openMessageDialog() {
        await this.page.click(this.messageButton);
    }

    async sendMessage(message) {
        await this.page.locator(this.messageInput).fill(message);
        await this.page.click(this.send);


    }
}