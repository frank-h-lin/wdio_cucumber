/**
 * Check if the given element exists in the DOM one or more times
 * @param  {String}  element  Element selector
 * @param  {Number}  count  Check if the element exists exactly this number
 *                            of times
 */
module.exports = (element, count) => {
    /**
     * The number of elements found in the DOM
     * @type {Int}
     */
    const nrOfElements = browser.elements(element).value;
    if (count) {
        expect(nrOfElements).to.have.lengthOf(
            count,
            `Element with selector "${element}" should exist exactly ` +
            `${count} time(s)`
        );
    } else {
        expect(nrOfElements).to.have.length.of.at.least(
            1,
            `Element with selector "${element}" should exist on the page`
        );
    }
};
