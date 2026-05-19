const {test , expect}= require('@playwright/test');

test('Home Page', async ({page})=>{

  await  page.goto('https://www.demoblaze.com/index.html');
  const pageTittle = await page.title();
  console.log("Page Title", pageTittle);

  await expect(page).toHaveTitle("STORE");
  await expect(page).toHaveURL("https://www.demoblaze.com/index.html");
  const pageURL = page.url();
  console.log("URL", pageURL);
  await page.close();

})
