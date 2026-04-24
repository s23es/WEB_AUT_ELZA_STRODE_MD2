import { BasePage } from "../pageObjects/basePage";

export class AppointmentPage extends BasePage {
    //---------------------------------------------------------
    static get url(){
        return "/#appointment";
    }
    //---------------------------------------------------------
    static selectFacility(facilityName){
        //In cypress sometimes(?) looks as if value doesnt change but it does (left the .should just in case)
        return cy.get('#combo_facility').select(facilityName).should('have.value', facilityName);
    }

    static get checkReadmission(){
        return cy.get('#chk_hospotal_readmission');
    }

    static get radioMedicaid(){
        return cy.get('#radio_program_medicaid');
    }
    //---------------------------------------------------------
}