describe('Find and enter first number', function () {
    it('Open Test Website', function () {
        console.log("Starting the test");
        browser.manage().window().maximize();
        browser.get('https://juliemr.github.io/protractor-demo/');
        browser.sleep(4000);
        element(by.model("first")).sendKeys('3').then(function () {
            console.log("First Number is found and value was entered.");
            element(by.model("second")).sendKeys('5').then(function () {
                console.log("Second Number is found and value was entered.")
                browser.sleep(4000);
                element(by.id("gobutton")).click().then(function () {
                    var output = element(by.css("h2[class='ng-binding']")).getText().then(function (text) {   //If we dont give the text variable as the return value then the promise will be printed in the output.
                        browser.sleep(2000);
                        console.log("The output is : "+ text);
                        console.log("Test Ended");

                    });

                });
            });
        });
        // browser.sleep(4000);       //At the moment this sleep worked but most of the cases try and give the promises instead whenever there is a dependancy.
        // console.log("Starting the test");

    });
});