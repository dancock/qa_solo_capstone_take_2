import {
  Builder,
  By,
  Capabilities,
  until,
  WebDriver,
  WebElement,
} from "selenium-webdriver";
const fs = require("fs");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");
const webdriver = require('selenium-webdriver');

export class BasePage {
  driver: WebDriver;
  url: string = "https://www.ikea.com";
  content: string;
  acceptCookies: By = By.css('button#onetrust-pc-btn-handler.cookie-setting-link');
  settingsCookies: By = By.css('button[id="onetrust-accept-btn-handler"]');
  openSettingsCookie: By = By.css('div#onetrust-pc-sdk');
  allowAllCookies: By = By.css('#accept-recommended-btn-handler');
  browseWithSelectedCookies: By = By.css('#onetrust-pc-sdk > div.ot-pc-footer > div.ot-btn-container > button');
  hamburgerMenu: By = By.css('div.menu-btn.svelte-198qo69');
  hamburgerClose: By = By.css('div.menu-btn.svelte-198qo69.cross');
  menuShopBtn: By = By.xpath('//a[@href="https://www.ikea.com/us/en/"]');
  menuIkeaToday: By = By.xpath('(//a[@href="https://ikea.today/"])[1]');
  menuAboutIkea: By = By.xpath('(//a[@href="https://about.ikea.com/"])[1]');
  menuIkeaMuseum: By = By.xpath('(//a[@href="https://ikeamuseum.com/"])[1]');
  altMenuIkeaMuseum: By = By.xpath('//*[@id="app"]/div[1]/nav/div[3]/a[4]');
  menuInternationalSales: By = By.xpath('(//a[@href="https://about.ikea.com/en/contact/how-to-buy-ikea-products-from-a-different-country"])[1]');
  firstPageResults: By;
  resultsKeyword: By;
  searchbar: By;
  todayTile: By = By.css('#app > div:nth-child(1) > main > section.container.svelte-1e7sfpr > div.sub.svelte-1e7sfpr > a:nth-child(1)');
  aboutTile: By = By.css('#app > div:nth-child(1) > main > section.container.svelte-1e7sfpr > div.sub.svelte-1e7sfpr > a:nth-child(2)');
  museumTile: By = By.css('#app > div:nth-child(1) > main > section.container.svelte-1e7sfpr > div.sub.svelte-1e7sfpr > a:nth-child(3)');
  h22Tile: By = By.css('#app > div:nth-child(1) > main > section.container.svelte-1e7sfpr > div.sub.svelte-1e7sfpr > a:nth-child(4)');
  h22Header: By = By.css("body > header > div > div > div.site-name > a");
  //alternate selectors and xpaths added for practice
  //alternate hamburger menu close buttons
  altMenuClose: By = By.css('#app > div:nth-child(1) > nav > div.menu-btn.svelte-198qo69.cross');
  altAltMenuClose: By = By.xpath('//*[@id="app"]/div[1]/nav/div[1]');
  //alternate hamburger menu buttons
  altMenuButton: By = By.css('#app > div:nth-child(1) > nav > div');
  altAltMenuButton: By = By.xpath('//*[@id="app"]/div[1]/nav/div');
  altAltAltMenuBtn: By = By.xpath('/html/body/div[1]/div[1]/nav/div');
  //alternate cookies settings window
  altOpenSettingsCookieWndw: By = By.xpath('//*[@id="ot-pc-content"]');
  altAltOpenSettingsCookieWndw: By = By.xpath('/html/body/div[2]/div[2]/div[2]');
  //alternate cookies settings buttons
  altSettingCookies: By = By.css('button.cookie-setting-link');
  altAltSettingCookies: By = By.css('#onetrust-pc-btn-handler');
  //alternate accept cookies buttons
  altAcceptCookies: By = By.css("#onetrust-accept-btn-handler");
  altAltAcceptCookies: By = By.xpath('//*[@id="onetrust-accept-btn-handler"]');
  altAltAltAccept: By = By.xpath('/html/body/div[2]/div[3]/div/div/div[2]/div/div/button');
  //alternate cookie settings window
  openSettingsCookieWndw: By = By.css('#ot-pc-content');
  //changed from the constructor that uses the interface for Options
  //because we couldn't figure it out
  constructor(driver?) {
    if (driver) this.driver = driver
    else
      this.driver = new Builder()
        .withCapabilities(Capabilities.chrome())
        .build();
  };
  /**
   * navigates to the url passed in, or to the one stored on the page object
   * @param {string} url - the url to navigate to, unless you wish to use the page's defined base url
   */
  async navigate(url?: string): Promise<void> {
    if (url) return await this.driver.get(url);
    else if (this.url) return await this.driver.get(this.url);
    else
      return Promise.reject(
        "BasePage.navigate() needs a URL defined on the page object, or one passed in. No URL was provided."
      );
  }
  //quick method to maximize the browser window
  async maximizeThis() {
    this.driver.manage().window().maximize();
  }
  //a check to see if an element is visible
  //write if the element is visible in the console
  //return elment as true/false
  async isItVisible(elementBy: By): Promise<boolean> {
    let element = await (await this.driver.findElement(elementBy)).isDisplayed();
    //console.log(element);
    if (element == true) { //if the element is visible, do a click on the close button
      console.log(`${elementBy} WAS visible!`); //then, expect the element not to be visible 
      return element;
    }
    else { //if the element is not visible, expect the element not to be visible
      console.log(`${elementBy} was NOT Visible!`);
      return element;
    };
  };
  //get the cookies and return them to the console
  async checkCookies() {
    let element = (await this.driver.manage().getCookies()).toString();
    return console.log(element);
  }
  //remove all the cookies relating to the current site
  async removeCookies() {
    await this.driver.manage().deleteAllCookies();
  }
  /**
   * waits for the identified element to be located and visible before returning it.
   * @param {By} elementBy - the locator for the element to return.
   */
  async getElement(elementBy: By): Promise<WebElement> {
    await this.driver.wait(until.elementLocated(elementBy));
    let element = await this.driver.findElement(elementBy);
    await this.driver.wait(until.elementIsVisible(element));
    return element;
  };
  /**
   * waits for the identified element to be located and visibile before returning it.
   * @param {By} cssBy - the locator for the elemenent
   */
  async getElementCSS(cssBy: By): Promise<WebElement> {
    await this.driver.wait(until.elementLocated(cssBy));
    let element = await this.driver.findElement(cssBy);
    await this.driver.wait(until.elementIsVisible(element));
    return element;
  };
  /**
   * waits for the identified element to be located and visibile before returning it.
   * @param {By} xpathBy - the locator for the elemenent
   */
  async getElementXpath(xpathBy: By): Promise<WebElement> {
    await this.driver.wait(until.elementLocated(xpathBy));
    let element = await this.driver.findElement(xpathBy);
    await this.driver.wait(until.elementIsEnabled(element));
    return element;
  };
  /**
   * waits for the identified element to be located and visibile before returning it.
   * @param {By} nameBy - the locator for the elemenent
   */
  async getElementName(nameBy: By): Promise<WebElement> {
    await this.driver.wait(until.elementLocated(nameBy));
    let element = await this.driver.findElement(nameBy);
    await this.driver.wait(until.elementIsVisible(element));
    return element;
  };
  /**
   * waits for the identified element to be located and visibile before returning it.
   * @param {By} idBy - the locator for the elemenent
   */
  async getElementId(idBy: By): Promise<WebElement> {
    await this.driver.wait(until.elementLocated(idBy));
    let element = await this.driver.findElement(idBy);
    await this.driver.wait(until.elementIsVisible(element));
    return element;
  };
  /**
   * clicks the given element after waiting for it
   * @param {By} elementBy - the locator for the element to click
   */
  async click(elementBy: By): Promise<void> {
    let element = await this.getElement(elementBy);
    await this.driver.wait(until.elementIsEnabled(element));
    return await element.click();
  };
  /**
   * clears the given element after waiting for it, and then sends the provided keys
   * @param {By} elementBy - the locator for the element to clear and sendKeys to
   * @param {any} keys - the string or list of keys to send
   */
  async setInput(elementBy: By, keys: any): Promise<void> {
    let input = await this.getElement(elementBy);
    await this.driver.wait(until.elementIsEnabled(input));
    await input.clear();
    return input.sendKeys(keys);
  };
  /**
   * returns an element's text after waiting for it to be visible
   * @param {By} elementBy - the locator of the element to get text from
   */
  async getText(elementBy: By): Promise<string> {
    let element = await this.getElement(elementBy);
    await this.driver.wait(until.elementIsEnabled(element));
    return element.getText();
  };
  /**
   * returns text in searchBar and presses enter 
   * @param {content} string - the text to search for
   * 
   */
  async doSearch(content): Promise<void> {
    return this.sendKeys(this.searchbar, `${content}\n`);
  };
  /**
   * enters keys into an element
   * @param {By} elementBy - the locator of the element to send keys to
   * 
   */
  async sendKeys(elementBy: By, keys): Promise<void> {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
  };
  /**
   * the results article of a search
   * @param {results} string - the results
   * 
   */
  async getResults(): Promise<string> {
    return this.getText(this.firstPageResults);
  };
  /**
   * returns an element's attribute value after waiting for the element to be visible
   * @param {By} elementBy - the locator of the element to get the value from
   * @param {string} attribute - the attribute to return the value from, such as 'value' or 'href'
   */
  async getAttribute(elementBy: By, attribute: string): Promise<string> {
    let element = await this.getElement(elementBy);
    await this.driver.wait(until.elementIsEnabled(element));
    return element.getAttribute(attribute);
  };
  /**
     * gets the text from an element
     * @param elementBy - 
     * @returns 
     */
  async getElementText(elementBy: By) {
    let element = await this.getElement(elementBy);
    return await element.getText();
  };
  /**
   * will verify if a file exists in a specificed path.
   * @param path  - the path where the file is/isn't.
   * @param exists - boolean for the file existing in specified path.
   * @returns 
   */
  async fileExists(path: string, exists: boolean) {
    if (fs.existsSync(path)) {
      // File exists in path
      exists = true;
      return exists;
    } else {
      // File doesn't exist in path
      exists = false;
      return exists;
    }
  };
  async writeToFile(filepath: string, elementBy: By, extension?: string) {
    let element = (await this.getElementText(this.resultsKeyword)).toString();
    fs.writeFile(
      `${filepath}${extension}`,
      `${element}`,
      'utf8',
      (e) => {
        if (e) console.log(e);
        else return element;
      }
    );
  };

  /**
   * Will take a screenshot and save it to the filepath/filename provided.
   * Automatically saves as a .png file.
   * @param {string} filepath - the filepath relative to the project's base folder where you want the screenshot saved
   * @example - page.takeScreenshot("myFolder/mypic")
   * //picture saves in "myFolder" as "mypic.png"
   */
  async takeScreenshot(filepath: string): Promise<void> {
    fs.writeFile(
      `${filepath}.png`,
      await this.driver.takeScreenshot(),
      "base64",
      (e) => {
        if (e) console.log(e);
        else return filepath;
      }
    );
  };
};
