/********
Scope : Test cases to be submitted for the pupose of interview only.

Scenario 4 out of 4: Click on ‘View all Sale’ under Sale menu. The sale page appears with
the list of products. Filter with Price $100.00-$199.99. Validate the filter
has been applied correctly.

Tools : webdriverio with node.js
Url used: http://www.ctqatest.biz/ecom/

Submitted by
Name : Shruti Bansal
Email : shruti.x.bansal@gmail.com 
********/

// Defining assertion
	const assert = require('assert');

// Web link and title validation
describe('Scenario 4 - Interview', () => {
	it('should have the title : Madison Island', () => {
		browser.url('http://www.ctqatest.biz/ecom/')
		expect(browser).toHaveTitle('Madison Island');
		browser.maximizeWindow();
// Scenario 4 out of 4 - details given above

// This will click on Sale Menu and View Sale Menu	
		$$('a[href="http://www.ctqatest.biz/ecom/sale.html"]')[0].click()
		browser.pause(1000)

//clicking on price filter

		$$('a[href="http://www.ctqatest.biz/ecom/sale.html?price=100-200"]')[0].click();
    	browser.pause(2000)
    	
		var filter = $$('.value*=$100')[0];
		// Asserting that the filter is applied
		expect(filter).toHaveText('$100.00 - $199.99');

	})
})