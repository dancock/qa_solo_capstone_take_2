import { AboutIkeaPage } from "../page objects/aboutPage";
import { BasePage } from "../page objects/BasePage";
import { SalesPage } from "../page objects/intSalesPage";
import { ShopPage } from "../page objects/MenuShopPage";
import { MuseumPage } from "../page objects/museumPage";
import { IkeaTodayPage } from "../page objects/todayPage";

const page = new BasePage();
const shopPage = new ShopPage({ browser: "chrome" });
const salesPage = new SalesPage({ browser: "chrome" });
const museumPage = new MuseumPage({ browser: "chrome" });
const todayPage = new IkeaTodayPage({ browser: "chrome" });
const aboutPage = new AboutIkeaPage({ browser: "chrome" });

describe("verifying if elements are visible on maximized browser window", () => {
    beforeEach(async () => {
        await page.navigate(page.url);
    });
    afterAll(async () => {
        await page.removeCookies();
        await page.driver.quit();
    });
    test('go to the about page through tiles small window', async () => {
        expect.assertions(3);
        try {  //verify that the accept cookies button is visible on home page
            await page.driver.sleep(2000);
            expect(await page.isItVisible(page.acceptCookies)).toBeTruthy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
        try {  //verify that the accept cookies button is not visible on home page after accept
            await page.driver.sleep(2000);
            await page.click(page.altAcceptCookies);
            await page.driver.sleep(2000);
            expect(await page.isItVisible(page.altAcceptCookies)).toBeFalsy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
        try { //use the default size window to navigate with
            await page.click(page.aboutTile);
            await page.driver.sleep(2000);
            expect(await page.isItVisible(aboutPage.navBar)).toBeTruthy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
    });
    test('go to the museum page through tiles small window', async () => {
         //use the default size window to navigate with
         //await page.driver.sleep(2000);
         //await page.click(page.altAcceptCookies);
         //await page.driver.sleep(2000);
        await page.click(page.museumTile);
        await page.driver.sleep(2000);
        expect(await page.isItVisible(museumPage.upperBar)).toBeTruthy();
    });
    test('go to the h22 page through tiles small window', async () => {
         //use the default size window to navigate with
         //await page.driver.sleep(2000);
         //await page.click(page.altAcceptCookies);
        await page.click(page.h22Tile);
        await page.driver.sleep(2000);
        expect(await page.isItVisible(page.h22Header)).toBeTruthy();
    });
    test('assertions to verify if elements are visible', async () => {
        await page.maximizeThis();
        expect.assertions(4);
        try {  //verify that the settings cookie window is not visible
            await page.driver.sleep(4000);
            expect(await page.isItVisible(page.openSettingsCookie)).toBeFalsy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
        try {  //verify it is no longer there
            //await page.click(page.altAcceptCookies);
            expect(await page.isItVisible(page.altAcceptCookies)).toBeFalsy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
        try {  //verify that the hamburger menu button is visible
            expect(await page.isItVisible(page.hamburgerMenu)).toBeTruthy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
        try {   //open the hamburger menu and verify that the close button is visible
                //then close the hamburger menu
            await page.click(page.hamburgerMenu);
            await page.click(page.hamburgerClose);
            expect(await page.isItVisible(page.hamburgerMenu)).toBeTruthy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
    });
    test('go to the shop page through menu', async () => {
        await page.maximizeThis();
        expect.assertions(1);
        try {  //open the hamburger menu and verify and click the Shop button
            await page.click(page.hamburgerMenu);
            await page.click(page.menuShopBtn);
            await page.click(shopPage.shopAcceptCookies);
            expect(await page.isItVisible(shopPage.menuShopBtn)).toBeTruthy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
    });
    test('go to the about page through menu', async () => {
        await page.maximizeThis();
        expect.assertions(1);
        try {  //open the hamburger menu and verify and click the  button
            await page.click(page.hamburgerMenu);
            await page.click(page.menuAboutIkea);
            await page.click(aboutPage.aboutAcceptCookies)
            expect(await page.isItVisible(aboutPage.navBar)).toBeTruthy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
    });
    test('go to the museum page through menu', async () => {
        await page.maximizeThis();
        //open the hamburger menu and verify and click the  button
        await page.driver.sleep(2000);
        await page.click(page.hamburgerMenu);
        await page.driver.sleep(2000);
        await page.click(page.altMenuIkeaMuseum);
        await page.driver.sleep(2000);
        await page.click(museumPage.iAgreeBtn);
        await page.driver.sleep(5000);
        expect(await page.isItVisible(museumPage.upperBar)).toBeTruthy();
    });
    test('go to the today page through menu', async () => {
        await page.maximizeThis();
        expect.assertions(1);
        try {  //open the hamburger menu and verify and click the  button
            await page.click(page.hamburgerMenu);
            await page.driver.sleep(2000);
            await page.click(page.menuIkeaToday);
            await page.driver.sleep(2000);
            expect(await page.isItVisible(todayPage.searchBtn)).toBeFalsy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
    });
    test('go to the sales page through menu', async () => {
        await page.maximizeThis();
        expect.assertions(1);
        try {  //open the hamburger menu and verify and click the  button
            await page.click(page.hamburgerMenu);
            await page.click(page.menuInternationalSales);
            await page.click(salesPage.salesCookiesBtn)
            expect(await page.isItVisible(page.menuInternationalSales)).toBeTruthy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
    });
    test('go to the about page through tiles', async () => {
        await page.maximizeThis();
        expect.assertions(1);
        try {
            await page.click(page.aboutTile);
            await page.driver.sleep(2000);
            expect(await page.isItVisible(aboutPage.navBar)).toBeTruthy();
        } catch (err) {
            expect(err).toEqual(new Error());
        };
    });
    test('go to the museum page through tiles', async () => {
        await page.maximizeThis();
        await page.click(page.museumTile);
        await page.driver.sleep(2000);
        expect(await page.isItVisible(museumPage.upperBar)).toBeTruthy();
    });
    test('go to the h22 page through tiles', async () => {
        await page.maximizeThis();
        await page.click(page.h22Tile);
        await page.driver.sleep(2000);
        expect(await page.isItVisible(page.h22Header)).toBeTruthy();
    });
});
