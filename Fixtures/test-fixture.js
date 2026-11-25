import{test as base,expect} from '@playwright/test'
import { KPHomePage } from '../pages/KPHomepage'
import { KPLoginpage } from '../pages/KPLoginpage'


export const test=base.extend({
    login:async({page},use)=>
    {
        await use(new KPLoginpage(page));
    },
    homepage:async({page},use)=>
    
    {
        await use(new KPHomePage(page));
    }

})
export{expect};