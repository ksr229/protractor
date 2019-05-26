// import { protractor } from "protractor/built/ptor";
// import { browser, element, $ } from "protractor";

/**
 * Explicit Waits using Expected Condition.
 * Website: http://www.itgeared.com/demo/1506-ajax-loading.html
 * Element to click <a href="javascript: void(0);loadAjax();">Click to load get data via Ajax!</a>
 * Element to wait for: #loader
 * Element to fetch the text from : #results
 
 */
describe("Testing Expected Waits using Expected Conditions", function () {
    it("Switching between frames", function () {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
        browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");
        $("a[href*='loadAjax()']").click();
        // browser.sleep(3000);                               //AVOID Using Implicit Waits
        var EC = protractor.ExpectedConditions;
        browser.wait(EC.invisibilityOf($("#loader"))).then(function () {
            $("#results").getText().then(function (text) {
                console.log(text);
            });
        });


    });
});