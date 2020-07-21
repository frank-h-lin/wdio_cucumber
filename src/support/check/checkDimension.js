/**
 * Check the dimensions of the given element
 * @param  {String}   widthOrHeight  Width or height
 * @param  {String}   elem         Element selector
 * @param  {String}   falseCase    Whether to check if the dimensions match or
 *                                 not
 * @param  {String}   expectedSize Expected size
 */
module.exports = (widthOrHeight, elem, falseCase, expectedSize) => {
    /**
     * The size of the given element
     * @type {Object}
     */
    const elementSize = browser.getElementSize(elem, widthOrHeight);

    /**
     * Parsed size to check for
     * @type {Int}
     */
    const intExpectedSize = parseInt(expectedSize, 10);

    if (falseCase) {
        expect(elementSize).to.not
            .equal(
                intExpectedSize,
                `Element "${elem}" should not have a ${widthOrHeight} of ` +
                `${intExpectedSize}px`
            );
    } else {
        expect(elementSize).to
            .equal(
                intExpectedSize,
                `Element "${elem}" should have a ${widthOrHeight} of ` +
                `${intExpectedSize}px, but is ${elementSize}px`
            );
    }
};
