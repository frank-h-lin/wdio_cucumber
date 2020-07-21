/**
 * Check the given property of the given element
 * @param  {String}   isCSS         Whether to check for a CSS property or an
 *                                  attribute
 * @param  {String}   attrName      The name of the attribute to check
 * @param  {String}   elem          Element selector
 * @param  {String}   falseCase     Whether to check if the value of the
 *                                  attribute matches or not
 * @param  {String}   isPartialMatch  Whether the value should be partial match
 * @param  {String}   expectedValue The value to match against
 */
module.exports = (isCSS, attrName, elem, falseCase, isPartialMatch, expectedValue) => {
    /**
     * The command to use for fetching the expected value
     * @type {String}
     */
    const command = isCSS ? 'getCssProperty' : 'getAttribute';

    /**
     * Te label to identify the attribute by
     * @type {String}
     */
    const attrType = (isCSS ? 'CSS attribute' : 'Attribute');

    /**
     * The actual attribute value
     * @type {Mixed}
     */
    let attributeValue = browser[command](elem, attrName);

    expect(attributeValue instanceof Array).to.not
        .equal(
            true,
            `Multiple matches found for "${elem}" [${attributeValue}]`
        );


    /**
     * If WebdriverIO returns a object but we retrieve value to assert against a string
     */
    if(attributeValue != undefined && attributeValue instanceof Object &&  attributeValue.value != undefined) {
        attributeValue = attributeValue.value;
    }

    if (attributeValue) {
        // For URL values, remove the host name from attribute value so we compare relative urls
        var currentUrl = browser.getUrl().replace(/http(s?):\/\//, '');
        var currentHost =  `${currentUrl.split('/')[0]}`;
        if (attributeValue.indexOf(currentHost) > -1) {
            attributeValue = attributeValue.replace(/http(s?):\/\//, '');
            attributeValue = attributeValue.replace(currentHost, '');
        }
    }

    if(!isPartialMatch) {

        if (falseCase) {
            expect(attributeValue).to.not
                .equal(
                    expectedValue,
                    `${attrType} of element "${elem}" should not be equal to ` +
                    `"${attributeValue}"`
                );
        } else {
            expect(attributeValue).to
                .equal(
                    expectedValue,
                    `${attrType} of element "${elem}" should not be equal to ` +
                    `"${attributeValue}", but "${expectedValue}"`
                );
        }
    } else {

        if (falseCase) {
            expect(attributeValue).to.not
                .contain(
                    expectedValue,
                    `${attrType} of element "${elem}" should not contain ` +
                    `"${attributeValue}"`
                );
        } else {
            expect(attributeValue).to
                .contain(
                    expectedValue,
                    `${attrType} of element "${elem}" should not contain ` +
                    `"${attributeValue}", but "${expectedValue}"`
                );
        }

    }
};
