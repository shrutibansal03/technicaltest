/****
     Scope : Test cases to be submitted for the pupose of interview only.

     Scenario 3 out of 4: Find the search Bar on Top left corner, search by text ‘shirt’. From the
     search list open the product ‘Slim Fit Dobby Oxford Shirt’. Select the
     color and size of your choice and add to cart and validate it has
     successfully been added to the cart.

     Tools : webdriverio with node.js
     Url used: http://www.ctqatest.biz/ecom/

     Submitted by
     Name : Shruti Bansal
     Email : shruti.x.bansal@gmail.com 
     ****/

// Defining assertion
	const assert = require('assert');

    // Web link and title validation
    describe('Scenario 3 - Interview', () => {
        it('should have the title : Madison Island', () => {
                browser.url('http://www.ctqatest.biz/ecom/')
                expect(browser).toHaveTitle('Madison Island');
        browser.maximizeWindow();
        // Scenario 3 out of 4 - details given above
        // This will enter the text "Shirt" in the search bar on url and enter	
        $('input#search').setValue('Shirt')
        $('.search-button').click();
        browser.pause(9000)

        // Clicking on Link containing SlimFit in title of link
        $('a=Slim fit Dobby Oxford Shirt').click()


        browser.pause(1000)

        //Getting Color dropdown.
        const selectBox = $('#attribute92');
    
        //Selecting Color 
        selectBox.selectByAttribute('value', '27');
    
    
        //Getting Size Dropdown
        const colorDropdown = $('#attribute180');
    
    
        //Selecting size
        colorDropdown.selectByAttribute('value', '81');
    
        // Clicking AddToCart
        $$('.btn-cart')[1].click();
        // Waiting for page to load...We can do some better way of checking new page is loaded
        browser.pause(1000);
        var successMsg = $$('.success-msg ul li')[0];
        // Assertion for the success message
        expect(successMsg).toHaveTextContaining('Shirt was added to your shopping cart.');
        
		})
    })