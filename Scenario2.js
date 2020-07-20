/****
     Scope : Test cases to be submitted for the pupose of interview only.

     Scenario 2: Go to the login page and leave the username and password field blank
                 and Click on LOGIN button. Check if the validation appears in the input box.
                 
     Tools : webdriverio with node.js
     Url used: http://www.ctqatest.biz/ecom/

     Submitted by
     Name : Shruti Bansal
     Email : shruti.x.bansal@gmail.com 
     ****/

// Defining assertion
	const assert = require('assert');

    // Web link and title validation
    describe('Scenario 2 - Interview', () => {
        it('should have the title : Madison Island', () => {
                browser.url('http://www.ctqatest.biz/ecom/customer/account/login/')
                //expect(browser).toHaveTitle('Madison Island');
        browser.maximizeWindow();
        // Scenario 2 - clicking on Login without entering username and pwd
         $("button[title='Login']").click();
         var emailValidationMsg = $("#advice-required-entry-email");
         expect(emailValidationMsg).toHaveTextContaining('This is a required field.');
         
         var pwdValidationMsg = $("#advice-required-entry-pass");
         expect(pwdValidationMsg).toHaveTextContaining('This is a required field.')
        
		})
    })