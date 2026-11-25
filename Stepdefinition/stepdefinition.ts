import { Given, When, Then, DataTable, Before, After } from '@cucumber/cucumber';
import { Browser, firefox,chromium, Page } from 'playwright';
import { expect } from '@playwright/test';

//global variables.
let browser:Browser;
let page:Page;
Before(async ()=>{
    browser= await chromium.launch({channel:'chrome', headless: false });
    page = await browser.newPage();
    await page.goto("http://127.0.0.1/orangehrm-2.5.0.2/login.php");
});
Given('Open the chrome browser', async ()=> {
  browser= await chromium.launch({channel:'chrome', headless: false });
    page = await browser.newPage();

});

Given('navigate the url', async ()=> {
  await page.goto(
        "http://127.0.0.1/orangehrm-2.5.0.2/login.php"
    );

});

/*When('enter the username.', async ()=> {
   await page.locator("[name='txtUserName']")
        .fill("selenium");

});

When('enter the password.', async ()=> {
 await page.locator("[name='txtPassword']")
        .fill("selenium");

});*/

/*When('enter the username {string}.', async (selenium:string) =>{
  await page.locator("[name='txtUserName']")
        .fill(selenium);
});

When('enter the password {string}.', async (selenium:string)=>{
   await page.locator("[name='txtPassword']")
        .fill(selenium);
});*/
/*When('enter the username', async (dataTable:DataTable) =>{
  //read data from datatable using raw method.
  let data:string[][]=await dataTable.raw();
  //to get particular 1st row n coloumn
let username:string=data[0][0];//selenium
console.log("username"+username);
//identify username n enter username.
await page.locator("[name='txtUserName']")
        .fill(username);

});

When('enter the password', async (dataTable:DataTable)=> {
//read data from datatable using raw method.
  let data:string[][]=await dataTable.raw();
  //to get particular row n coloumn
let password:string=data[0][0];//selenium

  await page.locator("[name='txtPassword']")
        .fill(password);
});*/

When('enter {string} data into username field', async (selenium:string)=> {
   await page.locator("[name='txtUserName']")
        .fill(selenium)
});

When('enter {string} data into Password field', async (selenium:string)=> {
  await page.locator("[name='txtPassword']")
        .fill(selenium);
});

When('enter the username', async (dataTable:DataTable) =>{
  //read data from datatable using raw method.
  let data =await dataTable.hashes();

  //to get particular 1st row n coloumn.(object key is header key)

let username:string=data[0]["username"];//selenium
console.log("username"+username);
//identify username n enter username.
await page.locator("[name='txtUserName']")
        .fill(username);

});

When('enter the password', async (dataTable:DataTable)=> {
//read data from datatable using raw method.
  let data=await dataTable.hashes();
  //to get particular row n coloumn
let password:string=data[0]["password"];//selenium

  await page.locator("[name='txtPassword']")
        .fill(password);
});
/* Background keyword*/ 
When('enter the username {string}', async (username:string)=> {
  await page.locator("[name='txtUserName']")
        .fill(username);
});
/* Background keyword*/ 
When('enter the password {string}', async (password:string)=> {
await page.locator("[name='txtPassword']")
        .fill(password);
});


When('click on login', async ()=> {
   await page.locator("[name='Submit']").click();

});

Then('verify the welcome page', async ()=> {
  await expect(
        page.locator("//li[text()='Welcome selenium']")
    ).toBeVisible();

});
After(async()=>{
  await browser.close();
});
When('click on logout', async ()=> {

 await browser.close();

});



