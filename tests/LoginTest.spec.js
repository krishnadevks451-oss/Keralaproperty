import { KPLoginpage } from "../pages/KPLoginpage";
import{test,expect} from '@playwright/test'

/**@type(KPLoginpage) */
let login ;

test.beforeEach("url loading",async({page})=>
{
    
    await page.goto(" https://keralaproperty.in/member/login/");
    login=new KPLoginpage(page);

})
test("valid login",async({page})=>
{
    
    await login.setValues(process.env.KP_USERNAME,process.env.KP_PASSWORD);
    await login.clickLoginbutton();
     await expect(page).toHaveURL(" https://keralaproperty.in/member/myhome/");
     

})

test("invalid login",async({page})=>
{
    await login.setValues("Anandhu@gmail.com","Anandhu123")
    await login.clickLoginbutton();
    await expect(page).toHaveURL("https://keralaproperty.in/member/login/");
})

test("  verify logo is visible ",async({page})=>
{
    await expect(login.logo).toBeVisible();
    
})

test("  Click logo  ",async({page})=>
{
    await login.clicklogo();
    await expect(page).toHaveURL("https://keralaproperty.in/");
    
})

