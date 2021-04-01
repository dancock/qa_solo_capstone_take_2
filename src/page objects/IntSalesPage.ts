import { BasePage } from "./BasePage";
import { By, WebDriver } from "selenium-webdriver";

export class SalesPage extends BasePage {
  driver: WebDriver;
  url: string;
  
  salesCookiesBtn: By = By.css('button.btn.btn--filled.js-cookie-accept');


  constructor(driver) {
    super(driver);
    this.url = "https://www.ikea.com";
  }
}