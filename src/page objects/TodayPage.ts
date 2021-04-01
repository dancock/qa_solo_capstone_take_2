import { BasePage } from "./BasePage";
import { By, WebDriver } from "selenium-webdriver";

export class IkeaTodayPage extends BasePage { 
  driver: WebDriver;
  url: string;

  searchBtn: By = By.css('li.nav-primary--search');

  constructor(driver) {
    super(driver);
    this.url = "https://www.ikea.com";
  }
}