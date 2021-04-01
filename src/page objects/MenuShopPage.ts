import { BasePage } from "./BasePage";
import { By, WebDriver } from "selenium-webdriver";

const fs = require("fs");

export class ShopPage extends BasePage {
    driver: WebDriver;
    url: string;
    content: string;
    myProfileBtn: By = By.xpath('//a[@title="My Profile"]');
    trackOrderBtn: By = By.xpath('//a[@title="Track order"]');
    favoritesBtn: By = By.xpath('//a[@title="Favorites"]');
    cartBtn: By = By.xpath('//a[@title="Shopping bag"]');
    hamburgerBtn: By = By.xpath('//button[@title="Menu"]');
    searchbar: By = By.css('q');
    visualSearch: By = By.xpath('//button[@id="search-box__visualsearch"]');
    shopAcceptCookies: By = By.xpath('/html/body/div[10]/div/div[2]/button');

    

    constructor(driver) {
        super(driver);
        this.url = "https://www.ikea.com/us/en/";
    }
    /**
   * returns text in searchBar and presses enter 
   * @param {content} string - the text to search for
   * 
   */
  async doSearch(content): Promise<void> {
    return this.sendKeys(this.searchbar, `${content}\n`);
  };
    //page needs to be >=1200px wide to see big screen buttons
    //shopHamburger: By = By.css('');


    //page needs to be <1200px to see little screen buttons
    //myProfileBtn: By = By.xpath('//a[@title="My Profile"]');

    //constructor(options) {
    //super(options);
    //this.url = "https://www.ikea.com/";
    //};

    /*async pleasePleasePleaseWorkXpath(xpathBy: By) {
        await this.getElement(xpathBy);
        let element = await this.getElement(xpathBy);
        return await element.getText();
    };*/
};
