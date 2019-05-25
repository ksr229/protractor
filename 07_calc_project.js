// import { $$ } from "protractor";

/*
Using all the previous concepts write an automation test for calc application.
- This will test the following functionality for the Calculator Application:
    a) Addition
    b) Div
    c) Modulo
    d) Mult
    e) Subs

    NEED TO REFACTOR THIS CODE
*/
describe("Test the Calculator Application- ", function () {
    function calc(a, b, c) {
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
        if (c == "Add") {
            $('select[ng-model="operator"]>option[value="ADDITION"]').click();
        }
        else if (c == "Div") {
            $('select[ng-model="operator"]>option[value="DIVISION"]').click();
        }
        else if (c == "Mod") {
            $('select[ng-model="operator"]>option[value="MODULO"]').click();
        }
        else if (c == "Mul") {
            $('select[ng-model="operator"]>option[value="MULTIPLICATION"]').click();
        }
        else if (c == "Sub") {
            $('select[ng-model="operator"]>option[value="SUBTRACTION"]').click();
        }
        element(by.id("gobutton")).click();

    }

    it("Open calculator app web page", function () {
        browser.manage().window().maximize();
        browser.get("https://juliemr.github.io/protractor-demo/");
        console.log("page open");
    });


    // it("Verify Calculator Functionality", function () {
    //     calc(3, 3, 'Div');
    //     calc(2, 2, 'Add');
    //     $$('tr[ng-repeat="result in memory"]>td:nth-child(3)').each(function (item, index) {
    //         item.getText().then(function (text) {
    //             console.log(`Result ${index + 1}: ` + text) //Right now this message is being printed before the IT.
    //         });
    //     });
    // });

    it("Verify Addition", function () {
        calc(2, 2, 'Add');
        $('td:nth-child(3)').getText().then(function (text) {
            console.log(expect(text).toEqual('4'));
            console.log(`Addition tested successfully, sum is equal to: ${text}`)
        });
    })

    it("Verify Division", function () {
        calc(2, 2, 'Div');
        $('td:nth-child(3)').getText().then(function (text) {
            console.log(expect(text).toEqual('1'));
            console.log(`Division tested successfully, result is equal to: ${text}`)
        });
    });


    it("Verify Multiplication", function () {
        calc(2, 3, 'Mul');
        $('td:nth-child(3)').getText().then(function (text) {
            console.log(expect(text).toEqual('6'));
            console.log(`Multiplication tested successfully, result is equal to: ${text}`)
        });
    });

    it("Verify Modulus", function () {
        calc(5, 2, 'Mod');
        $('td:nth-child(3)').getText().then(function (text) {
            console.log(expect(text).toEqual('1'));
            console.log(`Modulus tested successfully, result is equal to: ${text}`)
        });
    });

    it("Verify Substraction", function () {
        calc(2, 2, 'Sub');
        $('td:nth-child(3)').getText().then(function (text) {
            console.log(expect(text).toEqual('0'));
            console.log(`Substraction tested successfully, result is equal to: ${text}`)
        });
    });

    it("**Close browser**", function () {
        browser.close();
        console.log("page closed.");
    });
});