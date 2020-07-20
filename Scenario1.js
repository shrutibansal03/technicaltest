/****
     Scope : Test cases to be submitted for the pupose of interview only.

     Scenario 1: Go to the login page and leave the username and password field blank
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
    describe('Scenario 1 - Interview', () => {
        it('should have the title : Madison Island', () => {
                browser.url('http://www.ctqatest.biz/ecom/customer/account/login/')
                //expect(browser).toHaveTitle('Madison Island');
        browser.maximizeWindow();
        // Scenario 1 - Entering username and password and checking login failure appears
        
        // Setting email and password 
        $('input[type=email]').setValue('test@test.com');
        $('input[type=password]').setValue('ThisIs@T3st.');
          
                 
        // Clicking on Login button
         $("button[title='Login']").click();
         
         var errorMsg = $('.error-msg');         
         expect(errorMsg).toHaveTextContaining('Invalid login or password.');
        
		})
    })