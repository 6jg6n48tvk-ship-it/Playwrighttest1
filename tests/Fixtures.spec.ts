import {test} from '@playwright/test'
test ('Close cookies', async ({page}) =>{
    await page.goto('https://playwright.dev/');
    await page.getByRole ('button', {name: 'ok', exact : true}). click();

})
   

test ('Close is still cookies', async ({page}) => {

    await page.goto('https://playwright.dev/');

    await page.pause();
    
})

test ('Browser fixture', async ({browser}) => {
    
    await page.goto('https://playwright.dev/');

    await page.pause();
    
})
   

   
