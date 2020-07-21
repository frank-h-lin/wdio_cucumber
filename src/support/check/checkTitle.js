/**
 * Check the title of the current browser window
 * @param  {Type}     falseCase     Whether to check if the title matches the
 *                                  expected value or not
 * @param  {Type}     isPartialMatch Whether to do partial match
 * @param  {Type}     expectedTitle The expected title
 */
module.exports = (falseCase, isPartialMatch, expectedTitle) => {
    /**
     * The title of the current browser window
     * @type {String}
     */
    const title = browser.getTitle();

    if (falseCase) {
        if (isPartialMatch) {
            expect(title).to.not
                .contain(
                    expectedTitle,
                    `Expected title not to contain "${expectedTitle}"`
                );
        } else {
            expect(title).to.not
                .equal(
                    expectedTitle,
                    `Expected title not to be "${expectedTitle}"`
                );
        }
    } else {
        if (isPartialMatch) {
            expect(title).to
                .contain(
                    expectedTitle,
                    `Expected title to contain "${expectedTitle}" but found "${title}"`
                );
        } else {
            expect(title).to
                .equal(
                    expectedTitle,
                    `Expected title to be "${expectedTitle}" but found "${title}"`
                );
        }
    }
};
