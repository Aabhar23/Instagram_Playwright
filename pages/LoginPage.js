exports.LoginPage= class LoginPage {
    constructor(page) {
        this.page=page;
        this.usernameInput='//*[@id="loginForm"]/div/div[1]/div/label/input';
        this.passwordInput='//*[@id="loginForm"]/div/div[2]/div/label/input';
        this.loginButton='//*[@id="loginForm"]/div/div[3]/button/div';
    }

    async gotologinpage(){
        await this.page.goto('https://www.instagram.com/')
    }

    async login(username, password){
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);
        await this.page.locator(this.loginButton).click();
    }
}