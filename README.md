# Cucumber + WebdriverIO acceptance tests
Based on [cucumber-boilerplate](https://github.com/webdriverio/cucumber-boilerplate)

## Requirements

- Node version 7.6 or higher

## Quick start

Install the dependencies (`npm install`)


Run features using [WDIO runner](http://webdriver.io/guide/testrunner/gettingstarted.html):

```sh
$ npm run test:svt
```

svt can be replaced with other defined environments. This reads the configuration file `wdio.<ENVIRONMENT>.conf.js` which inherits from the base configuration `wdio.conf.js`.



## Feature files

Tests are written in [Gherkin syntax](https://cucumber.io/docs/reference)
that means that you write down what's supposed to happen in a real language. All test files are located in
`./src/features/*` and have the file ending `.feature`. See below for how to write tests using predefined steps.



### Running single feature
Sometimes its useful to only execute a single feature file, to do so use the following command:

```sh
$ wdio -- --spec ./test/features/select.feature
```
NOTE: I was having issues with the above saying 'wdio: command not found, but this works:'
```sh
$ ./node_modules/webdriverio/bin/wdio --spec ./src/features/navigation/desktop_navigation_keyboard.feature
```


### Using tags

If you want to run only specific tests you can mark your features with tags. These tags will be placed before each feature like so:

```gherkin
@Tag
Feature: ...
```

To run only the tests with specific tag(s) use the `--cucumberOpts.tagExpression=` parameter like so:

```sh
$ wdio -- --cucumberOpts.tagExpression=@Tag,@AnotherTag
```

You can add multiple tags separated by a comma

### Pending test

If you have failing or unimplemented tests you can mark them as "Pending" so they will get skipped.

```gherkin
// skip whole feature file
@Pending
Feature: ...

// only skip a single scenario
@Pending
Scenario: ...
```

### Adding new steps and snippets

The predefined snippets allow you to do a lot of common things but you might need extra snippets which
are better aligned with your aims. To do so you will find all step definitions in `./src/steps`. They
are separated in `given`, `when` and `then`.

You define your snippet using regular expressions. This is pretty powerful as it allows you to create complex
sentences with multiple options. Everything that's within `"([^"]*)?"` gets captured and appended to the
callback. The last argument is always a callback function that you need to call when your step is done.
You can access the browser and your WebdriverIO instance with `browser`.

To assert values this boilerplate project comes with a [Chai](http://chaijs.com/) integration.

### Comments

You can add additional descriptive comments in your feature files.

```gherkin
###
  This is a
  block comment
###
Feature: As a bystander
    I can watch bottles falling from a wall
    So that I can be mildly amused

# This is a single line comment
Scenario: check if username is present
    Given I login as "roboter" with password "test123"
    Then the username "roboter" should be present in the header
```

# Predefined steps from cucumber-boilerplate project

Check out all predefined snippets. You can see how they get used in [`sampleSnippets.feature`](https://github.com/webdriverio/cucumber-boilerplate/blob/master/src/features/sampleSnippets.feature).

## Given steps

- `I open the (url|site) "([^"]*)?"` <br>Open a site in the current browser window/tab
- `the element "([^"]*)?" is( not)* visible` <br>Check the (in)visibility of a element
- `the element "([^"]*)?" is( not)* enabled` <br>Check if a element is (not) enabled
- `the element "([^"]*)?" is( not)* selected` <br>Check if a element is (not) selected
- `the checkbox "([^"]*)?" is( not)* checked` <br>Check if a checkbox is (not) checked
- `there is (an|no) element "([^"]*)?" on the page` <br>Check if a element (does not) exist
- `the title is( not)* "([^"]*)?"` <br>Check the title of the current browser window/tab
- `the element "([^"]*)?" contains( not)* the same text as element "([^"]*)?"` <br>Compaire the text of two elements
- `the (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"` <br>Check if a element contains the given text
- `the (button|element) "([^"]*)?"( not)* contains any text` <br>Check if a element does not contain any text
- `the (button|element) "([^"]*)?" is( not)* empty` <br>Check if a element is empty
- `the page url is( not)* "([^"]*)?"` <br>Check the url of the current browser window/tab
- `the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"` <br>Check the value of a element's (css) attribute
- `the cookie "([^"]*)?" contains( not)* the value "([^"]*)?"` <br>Check the value of a cookie
- `the cookie "([^"]*)?" does( not)* exist` <br>Check the existence of a cookie
- `the element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)` <br>Check the width/height of a element
- `the element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis` <br>Check the position of a element
- `I have a screen that is ([\d]+) by ([\d]+) pixels` <br>Set the browser size to a given size
- `I have closed all but the first (window|tab)` <br>Close all but the first browser window/tab
- `a (alertbox|confirmbox|prompt) is( not)* opened` <br>Check if a modal is opened

## Then steps

- `I expect that the title is( not)* "([^"]*)?"` <br>Check the title of the current browser window/tab
- `I expect that element "([^"]*)?" does( not)* appear exactly "([^"]*)?" times` <br>Checks that the element is on the page a specific number of times
- `I expect that element "([^"]*)?" is( not)* visible` <br>Check if a certain element is visible
- `I expect that element "([^"]*)?" becomes( not)* visible` <br>Check if a certain element becomes visible
- `I expect that element "([^"]*)?" is( not)* within the viewport` <br>Check if a certain element is within the current viewport
- `I expect that element "([^"]*)?" does( not)* exist` <br>Check if a certain element exists
- `I expect that element "([^"]*)?"( not)* contains the same text as element "([^"]*)?"` <br>Compare the text of two elements
- `I expect that (button|element) "([^"]*)?"( not)* contains the text "([^"]*)?"` <br>Check if a element or input field contains the given text
- `I expect that (button|element) "([^"]*)?"( not)* contains any text` <br>Check if a element or input field contains any text
- `I expect that (button|elementelement) "([^"]*)?" is( not)* empty` <br>Check if a element or input field is empty
- `I expect that the url is( not)* "([^"]*)?"` <br>Check if the the URL of the current browser window/tab is a certain string
- `I expect that the path is( not)* "([^"]*)?"` <br>Check if the path of the URL of the current browser window/tab is a certain string
- `I expect the url to( not)* contain "([^"]*)?"` <br>Check if the URL of the current browser window/tab contains a certain string
- `I expect that the( css)* attribute "([^"]*)?" from element "([^"]*)?" is( not)* "([^"]*)?"` <br>Check the value of a element's (css) attribute
- `I expect that checkbox "([^"]*)?" is( not)* checked` <br>Check if a check-box is (not) checked
- `I expect that element "([^"]*)?" is( not)* selected` <br>Check if a element is (not) selected
- `I expect that element "([^"]*)?" is( not)* enabled` <br>Check if a element is (not) enabled
- `I expect that cookie "([^"]*)?"( not)* contains "([^"]*)?"` <br>Check if a cookie with a certain name contains a certain value
- `I expect that cookie "([^"]*)?"( not)* exists` <br>Check if a cookie with a certain name exist
- `I expect that element "([^"]*)?" is( not)* ([\d]+)px (broad|tall)` <br>Check the width/height of an element
- `I expect that element "([^"]*)?" is( not)* positioned at ([\d]+)px on the (x|y) axis` <br>Check the position of an element
- `I expect that element "([^"]*)?" (has|does not have) the class "([^"]*)?"` <br>Check if a element has a certain class
- `I expect a new (window|tab) has( not)* been opened` <br>Check if a new window/tab has been opened
- `I expect the url "([^"]*)?" is opened in a new (tab|window)` <br>Check if a URL is opened in a new browser window/tab
- `I expect that element "([^"]*)?" is( not)* focused` <br>Check if a element has the focus
- `I wait on element "([^"]*)?"( for (\d+)ms)*( to( not)* (be checked|be enabled|be selected|be visible|contain a text|contain a value|exist))*` <br>Wait for a element to be checked, enabled, selected, visible, contain a certain value or text or to exist
- `I expect that a (alertbox|confirmbox|prompt) is( not)* opened` <br>Check if a modal is opened
- `I expect that a (alertbox|confirmbox|prompt)( not)* contains the text "$text"` <br>Check the text of a modal

## When steps

- `I (click|doubleclick) on the (link|button|element) "([^"]*)?"` <br>(Double)click a link, button or element
- `I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"` <br>Add or set the content of an input field
- `I clear the inputfield "([^"]*)?"` <br>Clear an input field
- `I drag element "([^"]*)?" to element "([^"]*)?"` <br>Drag a element to another element
- `I submit the form "([^"]*)?"` <br>Submit a form
- `I pause for (\d+)ms` <br>Pause for a certain number of milliseconds
- `I set a cookie "([^"]*)?" with the content "([^"]*)?"` <br>Set the content of a cookie with the given name to  the given string
- `I delete the cookie "([^"]*)?"` <br>Delete the cookie with the given name
- `I press "([^"]*)?"` <br>Press a given key. You’ll find all supported characters [here](https://w3c.github.io/webdriver/webdriver-spec.html#keyboard-actions). To do that, the value has to correspond to a key from the table.
- `I (accept|dismiss) the (alertbox|confirmbox|prompt)` <br>Accept or dismiss a modal window
- `I enter "([^"]*)?" into the prompt` <br>Enter a given text into a modal prompt
- `I scroll to element "([^"]*)?"` <br>Scroll to a given element
- `I close the last opened (window|tab)` <br>Close the last opened browser window/tab
- `I focus the last opened (window|tab)` <br>Focus the last opened browser window/tab
- `I log in to site with username "([^"]*)?" and password "([^"]*)?"` <br>Login to a site with the given username and password
- `I select the (\d+)(st|nd|rd|th) option for element "([^"]*)?"` <br>Select a option based on it's index
- `I select the option with the (name|value|text) "([^"]*)?" for element "([^"]*)?"` <br>Select a option based on it's name, value or visible text
- `I move to element "([^"]*)?"( with an offset of (\d+),(\d+))` <br>Move the mouse by an (optional) offset of the specified element
