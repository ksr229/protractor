
// import { browser, element, by } from protractor
/**
 * Action Chains-Mouse Actions, Keys Library-Keyboard Actions and Window Handles
 * Website: used for testing is https://posse.com/
 */

describe("Test for MouseActions,KeyboardActions and Window Handles", function () {
    it("Mouse Action", function () {
        browser.manage().window().maximize();
        browser.get("https://posse.com/");
        // $('.dropdown-toggle').click();
        browser.actions().mouseMove($('.dropdown-toggle').click()).perform();   //Using ACTION CHAINS/ Although it works as expected with just the simple find and click above as well
        // element(by.model("userInputQuery")).sendKeys('island');
        element(by.linkText("Lunch")).click();
        $('button[type="submit"]').click();
        browser.sleep(3000);

        element.all(by.binding("searchResult.place.name")).count().then(function (resCount) {   //To find out the count of all the search result on the results screen. NOTE: we just use then here as Count only returns 1 value
            console.log(`Total number of search results: ${resCount}`);
            // element.all(by.binding("searchResult.place.name")).get(1).getText().then(function(text){    //This will get text of the element to be clicked. ---JUST FOR TEST
            //     console.log(text);
            // });
            
            browser.getTitle().then(function (title) {
                console.log(`The title before switching: ${title}`)
            });
            element.all(by.binding("searchResult.place.name")).get(1).click();                              // ********WINDOW HANDLES AND SWITCHING BETWEEN HANDLES******
            browser.getAllWindowHandles().then(function (handles) {

                browser.switchTo().window(handles[1]);

                browser.getTitle().then(function (title) {
                    console.log(`The title after switching: ${title}`)
                });

                browser.switchTo().window(handles[0]);

                browser.getTitle().then(function (title) {
                    console.log(`The title after switching to home: ${title}`)
                });
            })

            browser.sleep(3000);
        })

        element(by.binding(""))


    });

});
