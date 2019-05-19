const puppeteer = require('puppeteer');
const $ = require('cheerio');
const url = 'https://coupons.oneindia.com/top-vouchers';

puppeteer
  .launch()
  .then(function(browser) {
    return browser.newPage();
  })
  .then(function(page) {
    return page.goto(url).then(function() {
      return page.content();
    });
  })
  .then(function(html) {
    $('h1', html).each(function() {
      console.log($(this).text());
    });
  })
  .catch(function(err) {
    //handle error
  });