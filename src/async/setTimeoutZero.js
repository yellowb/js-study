/**
 * Created by HUANGYE2 on 7/12/2017.
 */

/**
 * A Demo for setTimeout(fn, 0)
 *
 * The trick is to let the fn not to pause outer running function, just push fn into event queue, when the JS
 * engine is free, fn will be executed.
 *
 */

console.log('start.');

(function renderAndCalculation() {

    // Image you are rendering the UI...
    console.log('render......');

    // Some very heavy operations, if we do not use setTimeout(0), the UI rendering will be blocked.
    setTimeout(function calculate() {
        // some very complex operations
        var temp = 0;
        for(var i = 0; i < 100000; i++) {
            for(var j = 0; j < 10000; j++) {
                temp += j;
            }
        }
        console.log('calculation done. temp = %s', temp);
    }, 0);
    console.log('render done.')
})();

