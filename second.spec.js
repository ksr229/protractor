//import {browser} from "protractor";

describe('Protractor first test', function() {
  it('Open Angular JS website', function() {
    console.log("Start the test");
    browser.manage().window().maximize();
    browser.get('https://angularjs.org');
    browser.sleep(4000);  
   });
});