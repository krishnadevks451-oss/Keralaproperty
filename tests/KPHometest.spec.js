import { test, expect } from "../Fixtures/test-fixture";


test.describe("homepage",()=>
{
    test.beforeEach("Baseurl", async({page})=>
    {
        await page.goto("https://keralaproperty.in/member/login/");
        
    })

   
    test("Check to redirect by clicking logo", async({homepage,page})=>
    {
        await homepage.logoClick();
        await expect(page).toHaveURL("https://keralaproperty.in/");
    
    })
    test("Verify my home text", async({homepage})=>
    {
        await expect(homepage.myhome).toBeVisible();
        await expect(homepage.myhome).toHaveText(" My Home");

    })

    test("Verify your name", async({homepage})=>
    {
        await expect(homepage.myname).toHaveText("Malavika")
    })
    test("my account",async({homepage})=>
    {
        await homepage.myaccountClick();
        await expect(homepage.propertytext).toHaveText("My Properties");
        
    })


})