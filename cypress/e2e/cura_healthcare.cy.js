import { BasePage } from "../pageObjects/basePage";
import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import { AppointmentPage } from "../pageObjects/appointmentPage";
import { SummaryPage } from "../pageObjects/summaryPage";

describe('CURA Healthcare', () => {
  context('With demo login', () => {
    beforeEach(() => {
      HomePage.visit();

      //Since both scenarios need these, moved them here
      HomePage.appointmentButton.click();                             //Click appointment button
      LoginPage.usernameField.type('John Doe');                       //Set demo username
      LoginPage.passwordField.type('ThisIsNotAPassword');             //Set demo password
      LoginPage.loginButton.click();                                  //Click login
    });
    //----------------------------------------------------------------------------------------
    it('Make an Appointment', () => {
      AppointmentPage.selectFacility('Seoul CURA Healthcare Center'); //Set facility
      AppointmentPage.checkReadmission.click();                       //Check readmission
      AppointmentPage.radioMedicaid.click();                          //Check medicaid

      AppointmentPage.dateField.click();                              //Select date - 30
      AppointmentPage.dateDay('30').click();

      AppointmentPage.commentField.type('CURA Healthcare Service');   //Set comment
      AppointmentPage.bookButton.click();                             //Click book appointment

      //Validate
      SummaryPage.facility.should('contain.text', 'Seoul CURA Healthcare Center');
      SummaryPage.hospitalReadmission.should('contain.text', 'Yes');
      SummaryPage.program.should('contain.text', 'Medicaid');
      SummaryPage.visitDate.should('contain.text', '30/04/2026');
      SummaryPage.comment.should('contain.text', 'CURA Healthcare Service');
    });
    //----------------------------------------------------------------------------------------
    it.only('Check empty appointment history', () => {
      AppointmentPage.stackIcon.click();                                        //Click stack icon
      AppointmentPage.sidebar.should('have.class', 'active');                   //Validate active sidebar
      AppointmentPage.clickHistory();                                           //Click history
      AppointmentPage.history.contains('No appointment.').should('be.visible'); //Validate no appointments
    });
    //----------------------------------------------------------------------------------------
  });
  //========================================================================================
});