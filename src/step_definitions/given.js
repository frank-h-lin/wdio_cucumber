import { Given } from 'cucumber';

import closeAllButFirstTab from '../support/action/closeAllButFirstTab';
import openWebsite from '../support/action/openWebsite';
import resizeScreenSize from '../support/action/resizeScreenSize';

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);

Given(
    /^I have a screen that is ([\d]+) by ([\d]+) pixels$/,
    resizeScreenSize
);

Given(
    /^I have closed all but the first (window|tab)$/,
    closeAllButFirstTab
);
