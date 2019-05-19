const puppeteer = require('puppeteer');

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('https://coupons.oneindia.com/top-vouchers');
    await page.click('.oneindia-voucher:first-child > div.oneindia-voucher-content > div.oneindia-voucher-right-wrapper > div > div.bottom > span > span');
    await page.waitFor(5000);

    const result = await page.evaluate(() => {
        let title = document.querySelector('body > div.popup > div > div.popup-code > div.oneindia-code-holder.oneindia-hidden-code.clear > span.oneindia-code-wrapper > span > span').innerText;
        let desp = document.querySelector('.oneindia-voucher:first-child > div.oneindia-voucher-content > div.oneindia-voucher-right-wrapper > div > div.oneindia-voucher-right-content > h3 > span').innerText;
        return {
            title,
            desp
        }
    });

    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value); // Success!
});