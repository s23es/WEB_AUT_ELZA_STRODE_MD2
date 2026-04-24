import { BasePage } from "../pageObjects/basePage";
import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import { AppointmentPage } from "../pageObjects/appointmentPage";

describe('CURA Healthcare', () => {
  context('With demo login', () => {
    beforeEach(() => {
      HomePage.visit();
    });
    //----------------------------------------------------------------------------------------
    it.only('Make an Appointment', () => {
      HomePage.appointmentButton.click();                             //Click appointment button
      LoginPage.usernameField.type('John Doe');                       //Set demo username
      LoginPage.passwordField.type('ThisIsNotAPassword');             //Set demo password
      LoginPage.loginButton.click();                                  //Click login

      AppointmentPage.selectFacility('Seoul CURA Healthcare Center'); //Set facility
      AppointmentPage.checkReadmission.click();                       //Check readmission
      AppointmentPage.radioMedicaid.click();                          //Check medicaid
    });
    //----------------------------------------------------------------------------------------
  });
  //========================================================================================
});