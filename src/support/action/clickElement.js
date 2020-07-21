import checkElementCount from '../check/checkElementCount';

/**
 * Perform an click action on the given element
 * @param  {String}   action  The action to perform (click or doubleClick)
 * @param  {String}   type    Type of the element (link or selector)
 * @param  {String}   element Element selector
 */
module.exports = (action, type, element) => {
    /**
     * Element to perform the action on
     * @type {String}
     */

    // Jono: Fix issue where clicking by button text didn't work
    var elem = element;
    if (type === 'link') {
        elem = `=${element}`;
    } else if (type === 'button') {
        // A button may be selected by text or value
        elem = `button=${element}`;
        if (browser.elements(elem).value.length === 0) {
            elem = `[value=${element}]`;
        }
    }

    /**
     * The method to call on the browser object
     * @type {String}
     */
    const method = (action === 'click') ? 'click' : 'doubleClick';

    checkElementCount(elem, 1);

    browser[method](elem);
};
