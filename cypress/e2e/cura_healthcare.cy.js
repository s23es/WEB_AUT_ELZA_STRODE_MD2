import { BasePage } from "../pageObjects/basePage";
import { HomePage } from "../pageObjects/homePage";

describe('CURA Healthcare', () => {
  context('With demo login', () => {
    beforeEach(() => {
      HomePage.visit();
    });
    //----------------------------------------------------------------------------------------
    it.only('Make an Appointment', () => {
      HomePage.appointmentButton.click(); //Click appointment button
    });
    //----------------------------------------------------------------------------------------
  });
  //========================================================================================
});