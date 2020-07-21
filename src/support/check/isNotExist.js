/**
 * Check if the given element is not in the current DOM
 * @param  {String}   selector  Element selector
 */
module.exports = (selector) => {
    /**
     * Elements found in the DOM
     * @type {Object}
     */
    const elements = browser.elements(selector).value;
    expect(elements).to.have
        .lengthOf(0, `Expected element "${selector}" not to exist`);
};
