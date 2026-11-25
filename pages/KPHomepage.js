export class KPHomePage
{
    /**
     * 
     * @param{import('@playwright/test').Page}page
     */

    constructor(page)
    {
        this.page = page;
        this.logo = page.getByAltText("Kerala Property");
        this.myhome =page.getByRole('link', { name: 'My Home' })
        this.propertytext = page.getByRole('heading', { name: 'My Properties' })
        this.myname = page.getByRole('heading', { name: 'Malavika' })
        this.myaccount = page.getByRole('link', { name: 'My Account' })
    }
    async logoClick()
    {
        await this.logo.click();
    }
    async myaccountClick()
    {
        await this.myaccount.click();
    }
}