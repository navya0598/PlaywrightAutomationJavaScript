import {test ,expect} from '@playwright/test';

test('Locators', async ({page})=>{
  await  page.goto("https://www.demoblaze.com/index.html");

  //Locating
  //Click on login button - property 
  //await page.locator('id= login2').click();
  //or
  await page.click('id =login2');

  //input box -css
  //provide user name 
  await page.fill('#loginusername','test');
  
  //Password
  await page.type("input[id = 'loginpassword'] ", 'test')
  //Login 
  
await page.locator("//button[normalize-space()='Log in']").click()

//verify logout is present 
//Capture element and add assertions
const logout = await page.locator("//a[@id='logout2']")

//validation point -assertion
await expect(logout).toBeVisible();

await page.close();



})
