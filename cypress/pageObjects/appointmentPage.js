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
    static get dateField(){
        return cy.get('#txt_visit_date');
    }

    static dateDay(day){
        //not(.old):not(.new) avoids other month dates
        return cy.get('.datepicker-days td.day:not(.old):not(.new)').contains(String(day));
    }
    //---------------------------------------------------------
    static get commentField(){
        return cy.get('#txt_comment');
    }

    static get bookButton(){
        return cy.get('#btn-book-appointment');
    }
    //---------------------------------------------------------
    static get stackIcon(){
        return cy.get('#menu-toggle');
    }

    static get sidebar(){
        return cy.get('#sidebar-wrapper');
    }

    static clickHistory(){
        cy.get('#sidebar-wrapper').find('a').contains('History').click();
    }

    static get history(){
        return cy.get('#history');
    }
    //---------------------------------------------------------
}