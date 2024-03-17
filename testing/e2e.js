const puppeteer = require("puppeteer");

( async () => {
    const browser = await puppeteer.launch({
        headless:false,
        slowMo:150,
        args:["--window-size=1220,1080"]
    });

    const page =  await browser.newPage();

    await page.goto("https://namastedev.com");

    await page.setViewport({width:1220, height:1080})
    const courcesLink = ".menu > li:nth-child(2) > a";
    await page.waitForSelector(courcesLink);
    await page.click(courcesLink);
    
    const enrollButton = ".bg-success-btn"
    await page.waitForSelector(enrollButton);
    await page.click(enrollButton);

    await browser.close();
})()

// send all the logs to the user email
// Run this script everyday at 8:00 AM - CRON Job
// Amazon email SES
// cypress and selenium
