/*
Function in Javascript

Dealing with DropDown element type.

*/
describe("Test working with DropDowns- ", function () {
    it("Open browser and navigate to test page", function () {
        browser.manage().window().maximize();
        browser.get("https://juliemr.github.io/protractor-demo/");
        console.log("page open");
    });
    function add(a, b) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        element(by.id("gobutton")).click();
    }


    it("Add and print first pair", function () {
        add(2, 3);
        element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function (text) {
            console.log("The sum of first pair is->" + text);
            expect(text).toEqual('5');
        });
    });


    it("Add and print multiple pairs", function () {
        add(3, 3);
        add(3, 4);
        add(4, 4);

        element.all(by.repeater("result in memory")).each(function (item) {
            item.$("td:nth-child(3)").getText().then(function (text) {

                console.log("The sum of {first} pair is->" + text)
            });
        });
    });

    it("->Close browser", function () {
        browser.close();
        console.log("page closed.");
    });
});