// const {Builder, By, Key, until} = require('selenium-webdriver');
const {Builder} = require('selenium-webdriver');

export const sele = (async function example() {
    let driver = await new Builder()
    .forBrowser('chrome')
    .build();
    try {
        // 네이버 실행
        await driver.get('https://www.naver.com/');
    }
    finally{
        driver.quit();
    }
})();