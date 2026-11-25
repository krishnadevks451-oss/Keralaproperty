export class KPLoginpage{

    /**
     * 
     * @param{import('@playwright/test').Page}page
     */



    constructor(page)
    {
        this.page=page;
        this.usernamefield=page.locator(" #ulogin");
        this.passwordfield=page.locator("#upass");
        this.loginbutton=page.locator("#sub_logbtn");
        this.logo=page.locator(".brand-logo");

    }
    async setValues(username,password)
    {
        await this.usernamefield.fill(username);
        await this.passwordfield.fill(password);
    }
    async clickLoginbutton()
    {
        await this.loginbutton.click();

    }
    async clicklogo()
    {
        await this.logo.click()
    }
    
}