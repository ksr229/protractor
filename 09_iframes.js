// import { element } from "protractor";

// import { isMainThread } from "worker_threads";
// import { browser } from "protractor";

/**
 * Handling iframes
 * Website: http://www.qaclickacademy.com/practice.php
 * GOAL: Try to click on the Login Link inside the iframe.
 * id of Course Iframe: courses-iframe
 * element to print text/click: <a href="http://qaclickacademy.usefedora.com/sign_in"><i class="fa fa-lock fa-lg"></i><span>Login</span></a>
 */

 describe("Testing iframes", function(){
    it("Switching between frames", function(){
        browser.waitForAngularEnabled(false);                               //DISABLE ANGULAR WAIT when switching between non angular and angular web pages ****** This will tell browser to not wait for loading Angular on the web page.
        browser.manage().window().maximize();
        browser.get("http://www.qaclickacademy.com/practice.php");
        browser.getTitle().then(function(title){
            console.log(`The Title of the webpage is: '${title.toUpperCase()}'`);
        });
        // browser.switchTo().frame("courses-iframe");                     // Switching to an iframe. If you do not give this command the below element will not be detected.
        element(by.linkText("Login")).click().then(function(){             
            browser.sleep(3000);
        });


    });
 });